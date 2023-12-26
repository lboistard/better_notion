import { useContext } from "react";
import { StoreContext } from "../context/store";
import RootStore from "../stores/root.store";

export const useStore = (): RootStore => useContext(StoreContext);
