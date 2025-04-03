import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://evangadi-forum-backend-l7nz.onrender.com/api",
  // baseURL: "http://localhost:3456/api",
});

export default axiosInstance;
