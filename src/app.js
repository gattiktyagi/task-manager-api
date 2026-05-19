const express = require('express');
const app=express();

app.use(express.json());
module.exports = app;


const tasks = [];

app.get('/tasks',(req,res)=>{
    res.status(201).json({
        "message":"All tasks fetched successfully",
        "task":tasks
    });
})