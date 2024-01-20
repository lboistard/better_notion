import ApiMethods from "./ApiMethods";
import ENDPOINTS from "./EndPoints";

class ApiManager {
  static login = (params: object) => {
    const url = ENDPOINTS.LOGIN();
    return ApiMethods.post(url, params)
  }
}

export default ApiManager;
