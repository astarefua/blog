import prisma from "../../prisma.js"


export const getUsersService = async () => {
    return await prisma.user.findMany({
        select: { id: true, name: true, email: true } 

    })
    
}


export const getUserByIdService = async (id) => {
    return await prisma.user.findUnique({  
        where: {id},
        select: { id: true, name: true, email: true } 

    })
}

export const updateUserService = async (id, data) => {
    return await prisma.user.update({
        where: {id},
        data,
        select: { id: true, name: true, email: true } 

    })
}

export const deleteUserService = async (id) => {
    return await prisma.user.delete({
         where: {id},
        select: { id: true, name: true, email: true } 

        })
}