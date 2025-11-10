// Import the Express application instance from app.js
// This file (app.js) contains all routes, middleware, and configurations
const app = require("./app");

// Define the port number where the server will run
// You can access your app in the browser at http://localhost:8000
const PORT = 8000;

// Start the server and make it listen on the defined port (8000)
// The callback function runs after the server starts successfully.
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
