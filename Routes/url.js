const express = require("express");
const {handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser} = require("../Controllers/url");

const router = express.Router();     //we need seperate router as we are making seperate routes folder

//So instead of app.get OR app.post, etc now we write router.get OR router.post, etc
//also instead of /users we can just use /

router
    .route('/')
    .get(handleGetAllUsers)
    .post(handleCreateNewUser);


router
    .route('/:id')
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)

// router.get('/', handleGetAllUsers);
// router.post('/', handleCreateNewUser)

module.exports = router;