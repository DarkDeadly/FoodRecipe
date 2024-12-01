const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const UserModel = require("../models/userModel")


const AuthMiddle = asyncHandler(async (req , res , next) => {
    let token  
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
        /*we did req.headers.authorization.split(' ')[1] to get the token because it is located in   
        req.headers.authorization with the value of Bearer token we split it into an array of two elements
        and got the index 1
        */
        token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token , process.env.JWT_TOKEN)
        req.authuser = await UserModel.findById(decoded.id).select("-password")  
        next()
        } catch (error) {
          console.error(error)
          res.status(401).json({
            message : "failed authorization , token failed"
          })  
        }
    if (!token) {
        res.status(401).json({
            message : "failed authorization , no token"
        })
    }
    }
   
})



module.exports = {AuthMiddle}