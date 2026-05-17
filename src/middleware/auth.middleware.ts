import jwt from "jsonwebtoken"
import type { JwtPayload } from "jsonwebtoken"
import type { Request, Response, NextFunction } from "express"

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization
    const token = authHeader?.split(" ")[1]
    if (!token) {
        res.status(401)
    }
    try {
        const decoded = jwt.verify(token!, process.env.JWT_SECRET!) as JwtPayload
        req.payload = decoded
        next()

    }
    catch {
        return res.status(401).json({
            message: "Token is invalid"
        })
    }
}