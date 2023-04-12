DELETE DATABASE IF EXISTS employee-tracker_db;

CREATE DATABASE employee-tracker_db;

USE employee-tracker_db;

CREATE TABLE department (
id INT PRIMARY KEY,
name VARCHAR(50) NOT NULL
);

CREATE TABLE role (
id INT PRIMARY KEY,
title VARCHAR(50) NOT NULL,
salary DECIMAL,
FOREIGN KEY (department_db)
REFERENCES department(id)
);

CREATE TABLE employee (
id  INT PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
role_id int
);