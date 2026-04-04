import { Router } from "express"
import { createNote, getAllNotes } from "..//controllers/note.controller.js"

const router = Router()

router.post("/", createNote)
router.get("/", getAllNotes)

export default router