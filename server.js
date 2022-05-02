const inquirer = require("inquirer");
const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL Username
        user: 'root',
        // Add MySQL Password
        password: 'password',
        database: 'employee_db'
    },
    console.log("Connected to the employee_db database.")
);

// Executes connection on start
db.connect((err)=>{
    if (err) throw (err);
    console.log("There is an error");
});

// Create callback functions for information to add to tables

