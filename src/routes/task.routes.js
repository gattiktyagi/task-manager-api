const express=require('express');
const router=express.Router();
const {getAllTasks,postTask} = require('../controllers/task.controller');


router.get('/',getAllTasks);

router.post('/',postTask);


module.exports=router;