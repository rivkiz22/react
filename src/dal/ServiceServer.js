import axios from "axios";
import { defaultServices } from "../store/basicData";

export async function getServices() {
  try {
    const response = await axios.get("http://localhost:8787/services");
    console.log(response);
    if (!response.ok) {
      return defaultServices;
    }

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const addService = async (servise) => {
  try {
    const response = await fetch("http://localhost:8787/service", {
      method: "post",
      body: JSON.stringify(servise),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
     return true
    } else {
      return false
    }
  } catch (error) {
    console.log(error, "error");
  }
};
