import * as noteRepo from "../repository/note.repository.js"

export const createNote = async (data: any) => {
    if (!data.title) {
        throw new Error("Title is required")
    }
    return await noteRepo.create(data)
}

export const getAllNotes = async() => {
    return noteRepo.getAllNotes()
}
