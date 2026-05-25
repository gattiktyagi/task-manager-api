const app = require('./app');
const pool = require('./config/db');

require('dotenv').config();
const PORT = process.env.PORT || 3000;

async function startServer() {
    try{
        await pool.query("select 1");
        console.log("Database Connected Successfully");

        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch(error){
        console.error("Database Connection Error");
        console.error(error);
    }
}
startServer();