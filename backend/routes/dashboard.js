const express = require("express");
const router = express.Router();
const {
  uploadProfileImage,
  updateProfile,
  getProfile,
  dashboardStats,
} = require("../controllers/profile");


router.route("/profile").get(getProfile).patch(updateProfile);
router.route("/dashboard-stats").get(dashboardStats);
router.route("/upload-profile-image").post(uploadProfileImage);

module.exports = router;
