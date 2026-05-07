import "dotenv/config.js"
import express from "express"
import noteRoutes from "./routes/note.route.js"
import userRoutes from "./routes/user.route.js"

const app = express()

app.use(express.json())

app.use("/notes", noteRoutes)
app.use("/user", userRoutes)


export default app
