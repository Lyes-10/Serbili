const express = require('express');
const router = express.Router();
const {register, refreshToken, login, logout, requestOtpReset, resetPassword} = require('../controllers/auth');
const {verifyOTP} = require('../controllers/otpController');
const {uploadPaper,
    uploadProfile, }= require('../utils/upload')

router.post('/register',uploadPaper, register);
router.post('/refresh-token', refreshToken);
router.post('/login', login);
router.post('/logout', logout);
router.post('/verify-otp', verifyOTP);
router.post('/request-otp', requestOtpReset);
router.post('/reset-password', resetPassword);
module.exports = router;
