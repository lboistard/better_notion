import AuthStore from "./auth.store";

class RootStore {
  authStore: AuthStore;

  constructor() {
    this.authStore = new AuthStore(this);
  }
}

export default RootStore;
