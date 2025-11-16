import prisma from "../../prisma.js";


export const likePostService = async (userId, postId) => {
  
  const post = await prisma.post.findUnique({ where: { id: postId } });
  if (!post) throw new Error("Post not found");

  const existingLike = await prisma.like.findUnique({
    where: {
      userId_postId: { userId, postId }
    }
  });

  if (existingLike) {
    throw new Error("You already liked this post");
  }

  
  return await prisma.like.create({
    data: {
      userId,
      postId
    },
    include: {
      user: {
        select: { id: true, name: true, email: true }
      }
    }
  });
};


export const unlikePostService = async (userId, postId) => {
  const like = await prisma.like.findUnique({
    where: {
      userId_postId: { userId, postId }
    }
  });

  if (!like) {
    throw new Error("You haven't liked this post");
  }

  await prisma.like.delete({
    where: {
      userId_postId: { userId, postId }
    }
  });

  return { message: "Post unliked successfully" };
};


export const getPostLikesService = async (postId) => {
  const post = await prisma.post.findUnique({ where: { id: postId } });
  if (!post) throw new Error("Post not found");

  return await prisma.like.findMany({
    where: { postId },
    include: {
      user: {
        select: { id: true, name: true, email: true }
      }
    },
    orderBy: { createdAt: "desc" }
  });
};


export const likeCommentService = async (userId, commentId) => {
  const comment = await prisma.comment.findUnique({ where: { id: commentId } });
  if (!comment) throw new Error("Comment not found");

  const existingLike = await prisma.like.findUnique({
    where: {
      userId_commentId: { userId, commentId }
    }
  });

  if (existingLike) {
    throw new Error("You already liked this comment");
  }

  return await prisma.like.create({
    data: {
      userId,
      commentId
    },
    include: {
      user: {
        select: { id: true, name: true, email: true }
      }
    }
  });
};


export const unlikeCommentService = async (userId, commentId) => {
  const like = await prisma.like.findUnique({
    where: {
      userId_commentId: { userId, commentId }
    }
  });

  if (!like) {
    throw new Error("You haven't liked this comment");
  }

  await prisma.like.delete({
    where: {
      userId_commentId: { userId, commentId }
    }
  });

  return { message: "Comment unliked successfully" };
};


export const getCommentLikesService = async (commentId) => {
  const comment = await prisma.comment.findUnique({ where: { id: commentId } });
  if (!comment) throw new Error("Comment not found");

  return await prisma.like.findMany({
    where: { commentId },
    include: {
      user: {
        select: { id: true, name: true, email: true }
      }
    },
    orderBy: { createdAt: "desc" }
  });
};


