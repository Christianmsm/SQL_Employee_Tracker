
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'for sql',
    database: 'employee_tracker_db'
},
console.log(`Connection to database successful.`)
);
connection.connect();


const departmentQuery = function(mainQuestion) {
    connection.query('SELECT * FROM departments;', (err, res) => {
        console.table(res);
        console.log("\n")
        return mainQuestion()
    });
}

 const rolesQuery = function(mainQuestion) {
connection.query('SELECT * FROM roles;', (err, res) => {
    console.table(res);
    console.log("\n")
    return mainQuestion()
});
 }

 const employeesQuery = function(mainQuestion) {
connection.query('SELECT * FROM employees', (err, res) => {
    console.table(res);
    console.log("\n")
    return mainQuestion()
})
 }

 const addDepartmentQuery = function() {
connection.query(`INSERT INTO departments department SET (?);`, department)
console.log('department added');
 }

 const addRoleQuery = function(answers) {
    const query = 'INSERT INTO roles (title, salary) VALUES (?, ?, ?)';
    const param = [answers.roleName, answers.salary, answers.department];
connection.query(query, param, (err, res) => {
    if (err) {
        console.log(err)
    } 
    console.log('New role added ', res)
})
 }

 const addEmployeeQuery = function(answers) {
const query = 'INSERT INTO employees (first_name, last_name, role_id, department_id) VALUES (?, ?, ?)';
const param = [answers.newEmployeeFirstName, answers.newEmployeeLastName, answers.employeeRole];
connection.query(query, param, (err, res) => {
    if (err) {
        console.log(err)
    }
    console.log('New employee added ', res)
})
 }

const updateEmployeeQuery = function(answers) {
const query = 'UPDATE employees SET role_id = (?) WHERE employees.first_name = ';
const param = [answers.employee];
connection.query(query, param, (err, res) => {
    if (err) {
        console.log(err);
    }
        console.log(res);
});
}

module.exports = {departmentQuery, rolesQuery, employeesQuery, addDepartmentQuery, addRoleQuery, addEmployeeQuery, updateEmployeeQuery}