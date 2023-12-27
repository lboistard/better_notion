import axios from "axios";

const API_ROOT = import.meta.env.VITE_API_ROOT;

const config = {
  baseURL: API_ROOT,
  timeout: 30000,
  withCredentials: false, // Temporary
  headers: {
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
}


const request = async (method: string, url: string, body: object) => {
  const client = axios.create(config);
  const { data } = await client.request({
    method,
    url,
    data: {
      body,
    },
  });

  return data;
};

const Auth = {
  login: async (email: string, password: string) =>
    await request("post", "/api/auth/local", {
      username: email,
      password: password,
      grant_type: "password",
    }),
};


const Agent = {
  Auth,
};


export default Agent;
