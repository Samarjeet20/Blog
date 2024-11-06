const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    }
 },
 {timestamps: true}
);  //here we defined a Schema(Structure of the data)

//now we create a model
const User = mongoose.model("user", userSchema);  //now using this 'User' class/object we can interact with Mongo,  'user' is name of model

module.exports = User;