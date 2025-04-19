const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");
const authentication = require("../middlewares/authentication");
const authorizeRoles = require("../middlewares/authorizeRoles");
const auths = [authentication, authorizeRoles("warehouse")];
router.route("/").get(...auths, getAllProducts).post(...auths, createProduct);
router.route("/:id").get(...auths, getProduct).patch(...auths, updateProduct).delete(...auths, deleteProduct);

module.exports = router;
