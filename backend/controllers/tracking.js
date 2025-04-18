const db = require("../db/models");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError, BadRequestError, ForbiddenError } = require("../errors");
const asyncWrapper = require("../middlewares/async");

const updateOrderStatus = asyncWrapper(async (req, res) => {
  const { id: orderId } = req.params;
  const { status } = req.body;

  const validStatuses = ['PENDING', 'SHIPPED', 'DELIVERED', 'CANCELED'];
  if (!validStatuses.includes(status)) {
    throw new BadRequestError("Invalid order status");
  }

  const order = await db.Order.findOne({ where: { id: orderId } });

  if (!order) {
    throw new NotFoundError("Order not found");
  }


  // Optional: Prevent downgrading status (e.g., delivered -> shipped)
  const currentStatusIndex = validStatuses.indexOf(order.status);
  const newStatusIndex = validStatuses.indexOf(status);
  if (newStatusIndex < currentStatusIndex) {
    throw new BadRequestError("You cannot downgrade the order status");
  }

  order.status = status;

  // Set the timestamp for the new status
  if (status === "SHIPPED") order.shippedAt = new Date();
  else if (status === "DELIVERED") order.deliveredAt = new Date();
  else if (status === "CANCELED") order.canceledAt = new Date();

  await order.save();

  const io = req.app.get('io');

  io.to(`user_${order.userId}`).emit('order-status-updated', {
    orderId: order.id,
    status: order.status,
    updatedAt: new Date(),
    message: `Your order #${order.id} has been updated to ${order.status}`,
  });

  return res
    .status(StatusCodes.OK)
    .json({ msg: "Order status updated", order });
});

module.exports = {
  updateOrderStatus,
};
