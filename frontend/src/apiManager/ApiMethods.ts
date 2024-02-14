import axios from "axios";
import { getAccessToken, getRefreshToken, getActions } from "@/stores/auth.store";

const BASE_URL = import.meta.env.VITE_API_ROOT;

const getHeaders = () => {
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS",
    Authorization: getAccessToken(),
  }
}

const config = {
  baseURL: BASE_URL,
  timeout: 30000,
  withCredentials: false, // Temporary
  headers: getHeaders(),
}

class ApiMethods {
  static apiRequest(method: string, url: string, body = {}) {
    url = BASE_URL + url;
    return new Promise((resolve, reject) => {
      const client = axios.create(config);
      client.request({
        method,
        url,
        data: JSON.stringify(body),
      }).
        then((response) => response.data).
        then(resolve).
        catch((error) => {
          if (error?.response?.status === 401) {

            this.post("/auth/login", {
              grant_type: "refresh_token",
              refresh_token: getRefreshToken(),
            }).then((response: any) => {
              console.log("token : ", response)
              getActions().setAccessToken(response.access_token);
            }).catch(() => {
              getActions().clearTokens;
              window.location.href = "/login";
              return reject;
            }).finally(() => {
              this.apiRequest(method, url, body);
            })
          } else {
            getActions().clearTokens;
            window.location.href = "/login";
            return reject;
          }
        });
    });
  }

  static get(url: string) {
    return this.apiRequest("GET", url);
  }

  static post(url: string, data: object) {
    return this.apiRequest("POST", url, data);
  }

  static put(url: string, data: object) {
    return this.apiRequest("PUT", url, data);
  }

  static delete(url: string) {
    return this.apiRequest("DELETE", url);
  }
}

export default ApiMethods;
