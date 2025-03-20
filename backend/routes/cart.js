const express = require("express");
const router = express.Router();
const {
    getCart,
    addToCart,
    updateCartItem,
    deleteCartItem,
    clearCart
} = require('../controllers/cart');

router.route('/').get(getCart).post(addToCart);
router.route('/:cartItemId').patch(updateCartItem).delete(deleteCartItem);
router.route('/clear/:cardId').delete(clearCart);

module.exports = router;