import type { Request, Response } from "express";
import * as noteService from "../services/note.service.js"

interface NoteParams {
    id: string
}

export const createNote = async (req: Request, res: Response) => {
    const note = await noteService.createNote(req.body)
    return res.status(201).json(note)
}

export const getAllNotes = async (_: Request, res: Response) => {
    const notes = await noteService.getAllNotes()
    return res.status(201).json(notes)
}

export const getNote = async (req: Request<NoteParams>, res: Response) => {
    const note = await noteService.getNote(req.params.id)
    if (!note) {
        return res.status(404).json({ message: "Note not found"})
    }
    return res.status(201).json(note)
}
