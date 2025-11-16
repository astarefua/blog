import{
    createPostService,
    getPostsService,
    getPostByIdService,
    updatePostService,
    deletePostService
} from "../services/post.service.js"

export const createPostController = async (req, res) => {
    try {
        const post = await createPostService({ 
            ...req.body, 
            userId: req.user.id 
        })
        res.status(201).json(post)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getPostsController = async (req, res) => {
  try {
    const posts = await getPostsService();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


export const getPostByIdController = async (req, res) => {
  try {
    const post = await getPostByIdService(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


export const updatePostController = async (req, res) => {
    try{
        const updated = await updatePostService(req.params.id, req.body)
        res.json(updated);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
    
}

export const deletePostController = async (req, res) => {
  try {
    await deletePostService(req.params.id);
    res.json({ message: "Post deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



