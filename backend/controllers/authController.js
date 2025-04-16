const bcrypt  = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');


const signup = (request, resp) => {
    let   {name, email, phone, password} = request.body;
    
    bcrypt.hash(password, 10, (err, hashPassword) => {
        if(err) return resp.status(500).json( {error: 'password hashing failed'});

        const userData = { name, email, phone, password: hashPassword }
        
        userModel.createUser(userData, (err, result) => {
            if(err) return resp.status(500).json( {error: 'Database Error', details: err});
            resp.status(201).json({ message: 'user registered sussessfully'})
        })
    })
}


const login = (req, res) => {
    const { emailOrPhone, password } = req.body;
  
    userModel.findByEmailOrPhone(emailOrPhone, (err, results) => {
      if (err || results.length === 0)
        return res.status(401).json({ error: "User not found" });
  
      const user = results[0];
  
    //   if (user.status !== "active") {
    //     return res.status(403).json({ error: `User is ${user.status}` });
    //   }
  
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });
  
        const token = jwt.sign(
          { id: user.id, role: user.role },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
  
        res.json({
          message: "Login successful",
          token,
          user: { id: user.id, name: user.name, role: user.role }
        });
      });
    });
  };

  module.exports = {signup, login}