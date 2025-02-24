const nodemailer = require('nodemailer');
const crypto = require('crypto');
require('dotenv').config();

//OTP
const sendOTP = async (user) => {
    const otp = crypto.randomInt(100000, 999999).toString();
    const otpExpire = Date.now() + 10 * 60 * 1000;
    await user.update({ otpCode: otp, otpExpiresAt: otpExpire });

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: 'OTP for password reset',
        text: `Your OTP is ${otp}. It will expire in 10 minutes.`,
    })
}

module.exports = { sendOTP };