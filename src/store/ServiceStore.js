//mobx
import { observable, action, makeObservable } from "mobx";
import { getServices, addService } from "../dal/ServiceServer";

class servicesStore {
  services = [];

  constructor() {
    makeObservable(this, {
      services: observable,
      addNewService: action,
      editService: action,
    });
    this.init();
  }

  init = async () => {
    this.services = await getServices();
  };

  editService = async (serviceId, newService) => {
    const service = { id: serviceId, ...newService };
    const response = await addService(service);
    this.services[serviceId] = service;
    return response;
  };

  addNewService = async (newService) => {
    const service = { id: this.services.length, ...newService };
    const response = await addService(service);
    this.services = [...this.services, , service];
    return response;
  };
}

export default new servicesStore();
