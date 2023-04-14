//Imports modules needed for the application
const inquirer = require('inquirer');
const mysql = require('mysql2');

const questions = [
    {
        type: 'list',
        name: 'viewDepartments',
        message: 'What would you like to do?',
        choices: ['Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'View All Employees'],
    },
    {
        type: 'list',
        name: 'addDepartment',
        message: 'What would you like to do?',
        choices: ['Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'View All Employees'],
    },
    {
        type: 'list',
        name: 'viewEmployees',
        message: 'What would you like to do?',
        choices: ['Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'View All Employees'],
    },
    {
        type: 'list',
        name: 'updateEmployeeRole',
        message: 'What would you like to do?',
        choices: ['Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'View All Employees'],
    },
    {
        type: 'list',
        name: 'addEmployee',
        message: 'What would you like to do?',
        choices: ['Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'View All Employees'],
    },
    {
        type: 'list',
        name: 'viewRoles',
        message: 'What would you like to do?',
        choices: ['Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'View All Employees'],
    },
    {
        type: 'list',
        name: 'addRole',
        message: 'What would you like to do?',
        choices: ['Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'View All Employees'],
    },
]
