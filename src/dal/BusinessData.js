import { defaultbBusiness } from "../store/basicData";

export async function postBusinessData(businessData) {
  try {
    const response = await fetch("http://localhost:8787/businessData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(businessData),
    });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export const getBusinessData = async () => {
  try {
    const response = await fetch("http://localhost:8787/businessData");
    const businessData = await response.json();

    if (!businessData.body) {
      return defaultbBusiness;
    }
    
    return businessData;
  } catch (error) {
    console.error(error);
    return null;
  }
};
