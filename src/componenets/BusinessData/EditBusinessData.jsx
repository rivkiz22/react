import { useState } from "react";
import BusinessDataStore from "../../store/BusinessDataStore";


function EditBusinessData({businessData,onClose}) {
    const [name, setName] = useState(businessData.name);
    const [address, setAddress] = useState(businessData.address );
    const [phone, setPhone] = useState(businessData.phone );
    const [owner, setOwner] = useState(businessData.owner );
    const [description, setDescription] = useState(businessData.description );

    const { editBusinessData } = BusinessDataStore;


    const onSubmit=()=>{
      const newData={name:name,address:address,phone:phone,owner:owner,description:description}
      editBusinessData(newData);
      //למה אין אפשרות לעשות העתקה עמוקה בסטייט?
      onClose(false);
    }

  
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
      address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <label>
      phone:
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label>
      owner:
        <input
          type="text"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
      </label>
      {/* <label>
      logo:
        <input
          type="text"
          value={logo}
          onChange={(e) => setLogo(e.target.value)}
        />
      </label> */}
      <label>
      description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <button onClick={onSubmit}>שמירה</button>

        </>
    )
}

export default EditBusinessData
