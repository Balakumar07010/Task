import axios from "axios";

const API_URL = "https://api.edamam.com/search";
const APP_ID = "a5de3521"; // Your App ID
const APP_KEY = "28f8a20bd893e2740e68d4bbb349b977"; // Your API Key

export const FetchRecipes = async (query = "pizza") => {
  try {
    const response = await axios.get(`${API_URL}`, {
      params: {
        q: query,
        app_id: APP_ID,
        app_key: APP_KEY,
        from: 0,
        to: 20,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
