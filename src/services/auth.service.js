import prisma from "../../prisma.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h"


// register a new user
export const registerUserService = async (data) => {
    const {name , email, password} = data

    const existingUser = await prisma.user.findUnique({
        where: {email}
    })
    if(existingUser) throw new Error("email already registered")

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
        data: {name, email, password: hashedPassword},
        select: { id: true, name: true, email: true }, 

    })

    return user
}


//login a user
export const loginUserService = async (data) => {
    const {email , password } = data

    const user = await prisma.user.findUnique({
        where: {email}
    })

    if (!user) throw new Error("Invalid email or password");


    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) throw new Error("Invalid email or password");

    const token = jwt.sign(
        { id: user.id , email: user.email} , JWT_SECRET , {expiresIn: JWT_EXPIRES_IN}
        
    )

    const { password: _, ...userWithoutPassword } = user;

    return { user: userWithoutPassword, token };
}