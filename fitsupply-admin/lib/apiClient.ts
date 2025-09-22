import axios from "axios";
import Cookies from "js-cookie";

const apiClient = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api/v1/admin",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
