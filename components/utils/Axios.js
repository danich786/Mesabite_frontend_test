import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_HOST;

const AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 50000,
  headers: {
    "Content-Type": "multipart/form-data",
    accept: "application/json",
  },
});

export default AxiosInstance;
