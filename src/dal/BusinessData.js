export async function postBusinessData(businessData) {
    try {
     // console.log("postMeeting",newMeeting)
  
      const response = await fetch("http://localhost:8787/businessData", {
        method: "POST",
        headers: {
          "Content-Type": "businessData/json",
        },
        body: JSON.stringify(businessData),
      });
      //console.log('response',response)
  
  
      if (response.ok) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      //console.log('responseerror',error)
  
      return false;
    }
  }
  
  export const getBusinessData = async () => {
    try {
      const response = await fetch("http://localhost:8787/businessData");
      if (!response.ok) {
        return [];
      }
      const businessData = await response.json();
      // ServiseStore.setServices(services);
      return businessData;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  