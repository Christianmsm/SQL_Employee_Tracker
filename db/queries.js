const {mainQuestion} = require('../index.js');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'for sql',
    database: 'employee_tracker_db'
},
console.log(`Connection to ${database} database successful.`)
);
connection.connect();

// SELECT * FROM departments 

// INSERT INTO employees

// UPDATE employees SET role_id WHERE employees.first_name = '';


const departmentQuery = function() {
    connection.query('SELECT * FROM departments;', (err, res) => {
        console.log(res);
    });
}

 const rolesQuery = function() {
connection.query('SELECT * FORM roles;', (err, res) => {
    console.log(res);
});
 }

 const employeesQuery = function() {
connection.query('SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.salary, departments.department FROM ', (err, res) => {
    console.log(res);
})
 }

 const addDepartment = function() {
connection.query('INSERT INTO departments SET ?;')
console.log('department added');
 }

 const addRole = function() {

 }

 const addEmployee = function() {

 }

const updateEmployee = function(answers) {
const query = 'UPDATE employees SET role_id = (?) WHERE employees.first_name = ';
const param = [answers.employee];
connection.query(query, param, (err, res) => {
    if (err) {
        console.log(err);
    }
        console.log(res);
});
}

module.exports = {departmentQuery, rolesQuery, employeesQuery, addDepartment, addRole, addEmployee, updateEmployee}