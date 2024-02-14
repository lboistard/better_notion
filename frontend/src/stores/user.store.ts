import { createStore } from "zustand/vanilla";
import { useStore } from "zustand";
import { devtools } from "zustand/middleware";

type UserStore = {
	me: any | undefined;
}

const userStore = createStore<UserStore>()(
  devtools(
    (set, get) => ({
      me: undefined,

      actions: {
        setMe: (me: any | undefined) => {
          return set({
            me,
          });
        },
        init: () => {
          const { setMe } = get().actions;
          setMe({});
        },
      },
    }),
    {
      name: "auth-store",
    }
  )
);

export type ExtractState<S> = S extends {
  getState: () => infer T;
}
? T
: never;

type Params<U> = Parameters<typeof useStore<typeof userStore, U>>;


const refreshTokenSelector = (state: ExtractState<typeof userStore>) => state.me;
const actionsSelector = (state: ExtractState<typeof userStore>) => state.actions;

export const getMe = () => refreshTokenSelector(userStore.getState());

function useUserStore<U>(selector: Params<U>[1], equalityFn?: Params<U>[2]) {
  return useStore(userStore, selector, equalityFn);
}

export const getActions = () => actionsSelector(userStore.getState());
export const useRefreshToken = () => useUserStore(refreshTokenSelector);
export const useActions = () => useUserStore(actionsSelector);
