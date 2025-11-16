import prisma from "../../prisma.js";

export const authorizePostOwner = async (req, res, next) => {
  const postId = Number(req.params.id);
  const post = await prisma.post.findUnique({ where: { id: postId } });

  if (!post) return res.status(404).json({ error: "Post not found" });

  if (post.userId !== req.user.id) {
    return res.status(403).json({ error: "Forbidden: You can only modify your own posts" });
  }

  next();
};
