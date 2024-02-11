// Importing required modules
const { response } = require("express"); // Importing the response object from Express.js
const Employee = require("../models/Employeev2"); // Importing the Employee model
const { error } = require("console"); // Importing the error object from the console module

// Method to show the list of Employees
const index = (req, res, next) => {
  Employee.find() // MongoDB query to retrieve all employees
    .then((response) => {
      res.status(200).json({
        response, // Sending the response as JSON
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: "An error occurred!", // Sending an error message if an error occurs
      });
    });
};

// Method to return a single employee based on the employee ID in the request body
const show = (req, res, next) => {
  let employeeID = req.body.employeeID;
  Employee.findById(employeeID)
    .then((response) => {
      res.status(200).json(response); // Sending the response as JSON
    })
    .catch((error) => {
      res.status(400).json({
        message: "An error occurred!", // Sending an error message if an error occurs
      });
    });
};

// Method to add a new employee
const store = (req, res, next) => {
  let employee = new Employee({
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
  });
  employee
    .save()
    .then((response) => {
      res.status(201).json({
        message: "Employee added successfully", // Sending a success message if employee is added successfully
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: "An error occurred!", // Sending an error message if an error occurs
        error,
      });
    });
};

// Method to update an employee
const update = (req, res, next) => {
  let employeeID = req.body.employeeID;
  let updatedData = {
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
  };
  Employee.findByIdAndUpdate(employeeID, { $set: updatedData })
    .then(() => {
      res.status(201).json({
        message: "Employee updated successfully!", // Sending a success message if employee is updated successfully
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: "An error occurred!", // Sending an error message if an error occurs
      });
    });
};

// Method to delete an employee
const destroy = (req, res, next) => {
  let employeeID = req.body.employeeID;

  Employee.findByIdAndDelete(employeeID)
    .then(() => {
      res.status(200).json({
        message: "Employee deleted successfully!", // Sending a success message if employee is deleted successfully
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: "failed",
        error,
        message: "An error occurred!", // Sending an error message if an error occurs
      });
    });
};

module.exports = { index, show, store, update, destroy }; // Exporting the controller methods
