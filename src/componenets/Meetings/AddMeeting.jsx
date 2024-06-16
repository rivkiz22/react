import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import Date from "./Date";
import meetingStore from "../../store/meetingStore";
import ServiceStore from "../../store/ServiceStore.js";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const AddMeeting = observer(
  ({ selectedDateTime, close, defaultService }) => {
    const { services } = ServiceStore;
    const [meeting, setMeeting] = useState({
      dateTime: selectedDateTime || null,
      clientName: "",
      clientPhone: "",
      clientEmail: "",
      selectedService: defaultService || "",
    });

    const onSubmit = async () => {
      const isAddMeetingSuccess = await meetingStore.addNewMeetings(meeting);
      if (isAddMeetingSuccess) {
        alert("הפגישה נקבעה בהצלחה ");
        close();
      } else {
        alert("התאריך תפוס, ניתן לקבוע פגישה במועד אחר");
      }
    };

    const onAccsept = (value) => {
      setMeeting({ ...meeting, dateTime: value });
    };

    return (
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            פרטי הפגישה
          </Typography>

          <Select
            label="סוג פגישה"
            value={meeting.selectedService}
            onChange={(e) =>
              setMeeting({ ...meeting, selectedService: e.target.value })
            }
            fullWidth
          >
            {services.map((option) => (
              <MenuItem key={option.id} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </Select>

          <Date onAccsept={onAccsept} selectedDateTime={meeting.dateTime} />

          <TextField
            label="שם"
            value={meeting.clientName}
            onChange={(e) =>
              setMeeting({ ...meeting, clientName: e.target.value })
            }
            fullWidth
          />
          <TextField
            label="טלפון"
            value={meeting.clientPhone}
            onChange={(e) =>
              setMeeting({ ...meeting, clientPhone: e.target.value })
            }
            fullWidth
          />

          <TextField
            label="מייל"
            type="email"
            value={meeting.clientEmail}
            onChange={(e) =>
              setMeeting({ ...meeting, clientEmail: e.target.value })
            }
            fullWidth
          />
          
        </CardContent>
        <Button onClick={onSubmit} variant="contained" color="primary">
          אישור
        </Button>
      </Card>
    );
  }
);

export default AddMeeting;
