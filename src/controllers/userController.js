import axios from "axios";

export const loginUser = async (credentials ) => {
  try {
    const response = await axios.post("http://localhost:4000/users/login", credentials);
    return response.data;
  } catch (error) {
    console.error("Failed to login:", error);
    return null;
  }
};
