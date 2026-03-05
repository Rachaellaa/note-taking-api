const express = require("express");
const noteRoutes = require("./routes/note.routes");

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

module.exports = app;