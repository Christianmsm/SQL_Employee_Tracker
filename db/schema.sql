DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE departments (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
department VARCHAR(50) NOT NULL
);

CREATE TABLE roles (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(50) NOT NULL,
salary INT NOT NULL,
department_id INT NOT NULL,
FOREIGN KEY (department_id)
REFERENCES departments(id)
);

CREATE TABLE employees ( 
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
title VARCHAR(50) NOT NULL,
department_id INT NOT NULL,
FOREIGN KEY (department_id)
REFERENCES departments(id)
role_id INT NOT NULL,
FOREIGN KEY (role_id)
REFERENCES roles(id)
);