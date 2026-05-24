const express=require('express');
const router=express.Router();

const tasks= [];

router.get('/',(req,res)=>{
    res.status(200).json({
        message:"tasks fetched successfully",
        tasks:tasks
    });
});

router.post('/',(req,res)=>{
    const task={
        id: Date.now(),
        title: req.body.title,
        description:req.body.description
    };
    tasks.push(task);
    res.status(201).json(task);
})


module.exports=router;