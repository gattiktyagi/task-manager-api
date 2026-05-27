const {fetchAllTasksDB, addTaskDB} = require('../model/task.model');

const fetchAllTasks = async ()=>{ 
    return await fetchAllTasksDB();
};

const addTask = async (title,description) => {
    if(!title || title.trim()=="")throw new Error('Title Required');

    return await addTaskDB(title,description);
};

module.exports = {fetchAllTasks,addTask};