import jwtDecode from "jwt-decode";
import { TUserJWTToken } from "./../../types";

const isBrowser = !!(typeof window !== "undefined" && window.localStorage);

const createAuthToken = (): string | null => {
  let domain = isBrowser ? window.location.hostname : null;
  domain = domain === "localhost" ? "e2ps.com" : domain;
  domain = domain ? domain.replace(/(https?:\/\/)?(www.)?/i, "") : null;

  return domain ? `@${domain}/local` : null;
};

export const setToken = (token: string): void => {
  const TOKEN = createAuthToken();
  isBrowser && TOKEN && window.localStorage.setItem(TOKEN, token);
};

export const getToken = (): string | null => {
  const TOKEN = createAuthToken();
  if (isBrowser && TOKEN) return window.localStorage.getItem(TOKEN);
  return null;
};

export const removeToken = (): void => {
  const TOKEN = createAuthToken();
  isBrowser && TOKEN && window.localStorage.removeItem(TOKEN);
};

export const getUserDataFromToken = async (): Promise<TUserJWTToken | null> => {
  try {
    const token = getToken();
    const userData: TUserJWTToken = token ? await jwtDecode(token) : null;
    return userData;
  } catch (error) {
    return null;
  }
};
