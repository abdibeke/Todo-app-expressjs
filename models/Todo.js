// Import the Mongoose library
// Mongoose is used to define schemas and interact with MongoDB easily
const mongoose = require("mongoose");

// ---------------------- TODO MODEL SCHEMA ----------------------

// Define the structure (schema) of a Todo document
// A schema acts as a blueprint for how data is stored in MongoDB
const todoSchema = mongoose.Schema(
  {
    // 'title' field: required and must be a string
    title: { type: String, required: true },

    // 'desc' field: optional description for the todo
    desc: String,
  },
  {
    // Automatically add 'createdAt' and 'updatedAt' timestamps
    timestamps: true,
  }
);

// Create a model based on the schema
// The model provides methods to interact with the 'todos' collection in MongoDB
const Todo = mongoose.model("Todo", todoSchema);

// Export the model so it can be used in other files (e.g., controllers)
module.exports = Todo;
