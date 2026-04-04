import type { Request, Response } from "express";
import * as noteService from "../services/note.service.js"

export const createNote = async (req: Request, res: Response) => {
    const note = await noteService.createNote(req.body)
    res.status(201).json(note)
}
