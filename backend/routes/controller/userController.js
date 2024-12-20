const bcrypt = require("bcrypt")
const UserModel = require("../../models/userModel")
const AsyncHandler = require("express-async-handler")
const userModel = require("../../models/userModel")
const jwt = require('jsonwebtoken')
const RegisterUser =async (req , res) => {
    try {
        const {username , email , password} = req.body
        const existingEmail = await UserModel.findOne({email}) 
        if (existingEmail) {
            res.status(400).json({
                message : "email already exists"
            })
        } 
        if (!password) {
            res.status(400).json({
                message : "password is a requirement"
            })
        }
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]{8,}$/;
        if (!passRegex.test(password)) {
            res.status(400).json({
                message : "password must at least contains an uppercase , number and a special character"
            })
        } 
        if (!emailRegex.test(email)) {
            res.status(400).json({
                message : "Please enter a valid email address"
            })
        } 
        if (passRegex.test(password) && emailRegex.test(email) ) {
            const gensalt = await bcrypt.genSalt(10)
            const hashedPass = await bcrypt.hash(password, gensalt);
            const UserRegistered = await UserModel.create({
                username ,
                password: hashedPass , 
                email
            })
            if (UserRegistered) {
                res.status(201).json(
                    {
                        id : UserRegistered._id,
                        email : UserRegistered.email ,
                        username : UserRegistered.username,
                        token : SignToken(UserRegistered._id),
                        message : 'Registration complete'
                    }
                )
            }else {
                res.status(400).json({message : "invalid Data check again"})
            }
        }
    } catch (error) {
        console.log(error)
    }
}

const LoginProcess = AsyncHandler(async (req , res) => {
  try {
    const {email , password} = req.body
    const user = await userModel.findOne({email})
    if(!user) {
        res.status(400).json({
            message : "Email doesnt exists register please"
        })
    }
    const PasswordMatched = await bcrypt.compare(password , user.password)
    if (!PasswordMatched) {
        res.status(400).json({
            message : "password doesnt match please check again"
        })
    }
    res.status(200).json({
        id : user._id , 
        username : user.username ,
        email : user.email,
        message : "successfully logged in"
    })
  } catch (error) {
    console.log(error)
  }
})
const GetUser = AsyncHandler(async(req , res) => {
   try {
    const User = await userModel.findById(req.authuser._id).populate('favouriteRecipes')
    if (User) {
        res.status(200).json({
            username : User.username,
            email : User.email,
            favourites : User.favouriteRecipes
        })
    }
    res.status(401).json({
        message : "not authenticated user"
    })
   } catch (error) {
    console.error(error)
    res.status(401).json({
        message : "not authenticated user"
    })
   }
})
const SignToken = (id) => {
    return jwt.sign({id} , process.env.JWT_TOKEN , {expiresIn : "30d"})
}



module.exports = {RegisterUser , LoginProcess , GetUser}