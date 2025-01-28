const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./auth');
const taskRoutes = require('./tasks');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Health Check
app.get('/health', (req, res) => res.send('Backend is running!'));

// Start Server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
