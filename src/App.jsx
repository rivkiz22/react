import { observer } from "mobx-react-lite";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import BusinessData from "./componenets/BusinessData/BusinessData.jsx";
import adminDetailsStore from "./store/adminDetails.js";

const App = observer(() => {
  const navigate = useNavigate();
  const { isAdmin } = adminDetailsStore;

  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <BusinessData />

      <Link to="/services">שרותי העסק </Link>
      <Link to="/meeting">פגישות</Link>

      {!isAdmin && <button onClick={goToLogin}>כניסת מנהל</button>}
      <Outlet />
    </>
  );
});

export default App;
