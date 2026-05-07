import prisma from "../lib/prisma.js"
export const createNote = async (data: any) => {
    if (!data.title) {
        throw new Error("Title is required")
    }
    return await prisma.note.create({
        data
    })
}

export const getAllNotes = async(id: string) => {
    return await prisma.note.findMany({
        where: {
            userId: id
        }
    })
}

export const getNote = async (noteId: string) => {
    return await prisma.note.findUnique({
        where: {
            id: noteId
        }
    })
}
