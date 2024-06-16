import { observer } from "mobx-react-lite";
import { useState } from "react";
import ServiceStore from "../../store/ServiceStore.js";
import adminDetailsStore from "../../store/adminDetails.js";
import AddServices from "./AddServices.jsx";
import Service from "./Service.jsx";

//serviselist:
const ServicesList = observer(() => {
  const { isAdmin } = adminDetailsStore;
  const { services } = ServiceStore;
  const [openAddService, setOpenAddService] = useState(false);

  return (
    <>
      {openAddService ? (
        <AddServices close={setOpenAddService} />
      ) : (
        <>
          {services.map((curerntServise) => {
            return (
              <div style={{margin:"1rem"}}>
                <Service
                  service={curerntServise}
                  key={curerntServise.id}
                  isAdmin={isAdmin}
                />
              </div>
            );
          })}
          {isAdmin && (
            <button onClick={() => setOpenAddService(true)}>להוספת שרות</button>
          )}
        </>
      )}
    </>
  );
});

export default ServicesList;
