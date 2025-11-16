import {
    
    getUsersService,
    getUserByIdService,
    updateUserService,
    deleteUserService
} from "../services/user.service.js"



export const getUser = async (req,res)=>{
    try{
        const users = await getUsersService()
        res.json(users)
    } catch(err){
        res.status(400).json({ error: err.message });


    }
}


export const getUserById = async (req,res) => {
    try{
        const user = await getUserByIdService(parseInt(req.params.id))
        res.json(user)
    } catch (err){
        res.status(400).json({ error: err.message });

    }
}


export const updateUser = async (req,res) => {
    try{
        const user = await updateUserService(parseInt(req.params.id), req.body)
        res.json(user)
    } catch (err){
        res.status(400).json({ error: err.message });

    }
}


export const deleteUser = async (req,res) => {
    try{
        const user = await deleteUserService(parseInt(req.params.id))
        res.json(user)
    } catch (err){
        res.status(400).json({ error: err.message });

    }
}