// Importing required modules
const mongoose = require("mongoose"); // Importing Mongoose for MongoDB object modeling
const validator = require("validator");

// Defining the schema for the Employee model
const Schema = mongoose.Schema;
const employeeSchema = new Schema(
  {
    name: {
      type: String, // Field for employee name, of type string
      required: [true, "Please tell us your name!"], // It's necessary for the name to be provided
    },
    designation: {
      type: String, // Field for employee designation, of type string
      required: [true, "Please tell us your designation!"], // It's necessary for the designation to be provided
    },
    email: {
      type: String, // Field for employee email, of type string
      required: [true, "Please provide us your email!"], // It's necessary for the email to be provided
      unique: true, // Each email should be unique
      lowercase: true, // Converts the email to lowercase for consistency
      validate: [validator.isEmail, "Please provide a valid email."], // Validates that the email follows the standard format
    },
    phone: {
      type: String, // Field for employee phone number, of type string
      required: [true, "Please provide us your phone!"], // It's necessary for the phone number to be provided
      minlength: [
        11,
        "Please enter correct phone number which must be 11 characters long.", // Validates that the phone number is at least 11 characters long
      ],
    },
    age: {
      type: Number, // Field for employee age, of type number
      required: [true, "Please tell us your age!"], // It's necessary for the age to be provided
    },
  },
  { timestamps: true } // Adding timestamps for createdAt and updatedAt fields
);

// Defining the Employee model based on the schema
const Employee =
  mongoose.models.Employee || mongoose.model("Employee", employeeSchema);

module.exports = Employee; // Exporting the Employee model for use in other files
