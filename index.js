//Imports modules needed for the application
const inquirer = require('inquirer');
const mysql = require('mysql2');
const { departmentQuery, rolesQuery, employeesQuery, addEmployeeQuery, addDepartmentQuery, addRoleQuery, updateEmployeeQuery } = require('./db/queries');


const questions = 
    {
        type: 'list',
        name: 'operation',
        message: 'What would you like to do?',
    choices: [
        'View All Employees',
        'Add Employee',
        'Update Employee Role',
        'View All Roles',
        'Add Role',
        'View All Departments',
        'Add Department',
        'Quit'
    ],
    }

    //Function to initialize the app after the user answers the question
function mainQuestion() {
    inquirer.prompt(questions)
        .then(answer => {
            console.log(answer)
            switch (answer.operation) {
                case 'View All Employees':
                    console.log("view all employees")
                    viewAllEmployees();
                    
                    break;
                case 'Add Employee':
                    console.log('add employee')
                    addEmployee();
                    break;
                case 'Update Employee Role':
                    console.log('update employee')
                    updateEmployeeRole();
                    break;
                case 'View All Roles':
                    console.log('view all roles')
                    viewAllRoles();
                    break;
                case 'Add Role':
                    console.log('role has been added')
                    addRole();
                    break;
                case 'View All Departments':
                    console.log('view all departments')
                    viewAllDepartments();
                    break;
                case 'Add Department':
                    console.log('depatment has been added')
                    addDepartment();
                    break;
                case 'Quit':
                    console.log('quit')
                    break;
            }
        })
        .catch(err => {
            console.log(err);
        });
}

function viewAllEmployees() {

    employeesQuery(mainQuestion);
}

function addEmployee() {
inquirer.prompt([
    {
    type: 'input',
    message: 'What is the first name of the new employee?',
    name: 'newEmployeeFirstName',
    validate: (value) => {
        if (value) {
            return true
        }
        else {
            return 'Please enter the first name of the employee.'
        }},
},
{
    type: 'input',
    message: 'What is the last name of the new employee?',
    name: 'newEmployeeLastName',
    validate: (value) => {
        if (value) {
            return true
        }
        else {
            return 'Please enter the last name of the employee.'
        }},
},
{
    type: 'list',
    message: 'What is the role for the employee?',
    name: 'employeeRole',
    choices: [
        'Regional Manager',
        'Financial Analyst',
        'Lead Architectural Engineer',
        'Public Relations',
        'Chief of Technologies',
    ],
    validate: (value) => {
        if (value) {
            return true
        }
        else {
            return 'Please select a role from the list.'
        }
    }
},
]) .then((answers) => {
    addEmployeeQuery(answers);
})
}

function updateEmployeeRole() {
inquirer.prompt([
    {
        type: 'list',
        message: 'Which employee would you like to update their role for?',
        name: 'updateEmployee',
        choices: [
            'Michael',
            'Chandler',
            'Jeff',
            'Leslie',
            'Tony'
        ],
        validate: (value) => {
            if (value) {
                return true
            } else { return 'Please select an employee.'}},
    },
    {
        type: 'list',
        message: 'What is the new role of this employee?',
        name: 'newRole',
        choices: [
            'Regional Manager',
            'Financial Analyst',
            'Lead Architectural Engineer',
            'Public Relations',
            'Chief of Technologies',
        ],
        validate: (value) => {
            if (value) {
                return true
            } else { return 'Please pick a role from the list.'}},
    },
]).then(() => {
    updateEmployeeQuery();
    mainQuestion();
})
}

function viewAllRoles() {

    rolesQuery(mainQuestion);
}

function addRole() {
inquirer.prompt([
    {
        type: 'input',
        message: 'What is the name of the new role?',
        name: 'roleName',
        validate: (value) => {
            if (value) {
                return true
            }
            else {return 'Please enter a role name.'}},
    },
    {
        type: 'input',
        message: 'What is the salary of this role?',
        name: 'salary'
    },
    {
        type: 'list',
        message: 'What department is this role attached too?',
        name: 'department',
        choices: [
            'Engineering',
            'Sales',
            'Communications',
            'IT',
            'Finance',
        ],
    },
]
).then((answers) => {
    addRoleQuery(answers);
    mainQuestion();
})
}

function viewAllDepartments() {
    departmentQuery(mainQuestion);
}

function addDepartment() {
    inquirer.prompt({
        type: 'input',
        message: 'What is the name of the new department?',
        name: 'department',
        validate: (value) => {
            if (value) {
                return true
            }
            else {
                return 'Please enter the name of the department.'
            }
        },
    })
        .then((answers) => {
            addDepartmentQuery(answers);
            mainQuestion();
        })
}

//Function to initialize the app
function init() {
    mainQuestion();
}

init();

module.exports = mainQuestion