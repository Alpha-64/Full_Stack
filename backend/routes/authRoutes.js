const express = require("express");
const {signup, login } = require("../controllers/authController");
const router = express.Router();
const authController = require('../controllers/authController')

router.post("/signup", signup);
router.post("/login", login);
// Google Sign-In
router.post("/google-auth", authController.googleLogin);

module.exports = router;