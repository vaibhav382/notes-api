import type { Request, Response } from "express"
import * as userService from "../services/user.service.js"


export const createUser = async (req: Request, res: Response) => {
    const user = await userService.createUser(req.body)
    return res.status(201).json(user)
}

export const loginUser = async (req: Request, res: Response) => {
    const token = await userService.loginUser(req.body)
    return res.status(201).json({token})
}