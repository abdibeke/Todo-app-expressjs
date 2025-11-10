// Import the Moment.js library
// Moment helps format and manipulate dates easily in JavaScript
const moment = require("moment");

// Import the Todo model
// This allows interaction with the 'todos' collection in MongoDB
const Todo = require("../models/Todo");

// ---------------------- HOME PAGE CONTROLLER ----------------------
// Controller function for the home page "/"
// Fetches all Todo items from the database and renders the 'index.ejs' page
const homeController = async (req, res, next) => {
  try {
    // Fetch all todos from MongoDB, sorted by creation date descending (newest first)
    const todos = await Todo.find({}).sort({ createdAt: -1 });

    // Make moment available in EJS templates for date formatting
    res.locals.moment = moment;

    // Render the 'index.ejs' template
    // Pass 'title' for dynamic page title and 'todos' array to display in the table
    res.render("index", { title: "List Todo", todos: todos });
  } catch (err) {
    // If an error occurs, send a 500 status code with the error message
    res.status(500).json({ message: err.message });
  }
};

// ---------------------- ADD TODO FORM CONTROLLER ----------------------
// Controller for displaying the "Add Todo" page
const addTodoFormController = (req, res, next) => {
  try {
    // Render 'newTodo.ejs' template with dynamic page title
    res.render("newTodo", { title: "New Todo" });
  } catch (err) {
    // Handle rendering errors
    res.status(500).json({ message: err.message });
  }
};

// ---------------------- UPDATE TODO FORM CONTROLLER ----------------------
// Controller for displaying the "Update Todo" page
const updateTodoFormController = (req, res, next) => {
  try {
    // Render 'updateTodo.ejs' template with dynamic page title
    res.render("updateTodo", { title: "Update Todo" });
  } catch (err) {
    // Handle rendering errors
    res.status(500).json({ message: err.message });
  }
};

// ---------------------- DELETE TODO PAGE CONTROLLER ----------------------
// Controller for displaying the "Delete Todo" page
const deleteTodoPageController = (req, res, next) => {
  try {
    // Render 'deleteTodo.ejs' template with dynamic page title
    res.render("deleteTodo", { title: "Delete Todo" });
  } catch (err) {
    // Handle rendering errors
    res.status(500).json({ message: err.message });
  }
};

// ---------------------- ADD TODO CONTROLLER ----------------------
// Controller for handling the submission of a new Todo
const addTodoController = async (req, res, next) => {
  try {
    // Extract 'title' and 'desc' from the form submission
    const { title, desc } = req.body;

    // Validate that 'title' is provided
    if (!title) {
      return res.status(400).json({ message: "Title is Required" });
    }

    // Create a new Todo document in memory
    const newTodo = new Todo({ title, desc });

    // Save the new Todo to the MongoDB database
    await newTodo.save();

    // Redirect the user back to the home page to see the updated list
    res.redirect("/");
  } catch (err) {
    // Handle any errors during the save process
    res.status(500).json({ message: err.message });
  }
};

// Export all controller functions for use in routes
module.exports = {
  homeController,
  addTodoFormController,
  updateTodoFormController,
  deleteTodoPageController,
  addTodoController,
};
