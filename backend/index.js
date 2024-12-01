const express = require("express")
const userSettings = require("./routes/users")
require("dotenv").config()
const connectDb = require("./config/db")
const app = express() ;
const port = process.env.PORTENTRY || 3200
connectDb()
app.use(express.json())

app.use('/users' ,userSettings)
app.listen( port, () => {
    console.log(`the server is open on ${port}`)
})