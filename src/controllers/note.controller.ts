import type { Request, Response } from "express";
import * as noteService from "../services/note.service.js"

interface NoteParams {
    id: string,
    noteId: string
}

export const createNote = async (req: Request, res: Response) => {
    const note = await noteService.createNote(req)
    return res.status(201).json(note)
}

export const getAllNotes = async (req: Request, res: Response) => {
    const notes = await noteService.getAllNotes(req)
    return res.status(201).json(notes)
}

export const getNote = async (req: Request, res: Response) => {
    const note = await noteService.getNote(req)
    if (!note) {
        return res.status(404).json({ message: "Note not found"})
    }
    return res.status(201).json(note)
}
