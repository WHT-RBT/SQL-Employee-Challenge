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
        'Exit'
      ]
    }
  ]);
};

// Prompt user for manager ID
const promptManagerId = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'managerId',
      message: 'Enter the manager ID:'
    }
  ]);
};

// Prompt user for department ID
const promptDepartmentId = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'departmentId',
      message: 'Enter the department ID:'
    }
  ]);
};

// Retrieve and display a list of all employees
const getAllEmployees = () => {
  const sql = 'SELECT * FROM employees';
  db.query(sql, (err, rows) => {
    if (err) {
      console.log('Failed to retrieve list of all employees');
      console.log(err);
      return;
    }
    console.log('--- All Employees ---');
    console.table(rows);
    console.log('---------------------');
    promptAction();
  });
};

// Retrieve and display employees by manager
const getEmployeesByManager = (managerId) => {
  const sql = 'SELECT * FROM employees WHERE manager_id = ?';
  db.query(sql, [managerId], (err, rows) => {
    if (err) {
      console.log('Failed to retrieve employees by manager');
      console.log(err);
      return;
    }
    console.log('--- Employees by Manager ---');
    console.table(rows);
    console.log('----------------------------');
    promptAction();
  });
};

// Retrieve and display employees by department
const getEmployeesByDepartment = (departmentId) => {
  const sql = 'SELECT * FROM employees WHERE department_id = ?';
  db.query(sql, [departmentId], (err, rows) => {
    if (err) {
      console.log('Failed to retrieve employees by department');
      console.log(err);
      return;
    }
    console.log('--- Employees by Department ---');
    console.table(rows);
    console.log('-------------------------------');
    promptAction();
  });
};

// Calculate and display the total utilized budget for each department
const calculateDepartmentBudget = () => {
  const sql = 'SELECT department_id, SUM(salary) AS total_budget FROM employees GROUP BY department_id';
  db.query(sql, (err, rows) => {
    if (err) {
      console.log('Failed to retrieve department budgets');
      console.log(err);
      return;
    }
    console.log('--- Department Budgets ---');
    console.table(rows);
    console.log('--------------------------');
    promptAction();
  });
};

// Start the command-line application
const startApp = () => {
  console.log('=== Employee Management System ===');
  promptAction();
};

// Prompt user for the next action
const promptAction = () => {
  promptActionSelection().then((answers) => {
    switch (answers.action) {
      case 'View all employees':
        getAllEmployees();
        break;
      case 'View employees by manager':
        promptManagerId().then((managerAnswers) => {
          getEmployeesByManager(managerAnswers.managerId);
        });
        break;
      case 'View employees by department':
        promptDepartmentId().then((departmentAnswers) => {
          getEmployeesByDepartment(departmentAnswers.departmentId);
        });
        break;
      case 'Calculate department budget':
        calculateDepartmentBudget();
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
    console.log('Failed to connect to the database');
    console.log(err);
    return;
  }
  console.log('You are now connected to the employee_db database.');
  startApp();
});


// module.exports = db;