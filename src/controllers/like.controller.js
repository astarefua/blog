import {
  likePostService,
  unlikePostService,
  getPostLikesService,
  likeCommentService,
  unlikeCommentService,
  getCommentLikesService
} from "../services/like.service.js";


export const likePostController = async (req, res) => {
  try {
    const like = await likePostService(req.user.id, Number(req.params.postId));
    res.status(201).json(like);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


export const unlikePostController = async (req, res) => {
  try {
    const result = await unlikePostService(req.user.id, Number(req.params.postId));
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


export const getPostLikesController = async (req, res) => {
  try {
    const likes = await getPostLikesService(Number(req.params.postId));
    res.json(likes);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


export const likeCommentController = async (req, res) => {
  try {
    const like = await likeCommentService(req.user.id, Number(req.params.commentId));
    res.status(201).json(like);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


export const unlikeCommentController = async (req, res) => {
  try {
    const result = await unlikeCommentService(req.user.id, Number(req.params.commentId));
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


export const getCommentLikesController = async (req, res) => {
  try {
    const likes = await getCommentLikesService(Number(req.params.commentId));
    res.json(likes);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

