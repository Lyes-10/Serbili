const db = require("../db/models/index")
const { BadRequestError, UnauthenticatedError,ForbiddenError , NotFoundError} = require('../errors');
const { sendOTP } = require('../utils/OtpVerification');
require('dotenv').config();

const refreshToken = async (req, res) => {
    const { tokenRefresh } = req.body;
    if ( !tokenRefresh) {
        return res.status(403).json({ msg: 'Refresh token is invalid' }); 
    }
    
    //verify token ( DB and JWT)
    const storedToken = await db.refreshToken.verifyToken(tokenRefresh);
    if (!storedToken ) {
        throw new ForbiddenError('Invalid refresh token');
    }
    // GET the user
    const user = await db.Users.findOne({
        where: { id: storedToken.userId },
        attributes: { exclude: ["password"] }
      }); 
    if (!user) {
        throw new NotFoundError('User not found');
    }
    //delete the old one
    await db.refreshToken.deleteToken(tokenRefresh, user.id);
    //generate the new access token
    const newAccessToken = await user.generateAccessToken();
    //generate the new refresh token
    const newRefreshToken = await db.refreshToken.generateToken(user.id);

    return res.status(200).json({
        accessToken: newAccessToken,
        refreshToken: newRefreshToken.token,
    })
}
const register = async (req, res) => {
    const { firstname, lastname , email , password,userType,phoneNumber } = req.body;
    if (!firstname || !lastname || !email || !password || !userType || !phoneNumber) {
        throw new BadRequestError('Please fill all fields');
    }
   

    const user = await db.Users.create({
        firstname,
        lastname,
        email,
        phoneNumber,
        password,
        userType,
        isVerified: false,
    });
    console.log(user);
    await sendOTP(user);

    // const accessToken = await user.generateAccessToken();

    // const refreshToken = await db.refreshToken.generateToken(user.id)

    return res
      .status(201)
      .json({
        message: "User created successfully",
        user,
        // accessToken,
        // refreshToken: refreshToken.token,
      });
}

const login = async (req, res) => {
    const { identifier, password } = req.body;
    if (!identifier || !password) {
        throw new BadRequestError('Please provide phone or email and password');
    }
    const user = await db.Users.findOne({
        where: {
          [db.Sequelize.Op.or]: [{ email: identifier }, { phoneNumber: identifier }],
        },
    });
    if (!user) {
        throw new UnauthenticatedError('Invalid credentials');
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
        throw new UnauthenticatedError('Invalid credentials');
    }
    const accessToken = await user.generateAccessToken();
    const refreshToken = await db.refreshToken.generateToken(user.id);
    return res.status(200).json({
        message: "User logged in successfully",
        user,
        accessToken,
        refreshToken: refreshToken.token,
    });

}

const logout = async ( req, res) => { 
    const { tokenRefresh } = req.body;
    if (!tokenRefresh) {
        throw new BadRequestError('Please provide a refresh token');
    }
    const storedToken = await db.refreshToken.verifyToken(tokenRefresh);
    if (!storedToken) {
        throw new ForbiddenError('Invalid or expired refresh token');
    }
    await db.refreshToken.deleteToken(tokenRefresh , storedToken.userId);

    return res.status(200).json({ message: 'User logged out successfully' });
}

module.exports = {register ,refreshToken, login, logout};