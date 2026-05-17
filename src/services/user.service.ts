import prisma from "../lib/prisma.js"
import type { createUserType } from "../types/user.types.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const createUser = async (data: createUserType) => {
    const hashedPassword = await bcrypt.hash(data.password, 10)
    const user = await prisma.user.create({
        data:{
            ...data,
            password: hashedPassword
        }})
    const { password, ...safeUser } = user
    return safeUser
}

export const loginUser = async (data: any) => {
    const user = await prisma.user.findUnique({
        where: {
            email: data.email
        },
        select: {
            id: true,
            password: true
        }
    })

    if (!user) {
        throw new Error("User not found")
    }

    const isValid = await bcrypt.compare(data.password, user.password)

    if (!isValid) {
        throw new Error("Password doesnt match")
    }

    const token = jwt.sign(
        {
            id: user.id
        },
        process.env.JWT_SECRET!,
        {
            expiresIn: "7d"
        }
    )
    return token
}