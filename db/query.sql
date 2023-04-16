SELECT * FROM departments 

INSERT INTO employees

UPDATE employees SET role_id WHERE employees.first_name = '';


const departmentQuery = function() {
    connection.query('SELECT * FROM departments;')
}