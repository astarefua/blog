import express from "express"
import {
  createPostController,
  getPostsController,
  getPostByIdController,
  updatePostController,
  deletePostController,
} from "../controllers/post.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { authorizePostOwner } from "../middlewares/post.middleware.js";

const router = express.Router()

router.post("/", protect,createPostController)
router.get("/", getPostsController)
router.get("/:id", getPostByIdController)
router.put("/:id" ,protect, authorizePostOwner, updatePostController)
router.delete("/:id",protect, authorizePostOwner, deletePostController)

export default router