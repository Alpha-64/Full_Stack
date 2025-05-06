const bcrypt  = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const { findOrCreateGoogleUser } = require('../models/userModel');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const signup = async (request, resp) => {
  console.log("🔥 Signup route hit!");
  console.log("Body Received:", request.body);

  const { name, email, phone, password } = request.body;

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const userData = { name, email, phone, password: hashPassword };
    await userModel.createUser(userData);
    return resp.status(201).json({ message: "User registered successfully" });

  } catch (err) {
    console.error("Signup Error:", err);
    return resp.status(500).json({ error: "Internal server error", details: err });
  }
};


// authController.js
const login = async (req, res) => {
  const { emailOrPhone, password } = req.body;
  console.log("Login attempt with:", emailOrPhone);

  try {
    const results = await userModel.findByEmailOrPhone(emailOrPhone);

    if (results.length === 0) {
      return res.status(401).json({ error: "User not found" });
    }

    const user = results[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user.id, name: user.name, role: user.role },
    });
  } catch (err) {
    console.error("Login Error:", err);
    return res.status(500).json({ error: "Internal server error", details: err });
  }
};


const  googleLogin = async (req, res) => {
  try {
    console.log("📨 Google login hit");
    const { credential } = req.body;
    console.log("📨 Received credential:", credential);

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    console.log("👤 Payload from Google:", payload);
    const user = await findOrCreateGoogleUser(payload);

    res.status(200).json({ user, token: user.token });
  } catch (error) {
    console.error("🔐 Google Auth Error:", error);
    res.status(500).json({ message: 'Google login failed' });
  }
};
  module.exports = {signup, login, googleLogin}