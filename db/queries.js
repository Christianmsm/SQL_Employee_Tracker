
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

 const addDepartment = function() {
connection.query(`INSERT INTO departments department SET ?;`, department)
console.log('department added');
 }

 const addRole = function() {
    const query = 'INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)';
    const param = [answers.rol]
connection.query(query, )
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