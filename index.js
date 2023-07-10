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

// renders a list of all employees
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

// updates employee manager
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

// views employee by manager


// views employee by department

// deletes deparments, roles and employees

// views total utilized budget (combined salaries of all employees in each department)


// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// module.exports = db;