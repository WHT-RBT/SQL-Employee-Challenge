# SQL: Employee Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![Technologies](https://img.shields.io/badge/-Git-F05032?logo=Git&logoColor=white)
![Technologies](https://img.shields.io/badge/-JavaScript-007396?logo=JavaScript&logoColor=white)
![Technologies](https://img.shields.io/badge/-Node.js-339933?logo=Node.js&logoColor=white)
![Technologies](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white)
![Technologies](https://img.shields.io/badge/-MySQL-4479A1?logo=MySQL&logoColor=white)
![Technologies](https://img.shields.io/badge/-Inquirer-000000?logo=&logoColor=white)
<br>
<br>
<h3>Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS).  
A command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.

<br>
Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.</h3>

<br>

## Table of Contents

- User Story
- Description
- Getting Started
- Walkthrough Video & Images
- Mock Up
- Links
- License

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Description

GIVEN a command-line application that accepts user input <br>
WHEN I start the application <br>
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role <br>
WHEN I choose to view all departments <br>
THEN I am presented with a formatted table showing department names and department ids <br>
WHEN I choose to view all roles <br>
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role <br>
WHEN I choose to view all employees<br>
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to<br>
WHEN I choose to add a department<br>
THEN I am prompted to enter the name of the department and that department is added to the database<br>
WHEN I choose to add a role <br>
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database <br>
WHEN I choose to add an employee <br>
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database <br>
WHEN I choose to update an employee role <br>
THEN I am prompted to select an employee to update and their new role and this information is updated in the database <br><br>

## Getting Started

> To use this application you first need to install all dependencies below from the command line:
>
>Requirements before starting:
> - npm install
> - npm install express mysql2
> - npm i inquirer@8.2.4
>
> Log into mysql and run the database using the following commands, remembering to start your terminal from the db folder:
>
> - mysql -u root -p
>
> - enter your mysql password
>
> - SOURCE schema.sql;
>
> - SOURCE seeds.sql;
>
> Now initiate the application with the following command to start your employee tracker app:
>
> - node index.js
> 
<br>

## Walkthrough Video & Images

The following video shows an example of the application being used from the command line:

![Alt text](assets/12-sql-homework-video-thumbnail.png)

The following image shows the table design of the employee database:

![Alt text](assets/12-sql-homework-demo-01.png)

 <br>
 
## Links & Contact Info

GitHub Repo Link:
        https://github.com/WHT-RBT/SQL-Employee-Tracker <br>
Email:   <a href="mailto:the.whiterabbit@yahoo.com">Email me 🐇</a>

<br>

## License

This project is licensed under the MIT License. See License file for details.