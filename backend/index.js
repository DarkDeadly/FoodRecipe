const express = require("express")
const cors = require("cors")
const userSettings = require("./routes/users")
const favouriteSettings = require("./routes/favourite")
require("dotenv").config()
const connectDb = require("./config/db")
const app = express() ;
const port = process.env.PORTENTRY || 3200
connectDb()
app.use(express.json())
app.use(cors())
app.use(cors({
    origin: process.env.FRONTENDLOCALHOST, 
    methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'], 
}))
app.use('/users' ,userSettings)
app.use('/favourite' , favouriteSettings)
app.listen( port, () => {
    console.log(`the server is open on ${port}`)
})