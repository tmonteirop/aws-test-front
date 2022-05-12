import axios from "axios";

export const api_validation = axios.create({
    baseURL: (process.env.REACT_APP_API_BASE_URL || `http://localhost:3434/`),
});