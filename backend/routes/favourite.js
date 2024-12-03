const express = require("express")
const {AuthMiddle} = require("../middleware/AuthMiddleware")
const {addFavourite} = require("./controller/favouriteController")

const router = express.Router() 


router.post("/favrecipe" ,AuthMiddle ,  addFavourite)







module.exports = router