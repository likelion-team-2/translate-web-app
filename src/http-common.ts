import axios, { AxiosRequestHeaders } from "axios";
import { API_URL, LS_accessToken, LS_refreshToken, PAGE_LOGIN } from "./constants/constant";
import qs from "qs"
import ApiService from "./services/apiService";

const instance = axios.create({
  baseURL: `${API_URL}`,
  paramsSerializer(params) {
    return qs.stringify(params, { indices: false });
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  }
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(LS_accessToken) || "";
    config.headers.Authorization = `Bearer ${token}`
    return config;
  },
  (error) => Promise.reject(error)
);
let refreshingFunc: any = undefined;
instance.interceptors.response.use(
  (response) => {
    // console.log("---------response: ", response)
    if (response.status === 200) {
      return response;
    } else {
      const messages = response.data
      if (messages) {
        if (messages instanceof Array) {
          return Promise.reject({ messages });
        }
        return Promise.reject({ messages: [messages] });
      }
      return Promise.reject({ messages: ["got errors"] });
    }
  },
  async (error) => {
    // console.log("---------error: ", error)
    const originalConfig = error.config;
    const token = localStorage.getItem(LS_accessToken);

    // if we don't have token in local storage or error is not 401 just return error and break req.
    if (!token || !ApiService.isUnauthorizedError(error)) {
      return Promise.reject(error);
    }
    try {
      // the trick here, that `refreshingFunc` is global, e.g. 2 expired requests will get the same function pointer and await same function.
      if (!refreshingFunc)
        refreshingFunc = ApiService.renewToken();

      const [newToken, newRefreshToken] = await refreshingFunc;

      localStorage.setItem(LS_accessToken, newToken);
      localStorage.setItem(LS_refreshToken, newRefreshToken);

      originalConfig.headers.Authorization = `Bearer ${newToken}`;

      // retry original request
      try {
        return await axios.request(originalConfig);
      } catch (innerError) {
        // if original req failed with 401 again - it means server returned not valid token for refresh request
        if (ApiService.isUnauthorizedError(innerError)) {
          throw innerError;
        }
      }

    } catch (err) {
      localStorage.removeItem(LS_accessToken);
      localStorage.removeItem(LS_refreshToken);

      window.location.href = PAGE_LOGIN

    } finally {
      refreshingFunc = undefined;
    }
  }
);

export const http = instance;

export default http;