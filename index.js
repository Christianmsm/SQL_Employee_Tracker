//Imports modules needed for the application
const inquirer = require('inquirer');
const mysql = require('mysql2');


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
            switch (answer.activity) {
                case 'View All Employees':
                    viewAllEmployees();
                    break;
                case 'Add Employee':
                    addEmployee();
                    break;
                case 'Update Employee Role':
                    updateEmployeeRole();
                    break;
                case 'View All Roles':
                    viewAllRoles();
                    break;
                case 'Add Role':
                    addRole();
                    break;
                case 'View All Departments':
                    viewAllDepartments();
                    break;
                case 'Add Department':
                    addDepartment();
                    break;
                case 'Quit':
                    break;
            }
        })
        .catch(err => {
            console.log(err);
        });
}

function viewAllEmployees() {

}

function addEmployee() {

}

function updateEmployeeRole() {

}

function viewAllRoles() {

}

function addRole() {

}

function viewAllDepartments() {

}

function addDepartment() {

}

//Function to initialize the app
function init() {
    mainQuestion();
}

init();

module.exports = {mainQuestion}