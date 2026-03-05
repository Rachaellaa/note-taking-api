const express = require("express");
const noteRoutes = require("./routes/note.routes");
const { errorHandler, notFoundHandler } = require("./middleware/error.middleware");

const app = express();

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Note Taking API is running"
  });
});

app.use("/api", noteRoutes);

// Error handling middleware
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;