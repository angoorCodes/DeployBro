const express=require("express");
app=express();
app.get("/",function(req,res){
    res.sendFile(__dirname+"index.html")
})