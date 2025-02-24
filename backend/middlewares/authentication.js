const jwt = require("jsonwebtoken");
const db = require("../db/models/index");
const {UnauthenticatedError} = require('../errors');
const { StatusCodes } = require('http-status-codes');
require("dotenv").config();
const authentication = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ msg: "no token provided" });
    }

    const token = authHeader.split(' ')[1];
    try {

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        
        const user = await db.Users.findOne({
          where: { id: decoded.userId },
          attributes: { exclude: ["password"] },
        });

        if (!user) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "User not found" });
        }
        req.user = user;
        
        next();

    } catch (err) {
        
        if (err.name === 'TokenExpiredError') {
            return res.status(StatusCodes.UNAUTHORIZED).json({
              message: 'Token expired',
              expired: true
            });
        }
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: 'Invalid token'
        });
    }
}

module.exports = authentication;

/*
complete the authentication middleware function and export it
complete sign in and signup controller functions
complete the refresh token controller function
understand how the refresh token works
*/ 