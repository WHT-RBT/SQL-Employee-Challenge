-- Adding department data
INSERT INTO department(department_name, department_id)
VALUES 
    ("Operations", 001), 
    ("Marketing", 002), 
    ("Sales", 003), 
    ("Technology", 004);

-- Adding role, salary and department id
INSERT INTO role(title, salary, department_id)
VALUES 
    ("Director", 280000, 1),
    ("Exec Asst", 90000, 1),
    ("Sales Manager", 135000, 2),
    ("Sales Rep", 90000, 2),
    ("Marketing Manager", 135000, 3),
    ("Exec Asst", 85000, 3),
    ("Engineer", 198000, 4),
    ("Developer", 130000, 4);


-- Adding employee data
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ("Joshua", "Waters", 1, NULL),
    ("Daisy", "Flowers", 1 , 1),
    ("Luke", "Avery", 2, 1),
    ("Lacy", "Powers", 2, 2),
    ("Riley", "Wonders", 3, 1),
    ("Lily", "Vandermoon", 3, 3),
    ("Holly", "White", 4, 1),
    ("Rue", "Smalls", 4, 1);
