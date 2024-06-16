import { observer } from "mobx-react";
import { useState } from "react";
import servicesStore from "../../store/ServiceStore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddServices = observer(({ service, close }) => {
  const [name, setName] = useState(service?.name || "");
  const [price, setPrice] = useState(service?.price || "");
  const [desciption, setDesciption] = useState(service?.desciption || "");

  const { addNewService, editService } = servicesStore;

  const onSubmit = () => {
    const newService = { name: name, price: price, desciption: desciption };
    let response;
    if (service) {
      response= editService(service.id, newService);
    } else {
      response= addNewService(newService);
    }
    if (response){
      close(false);
    }
    else{
      alert("error try again")
    }
    
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {service ? "עריכת שירות" : "הוספת שירות חדש"}
        </Typography>
        <TextField
          label="שם"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <TextField
          label="מחיר"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          fullWidth
        />
        <TextField
          label="תיאור"
          value={desciption}
          onChange={(e) => setDesciption(e.target.value)}
          fullWidth
        />
      </CardContent>
      <Button onClick={onSubmit} variant="contained" color="primary">
        אישור
      </Button>
    </Card>
  );
});

export default AddServices;
