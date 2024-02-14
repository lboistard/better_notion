import ApiMethods from "./ApiMethods";
import ENDPOINTS from "./EndPoints";

class ApiManager {
  static login = (params: object) => {
    const url = ENDPOINTS.LOGIN();
    return ApiMethods.post(url, params)
  }

  static getMe = () => {
    const url = ENDPOINTS.GET_ME();
    return ApiMethods.get(url);
  }
}

export default ApiManager;
