import axios from "axios";
import { getToken } from "../token/token";

const http = axios.create({
  baseURL: "http://localhost:8001/api",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache, max-age=0"
  }
});

http.interceptors.request.use((config: any) => {
  const token = getToken();
  if (token) config.headers.authorization = `Bearer ${token}`;
  return config;
});

// http.interceptors.response.use(undefined, (error: any) => {
//   const expectedError =
//     error.response &&
//     error.response.status >= 400 &&
//     error.response.status < 500;

//   if (!expectedError) {
//     console.error("Logging the error", error);
//   }

//   return Promise.reject(error);
// });

http.interceptors.response.use(
  response => response,
  error => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      console.error("Logging the error", error);
    }

    return Promise.reject(error);
  }
);

export default http;
