// services/userService.js

import { apiService } from './apiServices';

export const userService = {
  async register(username, password) {
    try {
      return await apiService.postData('/register', { username, password });
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  },

  async login(username, password) {
    try {
      return await apiService.postData('/login', { username, password });
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  }
};
