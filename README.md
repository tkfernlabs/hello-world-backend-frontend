# Hello World Application

A simple Hello World application with a backend API and frontend interface.

## Backend

The backend is built with Node.js and Express, providing several API endpoints.

### Backend Endpoints

- `GET /` - Returns a Hello World message with timestamp
- `GET /api/hello` - Returns API information
- `GET /api/greeting/:name` - Returns a personalized greeting
- `POST /api/echo` - Echoes back the message sent in the request body
- `GET /health` - Health check endpoint

### Backend URL

The backend is deployed and accessible at: https://backend-morphvm-brald5bm.http.cloud.morph.so

## Setup

### Backend Setup

1. Navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

The backend will run on port 3000 by default.

## Technologies Used

- Node.js
- Express.js
- CORS for cross-origin requests
- dotenv for environment variables

## Environment Variables

Create a `.env` file with:
- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (production/development)
