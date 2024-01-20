import { createStore } from "zustand/vanilla";
import { useStore } from "zustand";
import { devtools } from "zustand/middleware";
import Cookies from "js-cookie";
import { isEmpty } from "lodash";

type AuthStore = {
	accessToken: string | undefined;
	refreshToken: string | undefined;
}


const authStore = createStore<AuthStore>()(
  devtools(
    (set, get) => ({
      accessToken: undefined,
      refreshToken: undefined,

      actions: {
        setAccessToken: (accessToken: string | undefined) => {
          Cookies.set("access_token", `Bearer ${accessToken}`);
          return set({
            accessToken,
          });
        },
        setRefreshToken: (refreshToken: string | undefined) => {
          Cookies.set("refresh_token", `Bearer ${refreshToken}`);
          set({
            refreshToken,
          });
        },
        isAuth: () => {
          return !isEmpty(get().accessToken) ? true : false;
        },
        init: () => {
          const { setAccessToken, setRefreshToken } = get().actions;
          setAccessToken(Cookies.get("access_token"));
          setRefreshToken(Cookies.get("refresh_token"));
        },
        clearTokens: () =>
          set({
            accessToken: undefined,
            refreshToken: undefined,
          }),
      },
    }),
    {
      name: "auth-store",
    }
  )
);


/**
 * Required for zustand stores, as the lib doesn't expose this type
 */
export type ExtractState<S> = S extends {
  getState: () => infer T;
}
? T
: never;

type Params<U> = Parameters<typeof useStore<typeof authStore, U>>;

// Selectors
const accessTokenSelector = (state: ExtractState<typeof authStore>) => state.accessToken;
const refreshTokenSelector = (state: ExtractState<typeof authStore>) => state.refreshToken;
const actionsSelector = (state: ExtractState<typeof authStore>) => state.actions;

// getters
export const getAccessToken = () => accessTokenSelector(authStore.getState());

export const getRefreshToken = () => refreshTokenSelector(authStore.getState());
export const getActions = () => actionsSelector(authStore.getState());

function useAuthStore<U>(selector: Params<U>[1], equalityFn?: Params<U>[2]) {
  return useStore(authStore, selector, equalityFn);
}

// Hooks
export const useAccessToken = () => useAuthStore(accessTokenSelector);
export const useRefreshToken = () => useAuthStore(refreshTokenSelector);
export const useActions = () => useAuthStore(actionsSelector);
