import express from "express";
import userRoutes from "./src/routes/user.routes.js"
import postRoutes from "./src/routes/post.routes.js"
import authRoutes from "./src/routes/auth.routes.js"
import { protect  } from "./src/middlewares/auth.middleware.js"
import commentRoutes from "./src/routes/comment.routes.js";
import likeRoutes from "./src/routes/like.routes.js"; 


const app = express()

app.use(express.json())

// public routes
app.use("/auth" , authRoutes)

// protected routes
app.use("/users" , protect , userRoutes)
app.use("/api/posts" , protect,  postRoutes)
app.use("/comments", commentRoutes);
app.use("/likes", likeRoutes); 

app.get("/", (req,res)=>{
    res.status(200).json({success:true , message:"server is running"})

})

app.use((req,res)=>{
    res.status(404).json({success:false , message:"endpoint does not exist"})
})

app.listen(3000, () => console.log("Server running on port 3000"));
