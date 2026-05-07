import prisma from "../lib/prisma.js"

export const createUser = async (data: any) => {
    return await prisma.user.create({
        data
    })
}