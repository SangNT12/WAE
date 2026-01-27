// API service for backend communication
const API_BASE_URL = "http://localhost:5000/api";

export const apiService = {
  // Navigation endpoints
  getNavigation: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/navigation`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching navigation:", error);
      throw error;
    }
  },

  getNavigationItem: async (label) => {
    try {
      const response = await fetch(`${API_BASE_URL}/navigation/${label}`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching navigation item:", error);
      throw error;
    }
  },

  // Content endpoints
  getHomeContent: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/content/home`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching home content:", error);
      throw error;
    }
  },

  getFeaturedCards: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/content/featured-cards`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching featured cards:", error);
      throw error;
    }
  },

  getContributions: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/content/contributions`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching contributions:", error);
      throw error;
    }
  },

  getAboutContent: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/content/about`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching about content:", error);
      throw error;
    }
  },

  // Partners endpoints
  getPartners: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/partners`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching partners:", error);
      throw error;
    }
  },

  getPartner: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/partners/${id}`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching partner:", error);
      throw error;
    }
  },

  // Health check
  checkHealth: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      return await response.json();
    } catch (error) {
      console.error("Backend is not available:", error);
      return null;
    }
  }
};
