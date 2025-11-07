// Import (bring in) the Express module
// Express is a popular Node.js framework used to build web servers easily.
const express = require("express");

// Define the port number where the server will run
// You can access your app in the browser at http://localhost:8000
const PORT = 8000;

// Initialize (create) an Express application
// 'app' represents your entire web application.
const app = express();

// Set the view engine to 'ejs'
// EJS (Embedded JavaScript) allows you to create dynamic HTML pages
// Example: You can send data from your server and display it in HTML easily.
app.set("view engine", "ejs");

// Start the server and make it listen on the defined port (8000)
// The callback function runs after the server starts successfully.
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
