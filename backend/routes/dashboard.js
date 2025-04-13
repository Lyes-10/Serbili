const express = require("express");
const router = express.Router();
const {
  uploadProfileImage,
  updateProfile,
  getProfile,
  dashboardStats,
} = require("../controllers/profile");

const {uploadPaper,
    uploadProfile, }= require('../utils/upload')

// router.get("/profile", getProfile);
// router.get("/dashboard-stats", dashboardStats);
router.route("/profile").get(getProfile).patch(updateProfile);
router.route("/dashboard-stats").get(dashboardStats);
router.route("/upload-profile-image").post( uploadProfile, uploadProfileImage);

module.exports = router;
