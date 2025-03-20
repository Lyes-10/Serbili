const express = require('express');
const router = express.Router();

const {getProfile,
    dashboardStats} = require('../controllers/profile');

router.get('/profile', getProfile);
router.get('/dashboard-stats', dashboardStats);

module.exports = router;