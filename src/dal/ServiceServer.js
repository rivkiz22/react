//import ServiseStore from '../store/ServiceStore';
import axios from "axios";


export async function getServices() {
    const response  = await axios.get('http://localhost:8787/services');
    const services = response.data;
    // ServiseStore.setServices(services);
  }
  
  
  export const addService=async(servise)=>{
    try{
  const response=await fetch('http://localhost:8787/service',{
  method:'post',
  body:JSON.stringify(servise),
  headers:{
    "Content-Type":"application/json"
  }
  })
  if(response.status===200){
  ServiseStore.addService(servise);
  console.log("good")
  
  }
  else{
  console.log("no");
  
  }
    }
    catch(error){
  console.log(error,"error")
    }
  }
  
  