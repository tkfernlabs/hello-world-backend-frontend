# Hello World Full-Stack Application

A complete full-stack application with a Node.js/Express backend and React/Next.js frontend, providing an interactive interface for various API endpoints.

## 🚀 Live Demo

- **Frontend**: https://frontend-morphvm-brald5bm.http.cloud.morph.so
- **Backend API**: https://backend-morphvm-brald5bm.http.cloud.morph.so

## 📁 Project Structure

```
hello-world-app/
├── server.js              # Backend Express server
├── package.json          # Backend dependencies
├── .env                  # Environment variables
├── frontend/             # Frontend application
│   ├── app/             # Next.js app directory
│   │   ├── page.js      # Main page component
│   │   ├── layout.js    # Root layout
│   │   └── globals.css  # Global styles
│   ├── package.json     # Frontend dependencies
│   ├── next.config.js   # Next.js configuration
│   └── tailwind.config.js # Tailwind CSS config
└── README.md            # Documentation
```

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- CORS enabled for cross-origin requests
- Environment variables with dotenv

### Frontend
- React 19
- Next.js 15
- Tailwind CSS v3
- Axios for API calls

## 📋 Features

### Backend Features
- **Hello World Endpoint**: Returns a greeting message with timestamp
- **API Information**: Provides API version and details
- **Personalized Greeting**: Returns a customized greeting for a given name
- **Echo Service**: Echoes back any message sent to it
- **Health Check**: Monitors the application health status

### Frontend Features
- **Interactive UI**: Modern, responsive interface with Tailwind CSS
- **Real-time Health Status**: Visual indicator of backend health
- **Hello World Display**: Shows the main message from the backend
- **Personalized Greetings**: Input field to get custom greetings
- **Echo Tester**: Send messages and see the echo response
- **API Information Panel**: Displays backend API details
- **Endpoints Reference**: Lists all available API endpoints

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Returns Hello World message with timestamp |
| GET | `/api/hello` | Returns API information |
| GET | `/api/greeting/:name` | Returns personalized greeting |
| POST | `/api/echo` | Echoes back the message from request body |
| GET | `/health` | Health check endpoint |

## 🚀 Installation & Setup

### Backend Setup

1. Navigate to the project root:
   ```bash
   cd hello-world-app
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```
   PORT=3000
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Build the frontend:
   ```bash
   npm run build
   ```

4. Start the frontend server:
   ```bash
   npm start
   ```

## 🧪 Example API Usage

### Get Hello World Message
```bash
curl https://backend-morphvm-brald5bm.http.cloud.morph.so/
```

### Get Personalized Greeting
```bash
curl https://backend-morphvm-brald5bm.http.cloud.morph.so/api/greeting/John
```

### Send Echo Message
```bash
curl -X POST https://backend-morphvm-brald5bm.http.cloud.morph.so/api/echo \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello Echo!"}'
```

### Check Health Status
```bash
curl https://backend-morphvm-brald5bm.http.cloud.morph.so/health
```

## 🎨 Frontend Interface

The frontend provides:
- Clean, modern UI with gradient background
- Real-time backend status indicator
- Interactive forms for testing all API endpoints
- Responsive design that works on all devices

## 📝 Development

### Running in Development Mode

Backend:
```bash
npm run dev
```

Frontend:
```bash
cd frontend && npm run dev
```

### Building for Production

Frontend build:
```bash
cd frontend && npm run build
```

## 🔐 Environment Variables

Backend (.env):
- `PORT`: Server port (default: 3000)

Frontend uses the hardcoded backend URL in production.

## 📄 License

MIT
