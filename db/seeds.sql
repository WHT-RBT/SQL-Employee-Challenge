-- Adding department data
INSERT INTO departments (name)
VALUES 
    ('Operations'), 
    ('Marketing'), 
    ('Sales'), 
    ('Technology');

-- Adding role, salary, and department id
INSERT INTO roles (title, salary, department_id)
VALUES 
    ('Director', 280000, 1),
    ('Exec Asst', 90000, 1),
    ('Sales Manager', 135000, 2),
    ('Sales Rep', 90000, 2),
    ('Marketing Manager', 135000, 3),
    ('Exec Asst', 85000, 3),
    ('Engineer', 198000, 4),
    ('Developer', 130000, 4);

-- Adding employee data
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
    ('Joshua', 'Waters', 1, NULL),
    ('Daisy', 'Flowers', 2, 1),
    ('Luke', 'Avery', 3, 1),
    ('Lacy', 'Powers', 4, 3),
    ('Riley', 'Wonders', 5, 1),
    ('Lily', 'Vandermoon', 6, 5),
    ('Holly', 'White', 7, 1),
    ('Rue', 'Smalls', 8, 7);