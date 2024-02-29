//mobx
import { observable, action, makeObservable } from "mobx";
import { LoginServer } from "../dal/LoginServer";

class AdminDetailsStore {
  // adminDetails = null;
  isAdmin = false;

  constructor() {
    makeObservable(this, {
      // adminDetails: observable,
      isAdmin: observable,
      setAdmin: action,
      setIsAdmin:action
    });
  }

  setAdmin = async (userName, password) => {
    const response = await LoginServer(userName, password);
    if (response) {
      // this.adminDetails = { userName, password };
     this.setIsAdmin(true)
    }
    return response;
  };

  setIsAdmin=(isAdmin)=>{
    this.isAdmin=isAdmin
  }
}

export default new AdminDetailsStore();
