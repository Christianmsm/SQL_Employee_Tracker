//Imports modules needed for the application
const inquirer = require('inquirer');
const mysql = require('mysql2');

const question = 
    {
        type: 'list',
        name: 'operation',
        message: 'What would you like to do?',
        choices: [
        'Add Employee',
        'Update Employee Role',
        'View All Roles',
        'Add Role',
        'View All Departments',
        'Add Department',
        'View All Employees'
    ],
    }

    