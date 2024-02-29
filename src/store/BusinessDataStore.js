import { observable, action, makeObservable } from "mobx";
import logo from '../logo/footer-logo.png.webp'

const business = {
    name: "רפואה טבעית",
    address: "ר' עקיבא 100 בני ברק",
    phone: "03-6166666",
    owner: "רבקה לנדאו",
    logo: logo,
    description:"ברפואה-משלימה אינטגרטיבית למגוון רחב של בעיות בהתאמה אישית ובפיקוח רפואי.",
  };
  
class BusinessDataStore{
    BusinessData= business

constructor() {
    makeObservable(this,{
        BusinessData:observable,
        editBusinessData:action,
    });
}

editBusinessData = (newData) => {
    this.BusinessData(...newData);
  };
}

export default new BusinessDataStore();