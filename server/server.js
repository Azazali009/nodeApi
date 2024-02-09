// Importing required modules
const express = require("express"); // Importing Express.js framework
const morgan = require("morgan"); // Importing Morgan for HTTP request logging
const bodyParser = require("body-parser"); // Importing body-parser middleware for parsing request bodies
const connectDb = require("./lib/mongoConnection"); // Importing custom function for connecting to MongoDB
const employeeRoutes = require("./routes/employee"); // Importing employee routes
const cors = require("cors");

const app = express(); // Creating an instance of Express application

// Database connection:
// 1. Cloud database connection
connectDb();

// 2. Local database connection (commented out)
// mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser:true, useUnifiedTopology:true})
// const db = mongoose.connection;
// db.on("error", (err) => {
//   console.log(err);
// });
// db.once("open", () => {
//   console.log("Databse connection established");
// });

// Middleware setup
var corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PATCH, PUT, DELETE",
};
app.use(cors(corsOptions));
app.use(morgan("dev")); // Using Morgan for logging HTTP requests
app.use(bodyParser.urlencoded({ extended: true })); // Parsing URL-encoded bodies
app.use(bodyParser.json()); // Parsing JSON bodies

// Loading routes
app.use("/", employeeRoutes); // Mounting employee routes on the root path

const PORT = process.env.PORT || 3000; // Setting the port for the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Starting the server and logging the port it's running on
});
