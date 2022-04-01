const express = require("express");
const mongoose  = require("mongoose");
mongoose.connect("mongodb://localhost:27017/weshoes", err => {
    if (err) return console.log("can not connect to MongoDb", err);
    console.log("successful connection to MongoBb");
})
const app = express();

app.use(express.json());

app.listen("9003", (err)=>{
    if(err) return console.log('server err ', err);
    console.log('server started');
})
