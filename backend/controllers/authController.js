const bcrypt  = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const { trace } = require('../routes/authRoutes');
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client("417292323228-198tqe7smqcqt5jb77khfqbjh4kreuto.apps.googleusercontent.com");
const db = require('../config/db')


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
const googleLogin  = async (req, res) => {
  console.log("🔐 Google Auth Route Hit!");
  console.log("Request body:", req.body);

  const { token } = req.body;
  if (!token) return res.status(401).json({ message: "Missing token" });

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: "417292323228-198tqe7smqcqt5jb77khfqbjh4kreuto.apps.googleusercontent.com",
    });

    const payload = ticket.getPayload();
    const { name, email, sub: google_id } = payload;

    // 🔍 Check if user already exists
    db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
      if (err) {
        console.error("DB Error:", err);
        return res.status(500).json({ message: "Database error" });
      }

      if (results.length > 0) {
        // ✅ User exists
        return res.status(200).json({ message: "Google login successful", user: results[0] });
      } else {
        // ➕ Create user
        db.query(
          "INSERT INTO users (name, email, google_id) VALUES (?, ?, ?)",
          [name, email, google_id],
          (insertErr, insertResults) => {
            if (insertErr) {
              console.error("Insert Error:", insertErr);
              return res.status(500).json({ message: "Failed to create user" });
            }

            return res.status(200).json({
              message: "Google login successful",
              user: { id: insertResults.insertId, name, email, google_id },
            });
          }
        );
      }
    });
  } catch (err) {
    console.error("❌ Google Token Verification Failed:", err);
    return res.status(401).json({ message: "Invalid token" });
  }
}
  module.exports = { signup, login, googleLogin }