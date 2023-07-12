-- Adding department data
INSERT INTO department (id, name)
VALUES 
    (111, 'Operations'), 
    (222, 'Marketing'), 
    (333, 'Sales'), 
    (444, 'Technology');

-- Adding role, salary, and department id
INSERT INTO role (id, title, salary, department_id)
VALUES 
    (1, 'Director', 280000, 111),
    (2, 'Exec Asst', 90000, 111),
    (3, 'Sales Manager', 135000, 222),
    (4, 'Sales Rep', 90000, 222),
    (5, 'Marketing Manager', 135000, 333),
    (6, 'Exec Asst', 85000, 333),
    (7, 'Engineer', 198000, 444),
    (8, 'Developer', 130000, 444);

-- Adding employee data
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES 
    (1, 'Joshua', 'Waters', 1, NULL),
    (2, 'Daisy', 'Flowers', 2, 1),
    (3, 'Luke', 'Avery', 3, 1),
    (4, 'Lacy', 'Powers', 4, 3),
    (5, 'Riley', 'Wonders', 5, 1),
    (6, 'Lily', 'Vandermoon', 6, 5),
    (7, 'Holly', 'White', 7, 1),
    (8, 'Rue', 'Smalls', 8, 7);
