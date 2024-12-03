const asyncHandler = require("express-async-handler")
const FavModel = require("../../models/favoutireModel")
const UserModel = require("../../models/userModel")



const addFavourite = asyncHandler(async(req , res) => {
    const {favouriteName , favouriteDetails ,  favouriteImage } = req.body
    const userId = req.authuser._id
    try {
        const favourite = await FavModel.create(
            {
                UserFav : userId,
                favouriteDetails,
                favouriteName,
                favouriteImage
            }
        )
        if (favourite) {
            res.status(200).json({
                id : favourite._id ,
                Details : favourite.favouriteDetails,
                Name : favourite.favouriteName,
                image : favourite.favouriteImage
            })
        }
        const FavToUser = await UserModel.findById(userId)
        FavToUser.favouriteRecipes.push(favourite._id)
        await FavToUser.save();

    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: "An error occurred while adding the favourite" });
    }

})


module.exports = {addFavourite}