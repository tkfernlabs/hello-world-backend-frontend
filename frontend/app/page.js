'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://backend-morphvm-brald5bm.http.cloud.morph.so';

export default function Home() {
  const [helloMessage, setHelloMessage] = useState('');
  const [apiInfo, setApiInfo] = useState(null);
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');
  const [echoMessage, setEchoMessage] = useState('');
  const [echoResponse, setEchoResponse] = useState('');
  const [healthStatus, setHealthStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch Hello World message on component mount
  useEffect(() => {
    fetchHelloWorld();
    fetchApiInfo();
    checkHealth();
  }, []);

  const fetchHelloWorld = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/`);
      setHelloMessage(response.data.message);
      setError('');
    } catch (err) {
      setError('Failed to fetch Hello World message');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchApiInfo = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/hello`);
      setApiInfo(response.data);
    } catch (err) {
      console.error('Failed to fetch API info:', err);
    }
  };

  const checkHealth = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/health`);
      setHealthStatus(response.data.status);
    } catch (err) {
      setHealthStatus('unavailable');
      console.error('Health check failed:', err);
    }
  };

  const getPersonalizedGreeting = async () => {
    if (!name.trim()) {
      alert('Please enter a name');
      return;
    }
    
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/api/greeting/${name}`);
      setGreeting(response.data.greeting);
      setError('');
    } catch (err) {
      setError('Failed to fetch personalized greeting');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const sendEchoMessage = async () => {
    if (!echoMessage.trim()) {
      alert('Please enter a message to echo');
      return;
    }
    
    try {
      setLoading(true);
      const response = await axios.post(`${API_BASE_URL}/api/echo`, {
        message: echoMessage
      });
      setEchoResponse(response.data.echo);
      setError('');
    } catch (err) {
      setError('Failed to send echo message');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🌍 Hello World Application
          </h1>
          <p className="text-gray-600">Interactive frontend connected to Node.js backend</p>
          
          {/* Health Status Badge */}
          <div className="mt-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              healthStatus === 'healthy' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              <span className={`w-2 h-2 mr-2 rounded-full ${
                healthStatus === 'healthy' ? 'bg-green-400' : 'bg-red-400'
              }`}></span>
              Backend Status: {healthStatus || 'checking...'}
            </span>
          </div>
        </header>

        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* Main Hello World Message */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            📨 Message from Backend
          </h2>
          {loading && !helloMessage ? (
            <div className="animate-pulse">
              <div className="h-6 bg-gray-200 rounded"></div>
            </div>
          ) : (
            <p className="text-xl text-gray-800">
              {helloMessage || 'Loading...'}
            </p>
          )}
          <button
            onClick={fetchHelloWorld}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            🔄 Refresh Message
          </button>
        </div>

        {/* API Information */}
        {apiInfo && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              ℹ️ API Information
            </h2>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">API:</span> {apiInfo.api}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Version:</span> {apiInfo.version}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Description:</span> {apiInfo.description}
              </p>
            </div>
          </div>
        )}

        {/* Personalized Greeting */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            👋 Get Personalized Greeting
          </h2>
          <div className="flex gap-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={(e) => e.key === 'Enter' && getPersonalizedGreeting()}
            />
            <button
              onClick={getPersonalizedGreeting}
              disabled={loading}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50"
            >
              Get Greeting
            </button>
          </div>
          {greeting && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800">{greeting}</p>
            </div>
          )}
        </div>

        {/* Echo Message Tester */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            🔊 Echo Message Tester
          </h2>
          <div className="flex gap-2">
            <input
              type="text"
              value={echoMessage}
              onChange={(e) => setEchoMessage(e.target.value)}
              placeholder="Type a message to echo"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={(e) => e.key === 'Enter' && sendEchoMessage()}
            />
            <button
              onClick={sendEchoMessage}
              disabled={loading}
              className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50"
            >
              Send Echo
            </button>
          </div>
          {echoResponse && (
            <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-purple-800">
                <span className="font-medium">Echo Response:</span> {echoResponse}
              </p>
            </div>
          )}
        </div>

        {/* Available Endpoints */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            🔗 Available API Endpoints
          </h2>
          <ul className="space-y-2 font-mono text-sm">
            <li className="p-2 bg-gray-50 rounded">
              <span className="text-green-600">GET</span> /
            </li>
            <li className="p-2 bg-gray-50 rounded">
              <span className="text-green-600">GET</span> /api/hello
            </li>
            <li className="p-2 bg-gray-50 rounded">
              <span className="text-green-600">GET</span> /api/greeting/:name
            </li>
            <li className="p-2 bg-gray-50 rounded">
              <span className="text-blue-600">POST</span> /api/echo
            </li>
            <li className="p-2 bg-gray-50 rounded">
              <span className="text-green-600">GET</span> /health
            </li>
          </ul>
        </div>

        {/* Footer */}
        <footer className="text-center mt-10 text-gray-600">
          <p>Built with Next.js, React, and Tailwind CSS</p>
          <p className="mt-2">
            Backend API: <a 
              href={API_BASE_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {API_BASE_URL}
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
