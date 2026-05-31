const {fetchAllTasksDB, addTaskDB,removeTaskDB, updateTaskDB} = require('../model/task.model');

const fetchAllTasks = async ()=>{ 
    return await fetchAllTasksDB();
};

const addTask = async (title,description) => {
    if(!title || title.trim()=="")throw new Error('Title Required');

    return await addTaskDB(title,description);
};

const removeTask = async (id)=>{
    if(!id)throw new Error('Id Required to delete Task');
    const deletedTask=await removeTaskDB(id);
    if(!deletedTask)throw new Error('Task not found');
    return deletedTask;
};

const updateTaskStatus = async(id)=>{
    if(!id)throw new Error('Id Required to update Task status');
    
    const update= await updateTaskDB(id);
    if(!update)throw new Error('Unable to update task');
    return update;
}

module.exports = {fetchAllTasks,addTask, removeTask,updateTaskStatus};