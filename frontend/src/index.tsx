import React from "react"
import ReactDOM from "react-dom/client"
import RootStore from "./stores/root.store.ts";
import "./index.css"
import App from "./App.tsx"
import { StoreContext } from "./context/store.ts";
const rootStore = new RootStore();

const stores = {
  authStore: rootStore.authStore,
  rootStore,
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreContext.Provider value={stores}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StoreContext.Provider>
)
