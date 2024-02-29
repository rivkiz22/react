import Login from "./Login.jsx";
import { observer } from "mobx-react-lite";
import adminDetailsStore from "../../store/adminDetails.js";

const AdminPage = observer(() => {

  const { isAdmin } = adminDetailsStore;

  return <>{!isAdmin && <Login></Login> }</>;
});
export default AdminPage;

// const AdminPage = () => {
  
//  return <h1>admin page</h1>
// };
// export default AdminPage;
