const bcrypt  = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const { findOrCreateGoogleUser } = require('../models/userModel');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const signup = (request, resp) => {
  console.log("🔥 Signup route hit!");
  console.log("Body Received:", request.body);

    let   {name, email, phone, password} = request.body;
    
    bcrypt.hash(password, 10, (err, hashPassword) => {
        if(err) return resp.status(500).json( {error: 'password hashing failed'});

        const userData = { name, email, phone, password: hashPassword };
        
        userModel.createUser(userData, (err, result) => {
            if(err) return resp.status(500).json( {error: 'Database Error', details: err});
            resp.status(201).json({ message: 'user registered sussessfully'})
        })
    })
}


const login = (req, res) => {
  const { emailOrPhone, password } = req.body;
  console.log("Login attempt with:", emailOrPhone);
  
  userModel.findByEmailOrPhone(emailOrPhone, (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).json({ error: "User not found" });
    }

    const user = results[0];

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err || !isMatch) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.status(200).json({
        message: "Login successful",
        token,
        user: { id: user.id, name: user.name, role: user.role },
      });
    });
  });
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