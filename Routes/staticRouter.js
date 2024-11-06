const express = require("express");
const User = require("../Models/url");
// const { all } = require("./url");

const router = express.Router();

router.get('/', async (req, res) => {
    const allUrls = await User.find({});
    return res.render("Home", {
        urls: allUrls,
    })
});

router.get('/signup', (req, res) => {
    return res.render("Signup");
});

module.exports = router;