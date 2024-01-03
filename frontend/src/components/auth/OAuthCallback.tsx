import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useStore } from "@/hooks/useStore";
import { isEmpty } from "lodash";

const OAuthCallback = () => {
  const store = useStore();
  const { authStore } = store;
  const navigate = useNavigate();

  useEffect(() => {
    const { token } = queryString.parse(window.location.search) || "";
    if (!isEmpty(token)) {
      authStore.setToken(`Bearer ${token}`);
    }
    navigate("/");
  }, []);

  return (
    <>loading...</>
  )

}
export default OAuthCallback;

