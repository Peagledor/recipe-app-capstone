import axios from "axios";

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post("http://localhost:3000/login", credentials);
    return response.data;
  } catch (error) {
    console.error("Failed to login:", error);
    return null;
  }
};
