import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/getRecords";

export const getAllRecords = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching records:", error);
    return [];
  }
};
