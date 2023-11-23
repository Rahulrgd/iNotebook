const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/inotebook?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2"

const connectToMongo = async () =>{
    try {
        await mongoose.connect(mongoURI)
        console.log("Database Connected Successfully!")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToMongo;