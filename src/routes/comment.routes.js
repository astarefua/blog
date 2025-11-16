import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { createCommentController, getCommentsByPostController } from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/", protect, createCommentController); 
router.get("/:postId", getCommentsByPostController); 

export default router;
