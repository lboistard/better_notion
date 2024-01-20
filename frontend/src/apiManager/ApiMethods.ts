import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_ROOT;

const getHeaders = () => {
  const getToken = () => {
    // use zustand store here
    const token = "";
    return token;
  }

  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS",
    Authorization: `Bearer ${getToken()}`,
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
        catch(reject);
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
