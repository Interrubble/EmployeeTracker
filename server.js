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
        database: 'employer_db'
    },
    console.log("Connected to the employer_db database.")
);

// Executes connection on start
db.connect((err)=>{
    if (err) throw (err);
    console.log(err);
});

// Create callback functions for information to add to tables
// Function to establish menu
function prompts() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "doStuff",
            choices: ["View All Employees", 
                "View All Roles", 
                "View All Departments",
                "Add Employee",
                "Add Employee Role",
                "Add A Department",
                "Update An Employee", 
                "Exit"],
        }
    ])
    .then(answers=>{
        console.log(answers.doStuff)
        switch (answers.doStuff) {
            case ("View All Employees"):
                viewEmp();                
                break;
            case ("View All Roles"):
                viewRole();
                break;
            case ("View All Departments"):
                viewDept();
                break;
            case ("Add Employee"):
                addEmp();
                break;
            case ("Add Employee Role"):
                addRole();
                break;
            case ("Add A Department"):
                addDept();
                break;
            case ("Update An Employee"):
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
    db.query("SELECT * FROM employee", (err,data)=>{
        err? err : console.table(data);
        prompts();
    })
};
// Create path to view list of roles
function viewRole() {
    db.query("SELECT * FROM roles", (err,data)=>{
        err? err : console.table(data);
        prompts();
    })
};
// Create path to view list of departments
function viewDept() {
    db.query("SELECT * FROM department", (err,data)=>{
        err? err : console.table(data);
        prompts();
    })
};
// Create path to add an employee
function addEmp() {
    inquirer.prompt([
        {
            type:"input",
            message:"What is the employee's first name?",
            name:"first",
        },{
            type:"input",
            message:"What i the employee's last name?",
            name:"last"
        },{
            type:"number",
            message:"What is the employee's role ID number?",
            name:"roleId"
        },{
            type:"number",
            message:"What manager ID does the employee fall under?",
            name:"manId"
        }
    ]).then((answers)=>{
        db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",[answers.first,answers.last,answers.roleId,answers.manId],(err,data)=>{
            err? err : console.table(data);
            prompts();
        });
    })
};
// Create path to add an employee role
function addRole() {
    inquirer.prompt([
        {
            type:"input",
            message:"What is the title of the role?",
            name:"roleTitle"
        },{
            type:"number",
            message:"What is the salary for the role?",
            name:"roleSal"
        },{
            type:"number",
            message:"What is the department ID?",
            name:"roleDep"
        }
    ])
    .then((answers)=>{
        db.query("INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)", [answers.roleTitle, answers.roleSal, answers.roleDep], (err,data)=>{
            err? err : console.table(data);
            prompts();
        })
    })
};
// Create path to add a department
function addDept() {
    inquirer.prompt([
        {
            type:"input",
            message:"What is the name of the new department?",
            name:"dept"
        }
    ])
    .then((answers)=>{
        db.query("INSERT INTO department (department_name) VALUES (?)", answers.dept, (err,data)=>{
            err? err : console.table(data);
            prompts();
        })
    })
};
// Create path to update employee
function updateEmp() {

};

prompts();