// services/apiService.js

const BASE_URL = 'http://localhost:8000';

export const apiService = {
  async getData(path) {
    const response = await fetch(`${BASE_URL}${path}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  },
  
  async postData(path, data) {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to post data');
    }
    return response.json();
  }
};
