import axios from "axios";

const getToken = () => {
  return process.env.NEXT_PUBLIC_WBN_API_KEY;
};

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
});

api.defaults.headers.common["X-API-KEY"] = getToken();

export default api;
