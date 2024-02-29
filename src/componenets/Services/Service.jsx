import { useState } from "react";
import AddServices from "./AddServices";
import AddMeeting from "../Meetings/AddMeeting";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Service = ({ service, isAdmin }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [openAddMeeting, setOpenAddMeeting] = useState(false);
  return (
    <>
      {isEditMode ? (
        <AddServices service={service} close={setIsEditMode} />
      ) : (
        <>
          {openAddMeeting && <AddMeeting Service={service.id} />}

          {/* <h3>{service.name}</h3>
          <p>{service.desciption}</p>
          <p>רק ב: {service.price} שקלים</p> */}
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                שם המוצר:{service.name}
              </Typography>
              <Typography color="text.secondary">
                <p>רק ב: {service.price} שקלים</p>
              </Typography>
              <Typography variant="body2" component="p">
                <p>{service.desciption}</p>
              </Typography>
            </CardContent>
          </Card>
          {!isAdmin && !openAddMeeting && (
            <button
              onClick={() => {
                setOpenAddMeeting(true);
              }}
            >
              לקביעת פגישה
            </button>
          )}
          {isAdmin && (
            <button
              onClick={() => {
                setIsEditMode(true);
              }}
            >
              ערוך
            </button>
          )}
        </>
      )}
    </>
  );
};

export default Service;
