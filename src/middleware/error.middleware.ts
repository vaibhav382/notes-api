import type { Request, Response, NextFunction } from "express"

export const errorHandler = (err: Error, _: Request , res: Response, next: NextFunction) => {
    res.status(500).json({
        message: err.message || "Internal server error"
    })
}