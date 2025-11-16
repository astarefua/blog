import express from "express";
import { registerUserController, loginUserController , checkAuth } from "../controllers/auth.controller.js";
import { authorizeUser , protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register" , registerUserController)
router.post("/login" , loginUserController)
router.get("/check-auth", protect, authorizeUser ,checkAuth)

export default router