const express = require("express");
const fs = require("fs");


function logReqRes(fileName){
    return (req, res, next) => {
        fs.appendFile(
            fileName, 
            `${Date.now()}, Req Method: ${req.method}, Req Path: ${req.path}\n`, 
        (err, data) => {
            next();
        });
    }
};

module.exports = {
    logReqRes,
};
