//this file contains the handler functions of routes
const User = require("../Models/url");

async function handleGetAllUsers(req, res){
    const allDbUsers = await User.find({});
    // res.setHeader("X-myName", "Samarjeet Shinde");  // custom header
    return res.json(allDbUsers);
}

async function handleGetUserById(req, res){
    const user = await User.findById(req.params.id);
    if(!user) return res.status(400).json({msg : "User not found"});
    return res.json(user);
}

async function handleUpdateUserById(req, res){
    await User.findByIdAndUpdate(req.params.id, {lastName: "Changed"})
    return res.json({status : "Success"});
}

async function handleDeleteUserById(req, res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status : "Success"});
}

async function handleCreateNewUser(req, res){
    const body = req.body;
    if(
        !body||
        !body.first_Name||
        !body.last_Name||
        !body.email||
        !body.job_Title
    ){
        return res.status(400).json({msg : "All fields are required"});
    }

    const result = await User.create({
        firstName: body.first_Name,
        lastName: body.last_Name, 
        email: body.email, 
        jobTitle: body.job_Title,
    });

    console.log("Result", result);
    return res.status(201).json({msg : "Success", id: result._id});
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
};