// Import (bring in) the Express module
// Express is a popular Node.js framework used to build web servers easily.
const express = require("express");

// Import Mongoose
// Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js
// It makes it easier to work with MongoDB by providing a schema-based solution to model your data.
const mongoose = require("mongoose");

// Define the port number where the server will run
// You can access your app in the browser at http://localhost:8000
const PORT = 8000;

// Initialize (create) an Express application
// 'app' represents your entire web application.
const app = express();

// MongoDB connection URL
// Format: mongodb://<host>:<port>/<database-name>
// Here, we are connecting to a local MongoDB server with a database called 'todoDb'
const connectionUrl = "mongodb://localhost:27017/todoDb";

// Connect to MongoDB using Mongoose
mongoose
  .connect(connectionUrl)
  .then(() => console.log("🟢 Database Connection Successful"))
  .catch((err) => console.log("🔴 Database Connection Error:", err.message));

// Set the view engine to 'ejs'
// EJS (Embedded JavaScript) allows you to create dynamic HTML pages
// Example: You can send data from your server and display it in HTML easily.
app.set("view engine", "ejs");

// Define a route for the home page "/"
// When a user visits http://localhost:8000/, this function runs
app.get("/", (req, res, next) => {
  try {
    // Render the 'index.ejs' file located in the 'views' folder
    res.render("index");
  } catch (err) {
    // If something goes wrong, return a JSON response with the error message
    res.status(500).json({ message: err.message });
  }
});

// ---------------------- ADD TODO PAGE ROUTE ----------------------

// Route: GET /add-todo
// Purpose: Display a form to add a new Todo item
// When the user goes to http://localhost:8000/add-todo
// the server will render a page called "newTodo.ejs" (your add form)
app.get("/add-todo", (req, res, next) => {
  try {
    // Render the 'newTodo.ejs' file (create this inside your 'views' folder)
    // This page will contain a form for adding a new Todo
    res.render("newTodo");
  } catch (err) {
    // Handle any error that occurs while rendering the page
    res.status(500).json({ message: err.message });
  }
});

// -----------------------------------------------------------------

// Start the server and make it listen on the defined port (8000)
// The callback function runs after the server starts successfully.
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
