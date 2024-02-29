import { observer } from "mobx-react";
import { useState } from "react";
import servicesStore from "../../store/ServiceStore";

const AddServices = observer(({ service, close }) => {
  const [name, setName] = useState(service?.name || "");
  const [price, setPrice] = useState(service?.price || "");
  const [desciption, setDesciption] = useState(service?.desciption || "");

  const { addNewService, editService } = servicesStore;

  const onSubmit = () => {
    const newService = { name: name, price: price, desciption: desciption };
    //console.log('hi')
    if (service) {
      editService(service.id, newService);
    } else {
      addNewService(newService);
    }
    close(false);
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
      <label>
        price:
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label>
        desciption:
        <input
          type="text"
          value={desciption}
          onChange={(e) => setDesciption(e.target.value)}
        />
      </label>
      <button onClick={onSubmit}>אישור</button>
    </>
  );
});

export default AddServices;


