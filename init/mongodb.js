// Import the Mongoose library
// Mongoose helps connect and interact with MongoDB databases easily
const mongoose = require("mongoose");

// MongoDB connection URL
// Format: mongodb://<host>:<port>/<database-name>
// Here, we connect to a local MongoDB instance with a database named 'todoDb'
const connectionUrl = "mongodb://localhost:27017/todoDb";

// Function to connect to MongoDB
// Using 'async/await' to handle the asynchronous database connection
const connectMongodb = async () => {
  try {
    // Attempt to connect to MongoDB
    await mongoose.connect(connectionUrl);
    console.log("🟢 Database connection successful");
  } catch (err) {
    // If connection fails, log the error message
    console.log("🔴 Database connection failed:", err.message);

    // Exit the process with failure (1)
    // This prevents the app from running without a database connection
    process.exit(1);
  }
};

// Export the function so it can be used in other files (like app.js)
module.exports = connectMongodb;
