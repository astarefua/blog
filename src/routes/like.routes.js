import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import {
  likePostController,
  unlikePostController,
  getPostLikesController,
  likeCommentController,
  unlikeCommentController,
  getCommentLikesController
} from "../controllers/like.controller.js";

const router = express.Router();

router.post("/posts/:postId", protect, likePostController);
router.delete("/posts/:postId", protect, unlikePostController);
router.get("/posts/:postId", getPostLikesController); 


router.post("/comments/:commentId", protect, likeCommentController);
router.delete("/comments/:commentId", protect, unlikeCommentController);
router.get("/comments/:commentId", getCommentLikesController); 

export default router;

