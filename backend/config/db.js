const mongoose = require("mongoose")


const connect = async() => {
    try {
      const conn = await mongoose.connect(process.env.DB_CONNECTION )  
      console.log(`database is connected and the host is the following ${conn.connection.host}` )
    } catch (error) {
        console.log(error)
    }
}



module.exports = connect ;