const { protect } = require("../middleware/auth.middleware");
const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
  updateProfile,
  changePassword,
  deleteAccount,
} = require("../controllers/auth.controller");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.put("/profile", protect, updateProfile);
router.put("/change-password",protect,changePassword);
router.delete("/delete-account",protect,deleteAccount);
module.exports = router;