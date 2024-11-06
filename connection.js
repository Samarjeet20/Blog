const mongoose = require("mongoose");

//connection of MongoDB
async function connectMongoDB(url){
    return mongoose.connect(url);
}

// mongoose
//     .connect('mongodb://127.0.0.1:27017/Backend_Practice')   //this will return a promise
//     .then(() => console.log("MongoDB connection successful"))
//     .catch((err) => console.log("MongoDB connection error", err));

module.exports = {
    connectMongoDB,
};