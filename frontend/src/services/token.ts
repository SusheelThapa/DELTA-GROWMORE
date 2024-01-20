import Cookie from "js-cookie";

export const getToken = () => {
  return Cookie.get("token");
};

export const setToken = (token: string) => {
  Cookie.set("token", token);
};
