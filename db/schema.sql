DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE departments (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
department VARCHAR(100) NOT NULL
);

CREATE TABLE roles (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(100) NOT NULL,
salary INT NOT NULL,
department_id INT NOT NULL,
FOREIGN KEY (department_id)
REFERENCES departments(id)
);

CREATE TABLE employees ( 
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(100) NOT NULL,
last_name VARCHAR(100) NOT NULL,
department_id INT NOT NULL,
role_id INT NOT NULL,
FOREIGN KEY (department_id)
REFERENCES departments(id),
FOREIGN KEY (role_id)
REFERENCES roles(id)
);