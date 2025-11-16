import prisma from "../../prisma.js";

export const createPostService = async (data) => {
  return await prisma.post.create({
    data,
    include: {
      user: {
        select: { id: true, name: true, email: true }
      },
      _count: {
        select: { likes: true, comments: true }
      }
    }
  });
};

export const getPostsService = async () => {
  return await prisma.post.findMany({
    include: {
      user: {
        select: { id: true, name: true, email: true }
      },
      _count: {
        select: { likes: true, comments: true }
      }
    }
  });
};

export const getPostByIdService = async (id) => {
  return await prisma.post.findUnique({
    where: { id: Number(id) },
    include: {
      user: {
        select: { id: true, name: true, email: true }
      },
      _count: {
        select: { likes: true, comments: true }
      }
    }
  });
};

export const updatePostService = async (id, data) => {
  return await prisma.post.update({
    where: { id: Number(id) },
    data
  });
};

export const deletePostService = async (id) => {
  return await prisma.post.delete({
    where: { id: Number(id) }
  });
};

