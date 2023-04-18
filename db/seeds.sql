INSERT INTO departments(id, department)
VALUES 
(1, 'Engineering'),
(2, 'Sales'),
(3, 'Communications'),
(4, 'IT'),
(5, 'Finance');

INSERT INTO roles(id, title, salary, department_id)
VALUES 
(1, 'Regional Manager', 80000, 2),
(2, 'Financial Analyst', 100000, 5),
(3, 'Lead Architectural Engineer', 120000, 1),
(4, 'Public Relations', 90000, 3),
(5, 'Chief of Technologies', 400000, 4);

INSERT INTO employees(id, first_name, last_name, department_id, role_id)
VALUES 
(1, 'Michael', 'Scott', 2, 1),
(2, 'Chandler', 'Bing', 5, 2),
(3, 'Jeff', 'Probst', 1, 3),
(4, 'Leslie', 'Knope', 3, 4),
(5, 'Tony', 'Stark', 4, 5);

