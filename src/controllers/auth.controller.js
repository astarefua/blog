import { registerUserService, loginUserService } from "../services/auth.service.js";
import { getUserByIdService } from "../services/user.service.js";

export const registerUserController = async (req,res) => {
    try{
        const user = await registerUserService(req.body)
        res.status(201).json({ message: "User registered successfully", user });

    }catch (err) {
        res.status(400).json({ error: err.message });
  }
}


export const loginUserController =async (req, res) => {
    try{
        const { user, token } = await loginUserService(req.body);
        res.json({ message: "Login successful", user, token });
  } catch (err) {
        res.status(400).json({ error: err.message });
  }
    
}

export const checkAuth = async (req,res) => {
    try{
        const userId = req.user
        const user = await getUserByIdService(userId)


        if(!user){
            return res.status(401).json({success:false , message:"user does exist"})
        }
        res.json({success:true , user:{id:user.id , email:user.email}})
    } catch (err) {
        res.status(400).json({ error: err.message });
  }
}