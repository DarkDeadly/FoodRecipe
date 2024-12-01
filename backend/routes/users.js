const express = require("express")
const {RegisterUser , LoginProcess , GetUser} = require("./controller/userController")
const {AuthMiddle} = require("../middleware/AuthMiddleware")
const router = express.Router() ; 




router.post("/register" , RegisterUser)
router.post("/login" , LoginProcess)
router.get('/getuser' ,AuthMiddle ,GetUser)


module.exports = router