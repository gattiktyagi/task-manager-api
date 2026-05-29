const express=require('express');
const router=express.Router();
const {getAllTasks,postTask,deleteTask} = require('../controllers/task.controller');


router.get('/',getAllTasks);

router.post('/',postTask);

router.delete('/:id',deleteTask);


module.exports=router;