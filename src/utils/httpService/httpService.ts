import axios from "axios";

const getTheToken = () => {
  const isBrowser = !!(typeof window !== "undefined" && window.localStorage);
  let domain = isBrowser ? window.location.hostname : null;
  domain = domain ? domain.replace(/(https?:\/\/)?(www.)?/i, "") : null;
  const tokenKey = domain ? `@${domain}/local` : null;
  if (isBrowser && tokenKey) return window.localStorage.getItem(tokenKey);
  return null;
};

const http = axios.create({
  baseURL: process.env.REACT_APP_REST_API,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache, max-age=0"
  }
});

http.interceptors.request.use((config: any) => {
  const token = getTheToken();
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
