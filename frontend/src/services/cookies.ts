import Cookies from "js-cookie";

export const setCookieValue = (key: string, value: string) => {
  Cookies.set(key, value);
};

export const getCookieValue = (key: string) => {
  return Cookies.get(key);
};
