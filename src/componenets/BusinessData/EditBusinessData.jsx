import { observer } from "mobx-react";
import { useState } from "react";
import BusinessDataStore from "../../store/BusinessDataStore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const EditBusinessData = observer(({ onClose }) => {
  const { businessDataDetails } = BusinessDataStore;
  const { editBusinessData } = BusinessDataStore;

  const [name, setName] = useState(businessDataDetails.name);
  const [address, setAddress] = useState(businessDataDetails.address);
  const [phone, setPhone] = useState(businessDataDetails.phone);
  const [owner, setOwner] = useState(businessDataDetails.owner);
  const [description, setDescription] = useState(
    businessDataDetails.description
  );

  const onSubmit = () => {
    const newData = {
      name: name,
      address: address,
      phone: phone,
      owner: owner,
      description: description,
    };
    onClose();
    editBusinessData(newData);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          עריכת פרטי העסק
        </Typography>
        <TextField
          label="שם"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <TextField
          label="כתובת"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          fullWidth
        />
        <TextField
          label="טלפון"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          fullWidth
        />
        <TextField
          label="בעלים"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          fullWidth
        />
        <TextField
          label="תיאור"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
        />
      </CardContent>
      <Button onClick={onSubmit} variant="contained" color="primary">
        שמירה
      </Button>
    </Card>
  );
});

export default EditBusinessData;
