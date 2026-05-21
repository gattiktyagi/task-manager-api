const express = require('express');
const app=express();

app.use(express.json());
module.exports = app;


const tasks = [];

app.get('/tasks',(req,res)=>{
    res.status(200).json({
        "message":"All tasks fetched successfully",
        "tasks":tasks
    });
})

app.post('/tasks',(req,res)=>{
    tasks.push(req.body);
    res.status(201).json({
        "message":"New task created successfully",
    });
})

app.delete('/tasks/:id',(req,res)=>{
    let taskId=req.params.id;
    tasks.splice(taskId,1);
    res.status(200).json({
        "message":"Task deleted successfully"
    })

})