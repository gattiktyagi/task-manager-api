const pool = require('../config/db');

const fetchAllTasksDB = async () => {
    const result = await pool.query(
        "select * from tasks"
    );
    return result.rows;
};

const addTaskDB = async(title , description )=>{
    const newTask = await pool.query(
        "insert into tasks(title, description) values ($1,$2) returning *",[title,description]
    );
    return newTask.rows[0];
};

module.exports = {fetchAllTasksDB, addTaskDB};