import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useStore } from "@/hooks/useStore";
import { isEmpty } from "lodash";

interface Itokens {
  access_token: string,
  refresh_token: string,
}

const OAuthCallback = () => {
  const store = useStore();
  const { authStore } = store;
  const navigate = useNavigate();

  useEffect(() => {
    const { access_token, refresh_token } : Itokens = queryString.parse(window.location.search);
    if (!isEmpty(refresh_token) && !isEmpty(access_token)) {
      authStore.setToken(access_token, refresh_token);
    }
    navigate("/");
  }, []);

  return (
    <>loading...</>
  )

}
export default OAuthCallback;

