const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./auth');
const taskRoutes = require('./tasks');


const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // Your frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Enable cookies or Authorization headers
}));
// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Health Check
app.get('/health', (req, res) => res.send('Backend is running!'));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
