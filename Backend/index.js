const express = require("express")
const app = express()
const dotenv = require("dotenv")
const userRouter = require("./routes/user")
dotenv.config()
const mongoose = require("mongoose")

mongoose.connect(process.env.DB).then(() => console.log("DB connected ")
).catch(() => console.log("DB connected fails"))

app.use(express.json())
app.use("/api/user", userRouter)

app.listen(process.env.PORT_NUMBER || 5000, () => {
 console.log("Server is running")
})