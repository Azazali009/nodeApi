// Importing required modules
const mongoose = require("mongoose"); // Importing Mongoose for MongoDB object modeling

// Defining the schema for the Employee model
const Schema = mongoose.Schema;
const employeeSchema = new Schema(
  {
    name: {
      type: String, // Field for employee name, of type string
    },
    designation: {
      type: String, // Field for employee designation, of type string
    },
    email: {
      type: String, // Field for employee email, of type string
    },
    phone: {
      type: String, // Field for employee phone number, of type string
    },
    age: {
      type: Number, // Field for employee age, of type number
    },
  },
  { timestamps: true } // Adding timestamps for createdAt and updatedAt fields
);

// Defining the Employee model based on the schema
const Employee =
  mongoose.models.Employee || mongoose.model("Employee", employeeSchema);

module.exports = Employee; // Exporting the Employee model for use in other files
