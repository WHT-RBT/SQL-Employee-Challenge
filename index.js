
const express = require('express');
const inquirer = require('inquirer');

// Import and require mysql2
const mysql = require('mysql2');

// Connects to employee_db database
const db = mysql.createConnection({
  host: 'localhost',
  // MySQL username
  user: 'root',

  // MySQL password
  password: '',
  database: 'employee_db'
});

// Prompt user for action selection
const promptActionSelection = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'Please select an option from the list below:',
      choices: [
        'View all employees',
        'View employees by manager',
        'View employees by department',
        'Calculate department budget',
        'Add a role',
        'Exit'
      ]
    }
  ]);
};

const promptNewRole = async () => {
  const departments = await getAllDepartments();
  return inquirer.prompt([
    {
      type: 'list',
      name: 'department_id',
      message: 'Please select a department:',
      choices: departments
    },
    {
      type: 'input',
      name: 'title',
      message: 'Please enter the title for the new role:'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Please enter the salary for the new role:'
    }
  ]);
};

// Prompt user for manager ID
const promptManagerId = async () => {
  const employees = await getAllEmployees();
  return inquirer.prompt([
    {
      type: 'list',
      name: 'managerId',
      message: 'Please select a manager:',
      choices: employees.map((employee) => ({
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.id
      }))
    }
  ]);
};

// Prompt user for department ID
const promptDepartmentId = async () => {
  const departments = await getAllDepartments();
  return inquirer.prompt([
    {
      type: 'list',
      name: 'departmentId',
      message: 'Please select a department:',
      choices: departments
    }
  ]);
};

const getAllDepartments = async () => {
  try {
    const sql = 'SELECT id AS value, name FROM departments';
    const [rows, fields] = await db.promise().query(sql);
    return rows;
  } catch (error) {
    console.log('Error getting all departments!');
    console.log(error);
  }
};

const getAllEmployees = async () => {
  try {
    const sql = 'SELECT * FROM employees';
    const [rows, fields] = await db.promise().query(sql);
    return rows;
  } catch (error) {
    console.log('Error getting all employees!');
    console.log(error);
  }
};

// Retrieve and display a list of all employees
const getAllEmployeesList = async () => {
  try {
    const employees = await getAllEmployees();
    console.log('*** All Employees ***');
    console.table(employees);
    promptAction();
  } catch (error) {
    console.log('Error getting all employees!');
    console.log(error);
  }
};

// Retrieve and display employees by manager
const getEmployeesByManager = async () => {
  try {
    const { managerId } = await promptManagerId();
    const sql = 'SELECT * FROM employees WHERE manager_id = ?';
    const [rows, fields] = await db.promise().query(sql, [managerId]);
    console.log('*** Employees by Manager ***');
    console.table(rows);
    promptAction();
  } catch (error) {
    console.log('Error getting employees by manager!');
    console.log(error);
  }
};

// Retrieve and display employees by department
const getEmployeesByDepartment = async () => {
  try {
    const { departmentId } = await promptDepartmentId();
    const sql = 'SELECT * FROM employees WHERE department_id = ?';
    const [rows, fields] = await db.promise().query(sql, [departmentId]);
    console.log('*** Employees by Department ***');
    console.log(rows);
    console.table(rows);
    promptAction();
  } catch (error) {
    console.log("Error getting employees by department!");
    console.log(error);
  }
};

// Calculate and display the total utilized budget for each department
const calculateDepartmentBudget = async () => {
  try {
    const sql =
      'SELECT department_id, SUM(salary) AS total_budget FROM employees GROUP BY department_id';
    const [rows, fields] = await db.promise().query(sql);
    console.log('*** Department Budgets ***');
    console.table(rows);
    promptAction();
  } catch (error) {
    console.log('Error calculating department budgets!');
    console.log(error);
  }
};

const addNewRole = async () => {
  try {
    const answers = await promptNewRole();
    const { department_id, title, salary } = answers;
    const sql = 'INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)';
    const [result] = await db.promise().query(sql, [title, salary, department_id]);
    console.log('New role added successfully!');
    promptAction();
  } catch (error) {
    console.log('Error adding new role!');
    console.log(error);
  }
};

// Start the command-line application
const startApp = () => {
  console.log('==>>> Employee Tracker System <<<==');
  promptAction();
};

// Prompt user for the next action
const promptAction = () => {
  promptActionSelection().then((answers) => {
    switch (answers.action) {
      case 'View all employees':
        getAllEmployeesList();
        break;
      case 'View employees by manager':
        getEmployeesByManager();
        break;
      case 'View employees by department':
        getEmployeesByDepartment();
        break;
      case 'Calculate department budget':
        calculateDepartmentBudget();
        break;
      case 'Add a role':
        addNewRole();
        break;
      case 'Exit':
        console.log('Exiting the application...');
        db.end();
        break;
    }
  });
};

// Connect to the database
db.connect((err) => {
  if (err) {
    console.log('Failed to connect to the employee database');
    console.log(err);
    return;
  }
  console.log('You are now connected to the employee database.');
  startApp();
});

