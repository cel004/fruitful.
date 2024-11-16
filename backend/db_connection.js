import dotenv from 'dotenv'; // Load environment variables from .env file
dotenv.config();

import { createRequire } from 'module'; // enable using CommonJS require in an ES Module
const require = createRequire(import.meta.url); 
const mysql = require('mysql'); 

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to the MySQL database");
});

export default con;