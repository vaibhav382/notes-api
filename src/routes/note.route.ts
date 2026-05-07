import { Router } from "express"
import { createNote, getAllNotes, getNote } from "../controllers/note.controller.js"

const router = Router()

router.post("/create", createNote)
router.get("/user/:id", getAllNotes)
router.get("/:noteId", getNote)

export default router