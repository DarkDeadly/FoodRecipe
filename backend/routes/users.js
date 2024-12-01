const express = require("express")
const {RegisterUser} = require("./controller/userController")
const router = express.Router() ; 




router.post("/register" , RegisterUser)


module.exports = router