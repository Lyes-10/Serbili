const express = require('express');
const router = express.Router();
const { updateOrderStatus } = require('../controllers/tracking');
const authentication = require('../middlewares/authentication');
const authorizeRoles = require('../middlewares/authorizeRoles');
const auths = [authentication, authorizeRoles('warehouse')];

router.route('/:id').patch(...auths, updateOrderStatus);

module.exports = router;
