const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World from Backend!',
    timestamp: new Date().toISOString(),
    status: 'success'
  });
});

app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello World API endpoint',
    description: 'This is a simple Hello World API',
    version: '1.0.0'
  });
});

app.get('/api/greeting/:name', (req, res) => {
  const { name } = req.params;
  res.json({
    message: `Hello ${name}!`,
    greeting: `Welcome to our Hello World application, ${name}!`,
    timestamp: new Date().toISOString()
  });
});

app.post('/api/echo', (req, res) => {
  res.json({
    message: 'Echo endpoint',
    yourMessage: req.body.message || 'No message provided',
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested resource does not exist'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
  console.log(`API endpoints:`);
  console.log(`  - GET  /`);
  console.log(`  - GET  /api/hello`);
  console.log(`  - GET  /api/greeting/:name`);
  console.log(`  - POST /api/echo`);
  console.log(`  - GET  /health`);
});
