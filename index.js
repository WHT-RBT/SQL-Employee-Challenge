const express = require('express');
const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();


// Connects to employee_db database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: 'employee_db'
  },
  console.log(`You are now connected to employee_db database.`)
);

// route that renders a list of all employees
app.get('/employees', (req, res) => {
  const sql = 'SELECT * FROM employees';
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to retrieve list of all employees' });
      return;
    }
    res.json(rows);
  });
});

// route that updates employee manager
app.put('/employees/:id/manager', (req, res) => {
  const { id } = req.params;
  const { managerId } = req.body;
  const sql = 'UPDATE employees SET manager_id = ? WHERE id = ?';
  db.query(sql, [managerId, id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to update employee manager' });
      return;
    }
    res.json({ message: 'Employee manager has been updated successfully' });
  });
});

// route that allows you to view an employee's by manager
app.get('/employees/manager/:managerId', (req, res) => {
  const { managerId } = req.params;
  const sql = 'SELECT * FROM employees WHERE manager_id = ?';
  db.query(sql, [managerId], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to retrieve employees by manager' });
      return;
    }
    res.json(rows);
  });
});

// route that allows you to view list of employees by department
app.get('/employees/department/:departmentId', (req, res) => {
  const { departmentId } = req.params;
  const sql = 'SELECT * FROM employees WHERE department_id = ?';
  db.query(sql, [departmentId], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to retrieve employees by department' });
      return;
    }
    res.json(rows);
  });
});

// route that allows you to delete deparments
app.delete('/departments/:departmentId', (req, res) => {
  const { departmentId } = req.params;
  const sql = 'DELETE FROM departments WHERE id = ?';
  db.query(sql, [departmentId], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to delete department' });
      return;
    }
    res.json({ message: 'Department has been deleted successfully' });
  });
});
// route that allows you to delete roles
app.delete('/roles/:roleId', (req, res) => {
  const { roleId } = req.params;
  const sql = 'DELETE FROM roles WHERE id = ?';
  db.query(sql, [roleId], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to delete role' });
      return;
    }
    res.json({ message: 'Role has been deleted successfully' });
  });
});
// route that allows you to delete employees
app.delete('/employees/:employeeId', (req, res) => {
  const { employeeId } = req.params;
  const sql = 'DELETE FROM employees WHERE id = ?';
  db.query(sql, [employeeId], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to delete employee' });
      return;
    }
    res.json({ message: 'Employee has been deleted successfully' });
  });
});

// route that lets you view total utilized budget (combined salaries of all employees in each department)
app.get('/departments/budget', (req, res) => {
  const sql = 'SELECT department_id, SUM(salary) AS total_budget FROM employees GROUP BY department_id';
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to retrieve department budgets' });
      return;
    }
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// module.exports = db;