const express = require('express');
const router = express.Router();
const {register, refreshToken, login, logout} = require('../controllers/auth');
const {verifyOTP} = require('../controllers/otpController');
const passport = require('../controllers/passport');

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
// Google callback route
router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }), 
    (req, res) => {
      // Generate JWT token if needed
      res.json({ message: "Google sign-in successful", user: req.user });
    }
);

router.post('/register', register);
router.post('/refresh-token', refreshToken);
router.post('/login', login);
router.post('/logout', logout);
router.post('/verify-otp', verifyOTP);

module.exports = router;