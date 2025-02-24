const express = require('express');
const router = express.Router();
const {register, refreshToken, login, logout} = require('../controllers/auth');
const {verifyOTP} = require('../controllers/otpController');


router.post('/register', register);
router.post('/refresh-token', refreshToken);
router.post('/login', login);
router.post('/logout', logout);
router.post('/verify-otp', verifyOTP);
module.exports = router;