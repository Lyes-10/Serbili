const express = require("express");
const router = express.Router();
const {
  placeOrder,
  getUserOrders,
  getOrdersDetails,
} = require("../controllers/order");

router.route("/").post(placeOrder);
router.route("/my-order").get(getUserOrders);
router.route("/:id").get(getOrdersDetails);

module.exports = router;
