import { observable, action, reaction } from "mobx";

class CommonStore {

  @observable token = "";

  @action setToken(token: string) {
    this.token = token;
  }
}

export default new CommonStore();
