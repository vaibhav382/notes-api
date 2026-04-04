import express from "express"
import noteRoutes from "./routes/note.route.js"
import { errorHandler } from "./middleware/error.middleware.js"

const app = express()

app.use(express.json())

app.use(errorHandler)

app.use("/notes", noteRoutes)


export default app
