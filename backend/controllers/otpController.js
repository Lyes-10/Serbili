const db = require("../db/models/index")
const { BadRequestError, UnauthenticatedError,ForbiddenError , NotFoundError} = require('../errors');

const verifyOTP = async (req, res) => {
    const { userId, otp } = req.body;
    if (!userId || !otp) {
        throw new BadRequestError('Please provide userId and otp');
    }

    const user = await db.Users.findOne({ where: { id: userId } });
    if (!user) {
        throw new NotFoundError('User not found');
    }
    if (user.isVerified) {
        throw new UnauthenticatedError('User is already verified');
    }

    if ( !user.otpCode || user.otpCode !== otpCode || new Date() > user.otpExpiresAt) {
        throw new UnauthenticatedError('Invalid or expired OTP');
    }

    await user.update({ isVerified: true, otpCode: null, otpExpiresAt: null });

    const accessToken = await user.generateAccessToken();

    const refreshToken = await db.refreshToken.generateToken(user.id) 

    return res.status(200).json({
        msg: 'OTP verified successfully',
        accessToken,
        refreshToken: refreshToken.token,
    });

};
module.exports = { verifyOTP };


