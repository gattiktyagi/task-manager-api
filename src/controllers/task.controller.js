const {fetchAllTasks,addTask, removeTask,updateTaskStatus} =require('../services/task.service');

const getAllTasks = async (req,res) => {
    const tasks =await fetchAllTasks();
    res.status(200).json({
        success:true,
        tasks:tasks
    });
};

const postTask = async (req,res) => {
    const {title, description} = req.body;
    const newTask = await addTask(title,description);
    // res.status(201).json({
    //     success:true,
    //     newTask:newTask
    // });
    res.redirect('/index.html');
};

const deleteTask = async (req,res) => {
    const taskId = req.params.id;
    const deleteTask=await removeTask(taskId);
    res.status(200).json({
        message:"Task Deleted SuccessFully",
        deletedTask:deleteTask
    });
};

const updateStatus=async(req,res)=>{
    const taskId=req.params.id;
    const updateTask=await updateTaskStatus(taskId);
    res.status(200).json({
        message:"Task Updated Successfully"
    })
}

module.exports = {getAllTasks,postTask,deleteTask,updateStatus};