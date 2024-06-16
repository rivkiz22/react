import { observable, action, makeObservable } from "mobx";
import { getBusinessData, postBusinessData } from "../dal/BusinessData";

class BusinessDataStore {
  businessDataDetails = {};

  constructor() {
    makeObservable(this, {
      businessDataDetails: observable,
      editBusinessData: action,
    });
    this.init();
  }

  init = async () => {
    this.businessDataDetails = await getBusinessData();
  };

  editBusinessData = async (newData) => {
    try {
      const response = await postBusinessData(newData);
      if (response) {
        this.businessDataDetails = newData;
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error editing business data:", error);
      return false;
    }
  };
}

export default new BusinessDataStore();
