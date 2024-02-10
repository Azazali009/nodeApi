// Importing required modules
const express = require("express"); // Importing Express.js framework
const router = express.Router(); // Creating a router instance

// Importing the EmployeeController
const EmployeeController = require("../controllers/EmployeeController");

// Defining routes and associating them with controller methods
router.get("/", EmployeeController.index); // Route to handle GET requests for listing employees
router.post("/show", EmployeeController.show); // Route to handle POST requests for showing a specific employee
router.post("/store", EmployeeController.store); // Route to handle POST requests for storing a new employee
router.post("/delete", EmployeeController.destroy); // Route to handle POST requests for deleting an employee

module.exports = router; // Exporting the router for use in other files
