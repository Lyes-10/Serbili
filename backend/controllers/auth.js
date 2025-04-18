const db = require("../db/models/index");
const {
  BadRequestError,
  UnauthenticatedError,
  ForbiddenError,
  NotFoundError,
} = require("../errors");
const asyncWrapper = require("../middlewares/async");
const bcrypt = require('bcrypt');
const { sendOTP } = require("../utils/OtpVerification");
const { StatusCodes } = require("http-status-codes");
const upload = require('../utils/upload');
const fs = require('fs');
require("dotenv").config();


const refreshToken = asyncWrapper(async (req, res) => {
  const { tokenRefresh } = req.body;
  if (!tokenRefresh) {
    return res.status(403).json({ msg: "Refresh token is invalid" });
  }

  //verify token ( DB and JWT)
  const storedToken = await db.refreshToken.verifyToken(tokenRefresh);
  if (!storedToken) {
    throw new ForbiddenError("Invalid refresh token");
  }
  // GET the user
  const user = await db.Users.findOne({
    where: { id: storedToken.userId },
    attributes: { exclude: ["password"] },
  });
  if (!user) {
    throw new NotFoundError("User not found");
  }

  //generate the new access token
  const newAccessToken = await user.generateAccessToken();
  //generate the new refresh token
  res.cookie('accessToken', newAccessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Strict',
    maxAge: process.env.COOKIE_AGE, // 15 minutes
  });
  return res.status(200).json({
    msg: "Token refreshed successfully",
  });
});
const register = asyncWrapper(async (req, res) => {

  //upload image
  // await new Promise((resolve, reject) => {
  //   upload(req, res, (err) => {
  //     if (err) {
  //       return reject(err);  // Reject the promise if an error occurs
  //     }
  //     resolve();  // Resolve the promise if no error occurs
  //   });
  // });
 
  
  const { firstname, lastname, email, password, userType, phoneNumber, paper, category } = req.body;
  console.log({firstname, lastname, email, password, userType, phoneNumber});
  if (
    !firstname ||
    !lastname ||
    !email ||
    !password ||
    !userType ||
    !phoneNumber
  ) {
    throw new BadRequestError("Please fill all fields");
  }

  
  //image path
  //const imagePath = req.file ? req.file.path : null;
try{
  if (paper) {
    const base64Data = paper.replace(/^data:.*;base64,/, ""); // Remove the Base64 header
    const filePath = `uploads/${Date.now()}-file.png`; // Define the file path
    fs.writeFileSync(filePath, base64Data, "base64"); // Save the file
    console.log("File saved at:", filePath);
  }
  const user = await db.Users.create({
    firstname,
    lastname,
    email,
    phoneNumber,
    password,
    userType,
    isVerified: false,
    paper,
    category
    
  });

  

  await sendOTP(user);

  return res.status(StatusCodes.CREATED).json({
    message: "User created successfully",
    user,
  });
}catch(err){
  console.log(err, "error in creating user");
}
});


const login = asyncWrapper(async (req, res) => {
  const { identifier, password } = req.body;
  if (!identifier || !password) {
    throw new BadRequestError("Please provide phone or email and password");
  }
  const user = await db.Users.findOne({
    where: {
      [db.Sequelize.Op.or]: [
        { email: identifier },
        { phoneNumber: identifier },
      ],
    },
  });
  if (!user) {
    throw new UnauthenticatedError("Invalid credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid credentials");
  }
  const accessToken = await user.generateAccessToken();
  const refreshToken = await db.refreshToken.generateToken(user.id);
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Use secure cookies in production
    sameSite: "Strict",
    maxAge: process.env.COOKIE_AGE, // 15 minutes (same as access token expiration)
  });
  
  return res.status(200).json({
    message: "User logged in successfully",
    user,
    refreshToken: refreshToken.token,
  });
});

const logout = asyncWrapper(async (req, res) => {
  const { tokenRefresh } = req.body;
  if (!tokenRefresh) {
    throw new BadRequestError("Please provide a refresh token");
  }
  const storedToken = await db.refreshToken.verifyToken(tokenRefresh);
  if (!storedToken) {
    throw new ForbiddenError("Invalid or expired refresh token");
  }
  await db.refreshToken.deleteToken(tokenRefresh, storedToken.userId);

  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
  });

  return res.status(200).json({ message: "User logged out successfully" });
});

const requestOtpReset = asyncWrapper(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw new BadRequestError("Please provide an email address");
  }
  const user = await db.Users.findOne({ where: { email } });
  if (!user) {
    throw new NotFoundError("User not found");
  }
  await sendOTP(user);
  return res.status(200).json({ message: "Reset password OTP sent" });
});

const resetPassword = asyncWrapper(async (req, res) => {
  const { email, otp , newPassword} = req.body;
  if ( !email || !otp || !newPassword) {
    throw BadRequestError('Please provide email, otp and new password');
  }
  const user = await db.Users.findOne({ where: { email } });

  if ( !user || !user.otpCode || user.otpCode !== otp || new Date() > user.otpExpiresAt) {
    throw new BadRequestError('Invalid or expired OTP');
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await user.update({ password: hashedPassword, otpCode:null, otpExpiresAt: null });

  res.status(StatusCodes.OK).json({ message: 'Password reset successfully' });

})


module.exports = { register, refreshToken, login, logout, requestOtpReset, resetPassword };