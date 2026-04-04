import type { Request, Response } from "express";
import * as noteService from "../services/note.service.js"

interface NoteParams {
    id: string
}

export const createNote = async (req: Request, res: Response) => {
    const note = await noteService.createNote(req.body)
    res.status(201).json(note)
}

export const getAllNotes = async (req: Request, res: Response) => {
    const notes = await noteService.getAllNotes()
    res.status(201).json(notes)
}

export const getNote = async (req: Request<NoteParams>, res: Response) => {
    const { id } = req.params
    const note = await noteService.getNote(id)
    res.status(201).json(note)
}
