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