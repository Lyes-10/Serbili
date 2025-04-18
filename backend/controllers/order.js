const db = require("../db/models/index");
const {
  BadRequestError,
  UnauthenticatedError,
  ForbiddenError,
  NotFoundError,
} = require("../errors");
require("dotenv").config();
const asyncWrapper = require("../middlewares/async");
const { StatusCodes } = require("http-status-codes");
const { createPayment } = require("../utils/chargilyService");

const placeOrder = asyncWrapper(async (req, res) => {
  const { id: userId, email, firstname, lastname, phoneNumber } = req.user;
  const { method, paymentMethod } = req.body;
  const name = `${firstname} ${lastname}`;

  // Validate payment method
  if (!["credit_card", "cash_on_delivery"].includes(paymentMethod)) {
    throw new BadRequestError("Invalid payment method");
  }

  // Validate credit card method if payment method is credit_card
  if (
    paymentMethod === "credit_card" &&
    !["EDAHABIA", "CIB"].includes(method)
  ) {
    throw new BadRequestError("Invalid credit card method");
  }

  if (!phoneNumber) {
    throw new BadRequestError("Please provide a phone number");
  }

  const cart = await db.Cart.findOne({
    where: { userId },
    include: [{ model: db.CartItem, as: "cartItems" }],
  });

  if (!cart || cart.cartItems.length === 0) {
    throw new BadRequestError("No items in cart");
  }

  let totalAmount = 0;
  let warehouseId = null;

  const checkoutItems = [];
  for (const item of cart.cartItems) {
    const product = await db.Product.findByPk(item.productId);
    if (!product) {
      throw new NotFoundError("Product not found");
    }
    if (!warehouseId) {
      warehouseId = product.warehouseId;
    }

    totalAmount += product.price * item.quantity;
    checkoutItems.push({
      id: product.id,
      name: product.name,
      quantity: item.quantity,
      price: product.price,
      description: product.description,
    });
  }

  const order = await db.Order.create({ userId, totalAmount });
  // Save a snapshot of cartItems as OrderItems
  for (const item of cart.cartItems) {
    const product = await db.Product.findByPk(item.productId);

    await db.OrderItem.create({
      orderId: order.id,
      productId: product.id,
      quantity: item.quantity,
      price: product.price, // snapshot
      size: item.size,
      color: item.color,
    });
  }
  // Clear the cart after placing the order
  await db.CartItem.destroy({ where: { cartId: cart.id } });

  // Only create payment if paymentMethod is credit_card
  let payment = null;
  if (paymentMethod === "credit_card") {
    payment = await createPayment({
      amount: totalAmount,
      email,
      name,
      phone: phoneNumber,
      method,
      orderId: order.id,
      items: checkoutItems,
    });
  }

  const io = req.app.get("io");
  io.to(`user_${warehouseId}`).emit("new-order", {
    orderId: order.id,
    userId,
    totalAmount,
    createdAt: order.createdAt,
    message: "A new order has been placed for your warehouse!",
  });

  // Return response based on whether payment was created or not
  if (payment) {
    res.status(StatusCodes.CREATED).json({
      order,
      paymentUrl: payment.checkout_url,
    });
  } else {
    res.status(StatusCodes.CREATED).json({
      order,
      message: "Order placed successfully",
    });
  }
});

const getUserOrders = asyncWrapper(async (req, res) => {
  const { id: userId } = req.user;

  const orders = await db.Order.findAll({
    where: { userId },
    include: [
      {
        model: db.OrderItem,
        as: "orderItems",
        include: [{ model: db.Product, as: "product" }],
      },
    ],
  });

  if (!orders) {
    throw new NotFoundError("No orders found");
  }

  res.status(StatusCodes.OK).json({ orders });
});

const getOrdersDetails = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const order = await db.Order.findOne({
    where: { id },
    include: [
      {
        model: db.OrderItem,
        as: "orderItems",
        include: [{ model: db.Product, as: "product" }],
      },
    ],
  });

  if (!order) {
    throw new NotFoundError("Order not found");
  }

  return res.status(StatusCodes.OK).json({ order });
});

module.exports = { placeOrder, getUserOrders, getOrdersDetails };
