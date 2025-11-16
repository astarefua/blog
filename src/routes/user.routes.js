import { Router } from "express";
import {
    
    getUser,
    getUserById,
    updateUser,
    deleteUser,
} from "../controllers/user.controller.js"
import { protect, authorizeUser } from "../middlewares/auth.middleware.js";


const router = Router()


router.get("/", getUser)
router.get("/:id", protect, authorizeUser,getUserById )
router.put("/:id",protect, authorizeUser, updateUser)
router.delete("/:id" ,protect, authorizeUser, deleteUser)

export default router;

