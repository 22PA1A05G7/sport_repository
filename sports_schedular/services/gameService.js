import axios from 'axios';

// Set the base URL for the API (adjust this according to your backend API URL)
const API_URL = 'http://localhost:5000/api/games'; // Change to your backend API URL

// Fetch all games
export const getGames = async () => {
  try {
    const response = await axios.get(API_URL); // Get request to fetch all games
    return response.data; // Return the data (array of games)
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error.response ? error.response.data : error.message;
  }
};

// Create a new game
export const createGame = async (gameData) => {
  try {
    const response = await axios.post(API_URL, gameData); // POST request to create a new game
    return response.data; // Return the created game data
  } catch (error) {
    console.error('Error creating game:', error);
    throw error.response ? error.response.data : error.message;
  }
};

// Update an existing game
export const updateGame = async (gameId, gameData) => {
  try {
    const response = await axios.put(`${API_URL}/${gameId}`, gameData); // PUT request to update a game
    return response.data; // Return the updated game data
  } catch (error) {
    console.error('Error updating game:', error);
    throw error.response ? error.response.data : error.message;
  }
};

// Delete a game
export const deleteGame = async (gameId) => {
  try {
    await axios.delete(`${API_URL}/${gameId}`); // DELETE request to remove a game
    return { message: 'Game deleted successfully' }; // Return success message
  } catch (error) {
    console.error('Error deleting game:', error);
    throw error.response ? error.response.data : error.message;
  }
};
