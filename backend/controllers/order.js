
const db = require("../db/models/index")
const { BadRequestError, UnauthenticatedError,ForbiddenError , NotFoundError} = require('../errors');
require('dotenv').config();
const asyncWrapper = require("../middlewares/async");
const { StatusCodes } = require('http-status-codes');


const placeOrder = asyncWrapper(async (req, res) => {
    const { id: userId } = req.user;
    const cart = await db.Cart.findOne({
      where: { userId },
      include: [{ model: db.CartItem, as: "cartItems" }],
    }); 

    if (!cart || cart.cartItems.length === 0) {
        throw new BadRequestError('No items in cart');
    }
    let totalAmount = 0;
    for (const item of cart.cartItems) {
        const product = await db.Product.findByPk(item.productId);
        if ( !product ) {
            throw new NotFoundError('Product not found');
        }
        totalAmount += product.price * item.quantity;
    }

    const order = await db.Order.create({ userId, totalAmount});

    await db.CartItem.update({ orderId: order.id }, { where: { cartId: cart.id } });

    // await db.CartItem.destroy({ where : { cartId: cart.id } });

    res.status(StatusCodes.CREATED).json({ order });
})

const getUserOrders = asyncWrapper(async (req, res) => {
    const { id: userId }  = req.user;
    
    const orders = await db.Order.findAll({
        where: { userId },
        include: [ { model: db.CartItem, as: 'cartItems'}]
    });

    if (!orders) {
        throw new NotFoundError('No orders found');
    }

    res.status(StatusCodes.OK).json({ orders });
})

const getOrdersDetails = asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const order = await db.Order.findOne({
        where: { id },
        include:[ {model: db.CartItem, as: 'cartItems'} ]
    })

    if ( !order ) {
        throw new NotFoundError('Order not found');
    }

    return res.status(StatusCodes.OK).json({ order });
});   

module.exports = { placeOrder, getUserOrders, getOrdersDetails };