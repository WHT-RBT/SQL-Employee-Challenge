-- GET /employees: Retrieve a list of all employees.
SELECT *
FROM employee;

-- GET /employees/manager/:managerId: View employees by manager.
SELECT e.*
FROM employee e
JOIN employee m ON e.manager_id = m.id
WHERE m.id = :managerId;

-- GET /employees/department/:departmentId: View employees by department.
SELECT e.*
FROM employee e
WHERE e.department_id = :departmentId;

-- GET /departments/budget: Calculate the total utilized budget for each department.
SELECT d.name AS department_name, SUM(r.salary) AS total_budget
FROM department d
LEFT JOIN role r ON d.id = r.department_id
GROUP BY d.name;
