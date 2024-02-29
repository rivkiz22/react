import { useState } from "react";
import AdminDetailsStore from "../../store/adminDetails.js";
import { observer } from "mobx-react-lite";
import {  useNavigate } from "react-router-dom";



const Login = observer(()=> {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = async () => {
    const isAdminLogin = await AdminDetailsStore.setAdmin(name, password);
    if (!isAdminLogin) {
      alert("שם המשתמש /הסיסמה אינם נכונים");
      setName("");
      setPassword("");
    }
    else{
      navigate('/')

    }
  };

  return (
    <>
      <label>
        name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Log In</button>
    </>
  );
})

export default Login;
