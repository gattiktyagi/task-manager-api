const {fetchAllTasksDB, addTaskDB,removeTaskDB} = require('../model/task.model');

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

module.exports = {fetchAllTasks,addTask, removeTask};