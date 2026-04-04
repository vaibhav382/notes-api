import express from "express"
import noteRoutes from "./routes/note.route.js"

const app = express()

app.use(express.json())

app.use("/notes", noteRoutes)

app.get("/", (req, res) => {
    res.send("API is running")
})

export default app
