const inquirer = require("inquirer");
const mysql = require("mysql2");
const { exit } = require("process");

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
// Function to establish menu
function prompts() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "doStuff",
            choices: [
                "View All Employees", 
                "View All Roles", 
                "View All Departments",
                "Add Employee",
                "Add Employee Role",
                "Add A Department",
                "Update An Employee", 
                "Exit"
            ]
        }
    ])
    .then(answers=>{
        switch (answers.choice) {
            case "View All Employees":
                viewEmp();                
                break;
            case "View All Roles":
                viewRole();
                break;
            case "View All Departments":
                viewDept();
                break;
            case "Add Employee":
                addEmp();
                break;
            case "Add Employee Role":
                addRole();
                break;
            case "Add A Department":
                addDept();
                break;
            case "Update An Employee":
                updateEmp();
            default:
                console.log("Thank you, good bye!");
                db.end();
                break;
        }
    })
};
// Create path to view list of employees
function viewEmp() {
    db.query("SELECT * FROM employee", (req,res), (err,data)=>{
        err? err: prompts();
    })
};
// Create path to view list of roles
function viewRole() {

};
// Create path to view list of departments
function viewDept() {

};
// Create path to add an employee
function addEmp() {

};
// Create path to add an employee role
function addRole() {

};
// Create path to add a department
function addDept() {

};
// Create path to update employee
function updateEmp() {

};





