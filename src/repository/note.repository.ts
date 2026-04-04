let notes: any[] = []

export const create = async (data: any) => {
    const newNote = {
        id: Date.now().toString(),
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    notes.push(newNote)
    return newNote
}

export const getAllNotes = async () => {
    return notes
}

export const getNote = async (id: string) => {
    return notes.find(n => n.id === id)
}