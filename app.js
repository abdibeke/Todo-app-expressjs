// Import Express framework
// Express helps create a web server easily with routing and middleware support
const express = require("express");

// Import path module
// Used to handle and join file paths across all operating systems
const path = require("path");

// Import body-parser middleware
// Body-parser makes it possible to read form data sent via POST requests (req.body)
const bodyParser = require("body-parser");

// Import MongoDB connection function
// This handles connecting your app to the MongoDB database
const connectMongodb = require("./init/mongodb");

// Import Todo route module
// Contains all the routes related to Todo operations (add, list, update, delete)
const todoRoute = require("./routes/todo");

// Initialize Express application
// The 'app' variable represents your entire web application
const app = express();

// Connect to MongoDB database
connectMongodb();

// Set EJS as the template/view engine
// EJS (Embedded JavaScript) allows you to render dynamic HTML pages
app.set("view engine", "ejs");

// Serve static files (CSS, JS, images) from the "public" directory
// Example: public/css/style.css → <link rel="stylesheet" href="/css/style.css">
app.use(express.static(path.join(__dirname, "public")));

// Use body-parser to parse form data
// 'extended: true' allows parsing of nested objects in the request body
app.use(bodyParser.urlencoded({ extended: true }));

// Mount Todo routes
// All routes defined in routes/todo.js will be accessible from the base URL ("/")
app.use("/", todoRoute);

// Export the app for use in other files (like server.js)
module.exports = app;
