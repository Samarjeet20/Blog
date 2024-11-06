const Auth = require("../Models/user");

async function handleUserSignUp(req, res){
    const {name, email, password} = req.body;
    await Auth.create({
        name,
        email,
        password,
    });
    return res.render("Home");
};

module.exports = {
    handleUserSignUp,
};