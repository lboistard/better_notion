import { makeAutoObservable, computed, observable, action } from "mobx";
import agent from "../agent";
import RootStore from "./root.store";

class AuthStore {
  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  rootStore: RootStore;

  @observable authorization = "";


  @computed get isAuth() {
    return this.authorization ? true : false
  }

  @action login = (name: string, email: string, password: string) => {
    console.log("name :", name)
    const token: string = agent.Auth.login(
      email,
      password,
      name
    );

    this.setToken(token);

    return token;
  }

  @action setToken(token: string) {
    this.authorization = token;
  }

  @computed get getToken() {
    if (this.authorization) {
      return this.authorization;
    } else {
      return null
    }
  }

}

export default AuthStore;
