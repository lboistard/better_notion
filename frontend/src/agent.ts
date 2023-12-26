import axios from "axios";

const API_ROOT = "http://" + import.meta.env.VITE_API_ROOT;

const config = {
  baseURL: API_ROOT,
  timeout: 30000,
};

const requests = (method: string, url: string, body: object) => {
  const client = axios.create(config);
  const res = client.request({
    method: method,
    url: url,
    data: body,
  });

  console.log("res is :", res)
  return res;
};

const Auth = {
  login: (name: string, email: string, password: string) =>
    requests("post", "api/", {
      name,
      username: email,
      password: password,
      grant_type: "password",
    }),
};


const Agent = {
  Auth,
};


export default Agent;
