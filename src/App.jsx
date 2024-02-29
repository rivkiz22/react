import "./App.css";
import BusinessData from "./componenets/BusinessData/BusinessData.jsx";
import { useNavigate } from "react-router-dom";
import adminDetailsStore from "./store/adminDetails.js";
import { observer } from "mobx-react-lite";


const App = observer(() => {
  const navigate = useNavigate();
  const { isAdmin } = adminDetailsStore;

  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <BusinessData />
      {!isAdmin && <button onClick={goToLogin}>כניסת מנהל</button>}
    </>
  );
});

export default App;
