// Backend API Configuration
// Update this file to change the backend URL if deploying to a different server

export const API_CONFIG = {
  // Development environment
  development: {
    baseURL: "http://localhost:5000/api",
    timeout: 10000
  },
  
  // Production environment
  production: {
    baseURL: process.env.REACT_APP_API_URL || "https://api.digital-auto.com/api",
    timeout: 10000
  },
  
  // Staging environment
  staging: {
    baseURL: process.env.REACT_APP_API_URL || "https://staging-api.digital-auto.com/api",
    timeout: 10000
  }
};

// Get current environment
export const getEnvironment = () => {
  return process.env.NODE_ENV || "development";
};

// Get API base URL based on environment
export const getApiBaseUrl = () => {
  const env = getEnvironment();
  return API_CONFIG[env]?.baseURL || API_CONFIG.development.baseURL;
};

export default {
  API_CONFIG,
  getEnvironment,
  getApiBaseUrl
};
