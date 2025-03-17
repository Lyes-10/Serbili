const asyncWrapper = require('../middleware/async');
const db = require('../db/models');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');

const getProfile = asyncWrapper(async (req, res)=> {
    const user = await db.Users.findOne({
        where: {
            id: req.user.id
        },
        attributes: ['id','firstname', 'lastname', 'email', 'phoneNumber', 'address', 'profileImage', 'emergencyContact']
    });

    if (!user) {
        throw new NotFoundError('User not found');
    } 
    return res.status(StatusCodes.OK).json({user}) 
})

module.exports = {
    getProfile
}