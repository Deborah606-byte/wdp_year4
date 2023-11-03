require("dotenv").config();
const mongoose = require ('mongoose');
const connectDB = async() =>{
    try{
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MongoDB_URI);
        console.log('DataBase Connected: $(conn.connection.host)')
    }catch(error){
        console.log(error);

    }
}
module.exports = connectDB;