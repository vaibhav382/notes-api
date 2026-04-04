import { Router } from "express"
import { createNote, getAllNotes, getNote } from "..//controllers/note.controller.js"

const router = Router()

router.post("/", createNote)
router.get("/", getAllNotes)
router.get("/:id", getNote)

export default router