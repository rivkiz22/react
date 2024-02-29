import axios from "axios";



export const LoginServer = async (name, password) => {
  try {
    const res = await axios.post("http://localhost:8787/login", {
      name,
      password,
    });
    console.log(res)
    if (res.status == 200) {
      return true;
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return false;
    } else {
      console.log(error);
    }
  }
};

