const express = require('express');
const router = express.Router();
const authController=require("../controller/auth.controller")
const authMiddleWare=require("../middleware/auth.middleware")

router.post("/register",authController.registerUser)

router.post("/login",authController.loginUser)

module.exports = router;