import axios from "axios";

const useAxiosSecure = () => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL, // <-- Your backend API
  });

  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("sharebite-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return instance;
};

export default useAxiosSecure;