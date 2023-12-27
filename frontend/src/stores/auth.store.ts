import { makeAutoObservable, computed, observable, action } from "mobx";
import { isEmpty } from "lodash";

import { ERROR, IDLE, LOADING, SUCCESS } from "@/constants/asyncStatus";
import agent from "../agent";
import RootStore from "./root.store";
import commonStore from "./common.store";

class AuthStore {

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  @observable authorization = "";
  @observable loginStatus = IDLE;
  @observable errors = undefined;
  @observable values = {
    name: "",
    email: "",
    password: "",
  };

  @action setUsername(name: string) {
    this.values.name = name;
  }

  @action setEmail(email: string) {
    this.values.email = email;
  }

  @action setPassword(password: string) {
    this.values.password = password;
  }

  @action reset() {
    this.values.name = "";
    this.values.email = "";
    this.values.password = "";
  }

  @computed get isAuth() {
    return !isEmpty(commonStore.token) ? true : false
  }

  @action login = async (email: string, password: string) => {
    this.loginStatus = LOADING;
    try {
      const { token } = await agent.Auth.login(
        email,
        password
      );

      commonStore.setToken(token.split(" ")[1]);
      this.loginStatus = SUCCESS;

      return true;
    } catch (error) {
      console.log(error);
      this.loginStatus = ERROR;
      return false;
    }
  }

  @action logout() {
    commonStore.setToken("");
    return Promise.resolve();
  }
}

export default AuthStore;
