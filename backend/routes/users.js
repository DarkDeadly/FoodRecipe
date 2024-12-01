const express = require("express")
const {RegisterUser , LoginProcess} = require("./controller/userController")
const router = express.Router() ; 




router.post("/register" , RegisterUser)
router.post("/login" , LoginProcess)


module.exports = router