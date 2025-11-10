// Import the Express module
// Express is used to create routes and handle HTTP requests easily
const express = require("express");

// Create a new router instance
// The router helps organize routes into separate files for cleaner structure
const router = express.Router();

// Import Todo controller functions
// These functions handle the logic for each route (like adding or displaying todos)
const todo = require("../controllers/todo");

// ---------------------- HOME PAGE ROUTE ----------------------
// Route: GET /
// Purpose: Display the list of all Todo items on the home page
// When a user visits http://localhost:8000/, this route is executed
router.get("/", todo.homeController);

// ---------------------- ADD TODO PAGE ROUTE ----------------------
// Route: GET /add-todo
// Purpose: Show a form for adding a new Todo item
// When the user visits http://localhost:8000/add-todo,
// it renders the "newTodo.ejs" form page
router.get("/add-todo", todo.addTodoFormController);

// ---------------------- UPDATE TODO PAGE ROUTE ----------------------
// Route: GET /update-todo
// Purpose: Show a form to edit an existing Todo item
// When the user visits http://localhost:8000/update-todo,
// it renders the "updateTodo.ejs" page
router.get("/update-todo", todo.updateTodoFormController);

// ---------------------- DELETE TODO PAGE ROUTE ----------------------
// Route: GET /delete-todo
// Purpose: Show a page to delete a Todo item
// When the user visits http://localhost:8000/delete-todo,
// it renders the "deleteTodo.ejs" page
router.get("/delete-todo", todo.deleteTodoPageController);

// ---------------------- ADD TODO (POST) ROUTE ----------------------
// Route: POST /add-todo
// Purpose: Handle the form submission from the Add Todo page
// This receives form data and saves a new Todo item into MongoDB
router.post("/add-todo", todo.addTodoController);

// ---------------------- UPDATE TODO (POST) ROUTE ----------------------
// Route: POST /update-todo/:id
// Purpose: Handle form submission for updating an existing Todo
// The ':id' is a route parameter that identifies which Todo to update
router.post("/update-todo/:id", todo.updateTodoController);

// ---------------------- DELETE TODO (CONFIRM) ROUTE ----------------------
// Route: GET /confirm-delete
// Purpose: Handle the deletion of a Todo item after user confirmation
// The query parameters are: ?id=123&confirm=yes
router.get("/confirm-delete", todo.deleteTodoController);

// Export the router so it can be used in other files (like app.js)
module.exports = router;
