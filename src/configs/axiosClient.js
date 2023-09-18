import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 50000,
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
