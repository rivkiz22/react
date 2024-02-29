//mobx
import { observable, action, makeObservable } from "mobx";

const defaultServices = [
  { id: 0, name: "רפלקסולוגיה", price: "300", desciption: "aaaaaaa" },
  { id: 1, name: "עיסויים", price: "200", desciption: "bbbbbbb" },
  { id: 2, name: "צמחי מרפא", price: "250", desciption: "rrrrrrrrrr" },
  { id: 3, name: "תזונה", price: "180", desciption: "eeeeeeee" },
];

class servicesStore {
  services = defaultServices;

  constructor() {
    makeObservable(this, {
      services: observable,
      // removeService: action,
      addNewService: action,
      editService: action,
    });
  }

  editService = (serviceId, newService) => {
    this.services[serviceId] = { id: serviceId, ...newService };
  };

  addNewService = (newService) => {
    this.services = [
      ...this.services,
      { id: this.services.length, ...newService },
    ];
  };
}

export default new servicesStore();
