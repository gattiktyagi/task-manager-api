const express = require('express');
const app=express();
const taskRoutes = require('./routes/task.routes');

app.use(express.json());


app.use('/api/tasks',taskRoutes);

module.exports = app;

// app.get('/tasks',(req,res)=>{
//     res.status(200).json({
//         "message":"All tasks fetched successfully",
//         "tasks":tasks
//     });
// })

// app.post('/tasks',(req,res)=>{
//     tasks.push(req.body);
//     res.status(201).json({
//         "message":"New task created successfully",
//     });
// })

// app.delete('/tasks/:id',(req,res)=>{
//     let taskId=req.params.id;
//     tasks.splice(taskId,1);
//     res.status(200).json({
//         "message":"Task deleted successfully"
//     })
    
// })

// app.patch('/tasks/:id',(req,res)=>{
//     let taskId=Number(req.params.id);
//     let title=req.body.title;
//     let description=req.body.description;
    
//     if(!tasks[taskId]){
//         return res.status(404).json({
//             "message":"Task not found"
//         })
//     }
    
//     if(title!==undefined)tasks[taskId].title=title;
//     if(description!==undefined)tasks[taskId].description=description;
//     res.status(200).json({
//         "message":"Task updated successfully",
//         "Updated Task":tasks[taskId]
//     })
// })
