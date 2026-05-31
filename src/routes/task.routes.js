const express=require('express');
const router=express.Router();
const {getAllTasks,postTask,deleteTask,updateStatus} = require('../controllers/task.controller');


router.get('/',getAllTasks);

router.post('/',postTask);

router.delete('/:id',deleteTask);

router.patch('/:id',updateStatus);

module.exports=router;