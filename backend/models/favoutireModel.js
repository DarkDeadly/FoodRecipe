const mongoose = require("mongoose")



const FavouriteModel = new mongoose.Schema({
   UserFav : {
    type : mongoose.Schema.Types.ObjectId ,
    ref : "UserModels",
    required :true
   } ,
   favouriteName : {
    type : String,
    required : true
   },
   favouriteDetails : {
    type : String,
    required : true
   },
})

module.exports = mongoose.model("favourites" , FavouriteModel)