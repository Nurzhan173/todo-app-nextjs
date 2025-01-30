const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./auth");
const taskRoutes = require("./tasks");

if (!authRoutes || !taskRoutes) {
  console.error("Error: Routes not found. Check your file paths.");
  process.exit(1);
}

const app = express();

// CORS Middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "http://frontend:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// Health Check Route
app.get("/health", (req, res) => res.send("Backend is running!"));

// Define Port
const PORT = process.env.PORT || 8000;

// Start Server
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);

module.exports = app;
