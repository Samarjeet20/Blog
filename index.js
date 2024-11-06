const express = require("express");
const fs = require("fs");
const path = require("path");
const {connectMongoDB} = require("./connection");
const {logReqRes} = require("./Middlewares");  //no need of /index as it by default takes index

const urlRoute = require("./Routes/url");
const userRoute = require("./Routes/user");
const staticRoute = require("./Routes/staticRouter");

const PORT = 8000;
const app = express();

app.set("view engine", "ejs");      //here we set our view engine i.e. we need to tell express which view engine we are using
app.set("views", path.resolve("./views"));    //here we tell where our ejs files are stored, for this we use "path" module

app.get('/test', async (req, res) => {
    const allUrls = await URL.find({});
    return res.render("home");         //"home" is used since file name is home.ejs in views
})

//Middleware plugin
app.use(express.urlencoded({extended : false}));
app.use(logReqRes('log.txt'));

//connection
connectMongoDB("mongodb://127.0.0.1:27017/Backend_Practice")
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((err) => console.log("Error", err));

//Routes
app.use('/url', urlRoute);
app.use('/user', userRoute);
app.use('/', staticRoute);

app.listen(PORT, () => {
    console.log(`Server is started at Port: ${PORT}`);
});