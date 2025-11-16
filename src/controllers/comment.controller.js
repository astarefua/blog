import { createCommentService, getCommentsByPostService } from "../services/comment.service.js";

export const createCommentController = async (req, res) => {
  try {
    
    const comment = await createCommentService({ ...req.body, userId: req.user.id });
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getCommentsByPostController = async (req, res) => {
  try {
    const comments = await getCommentsByPostService(req.params.postId);
    res.json(comments);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
