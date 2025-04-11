const asyncWrapper = require('../middlewares/async');
const db = require('../db/models');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');
const { where, col } = require('sequelize');

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
});

const dashboardStats = asyncWrapper(async (req, res) => {
    const { id: userId } = req.user;
    const netSales = await db.Order.sum('totalAmount', {
        where: { userId }
    });
    
    const delivredOrders = await db.Order.count({
        where: { userId, status: 'DELIVERED' }
    });


    const nOrders = await db.Order.count({
        where: { userId }
    });

    const nCustomers = await db.Order.count({
        distinct: true,
        where: { userId },
        col: 'userId'
    });

    const salesTrends = await db.Order.findAll({
    where: {
        userId,
        createdAt: {
            [db.Sequelize.Op.gte]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000) // Last 7 days
        }
    },
    attributes: [
        [db.Sequelize.fn('DATE', db.Sequelize.col('createdAt')), 'date'],
        [db.Sequelize.fn('SUM', db.Sequelize.col('totalAmount')), 'totalSales']
    ],
    group: ['date'],
    order: [['date', 'ASC']]
});

    return res.status(StatusCodes.OK).json({
        netSales,
        delivredOrders,
        nOrders,
        nCustomers,
        salesTrends
    });
});

const uploadProfileImage = asyncWrapper(async (req, res) => {
    const { id: userId } = req.user;
    const imagePath = req.file.path;

    const user = await db.Users.findByPk(userId);
    if (!user) {
        throw new NotFoundError('User not found');
    }

    await user.update({ profileImage: imagePath });

    return res.status(StatusCodes.OK).json({ message: 'Profile image updated successfully' });
});

const updateProfile = asyncWrapper(async (req, res) => {
    const { id: userId } = req.user;
    const { firstname, lastname, email, phoneNumber, address, emergencyContact } = req.body;

    const user = await db.Users.findByPk(userId);
    if (!user) {
        throw new NotFoundError('User not found');
    }

    await user.update({ firstname, lastname, email, phoneNumber, address, emergencyContact });

    return res.status(StatusCodes.OK).json({ message: 'Profile updated successfully' });
});

module.exports = {
    uploadProfileImage,
    updateProfile,
    getProfile,
    dashboardStats
}