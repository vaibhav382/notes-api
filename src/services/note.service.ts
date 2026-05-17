import prisma from "../lib/prisma.js"
export const createNote = async (data: any) => {
    if (!data.body.title) {
        throw new Error("Title is required")
    }
    return await prisma.note.create({
        data:{
            ...data.body,
            userId: data.payload.userId
        }

    })

}

export const getAllNotes = async(data: any) => {
    const id = data.payload.userId
    return await prisma.note.findMany({
        where: {
            userId: id
        }
    })
}

export const getNote = async (data: any) => {
    const noteId = data.params.noteId
    return await prisma.note.findUnique({
        where: {
            id: noteId
        }
    })
}
