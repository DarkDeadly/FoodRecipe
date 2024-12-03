const mongoose = require("mongoose")



const UserModels = new mongoose.Schema(
    {
        username : {
            type : String , 
            required : true
        },
        password : {
            type : String , 
            required : [true , "please provide a password"],
        },
        email : {
            type : String , 
            unique : true ,
            required : true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
        },
        favouriteRecipes :[ {
            type : mongoose.Schema.Types.ObjectId , 
            ref  : "favourites",
        }]
    }
)

module.exports = mongoose.model("UserModels" , UserModels)

