import { Router } from "express"
import { createNote, getAllNotes, getNote } from "../controllers/note.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js"

const router = Router()

router.post("/create", authMiddleware, createNote)
router.get("/user/:id", getAllNotes)
router.get("/:noteId", getNote)

export default router