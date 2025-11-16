import prisma from "../../prisma.js";

export const createCommentService = async (data) => {
  const { content, postId, userId } = data;

  const post = await prisma.post.findUnique({ where: { id: postId } });
  if (!post) throw new Error("Post not found");

  return await prisma.comment.create({
    data: { content, postId, userId },
    include: {
      user: { select: { id: true, name: true, email: true } },
      _count: {
        select: { likes: true }
      }
    }
  });
};

export const getCommentsByPostService = async (postId) => {
  return await prisma.comment.findMany({
    where: { postId: Number(postId) },
    orderBy: { createdAt: "asc" },
    include: {
      user: { select: { id: true, name: true, email: true } },
      _count: {
        select: { likes: true }
      }
    }
  });
};

