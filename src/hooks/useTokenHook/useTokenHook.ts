import jwtDecode from "jwt-decode";
import { TUserJWTToken } from "./../../types";

type TCreateAuthToken = () => string | null;
type TGetToken = () => string | null;
type TRemoveToken = () => void;
type TSetToken = (token: string) => void;
type TGetUserDataFromToken = () => Promise<TUserJWTToken | null>;

export interface IntUseTokenHook {
  getToken: TGetToken;
  removeToken: TRemoveToken;
  setToken: TSetToken;
  getUserDataFromToken: TGetUserDataFromToken;
}

const useTokenHook = (): IntUseTokenHook => {
  const isBrowser = !!(typeof window !== "undefined" && window.localStorage);

  const createAuthToken: TCreateAuthToken = () => {
    let domain = isBrowser ? window.location.hostname : null;
    domain = domain ? domain.replace(/(https?:\/\/)?(www.)?/i, "") : null;
    return domain ? `@${domain}/local` : null;
  };

  const setToken: TSetToken = token => {
    const TOKEN = createAuthToken();
    isBrowser && TOKEN && window.localStorage.setItem(TOKEN, token);
  };

  const getToken: TGetToken = (): string | null => {
    const TOKEN = createAuthToken();
    if (isBrowser && TOKEN) return window.localStorage.getItem(TOKEN);
    return null;
  };

  const removeToken: TRemoveToken = () => {
    const TOKEN = createAuthToken();
    isBrowser && TOKEN && window.localStorage.removeItem(TOKEN);
  };

  const getUserDataFromToken: TGetUserDataFromToken = async () => {
    try {
      const token = getToken();
      const userData: TUserJWTToken = token ? await jwtDecode(token) : null;
      return userData;
    } catch (error) {
      return null;
    }
  };

  return { getToken, getUserDataFromToken, removeToken, setToken };
};

export default useTokenHook;
