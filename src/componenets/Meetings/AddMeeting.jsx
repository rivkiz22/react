import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import Date from "./Date";
import meetingStore from "../../store/meetingStore";
import ServiceStore from "../../store/ServiceStore.js";

const AddMeeting = observer(
  ({ selectedServiceId, selectedDateTime, close }) => {
    const { services } = ServiceStore;
    const chooseServicevalue = selectedServiceId
      ? services.find((service) => service.id === selectedServiceId).name
      : "";
    const [meeting, setMeeting] = useState({
      dateTime: selectedDateTime || null,
      clientName: "",
      clientPhone: "",
      clientEmail: "",
      chooseService: chooseServicevalue,
    });

    const onSubmit = async () => {
      const isAddMeetingSucces = await meetingStore.addNewMeetings(meeting);
      if (isAddMeetingSucces) {
        alert("הפגישה נקבעה בהצלחה");
        close();
      } else {
        alert("התאריך תפוס, ניתן לקבוע פגישה במועד אחר");
      }

      // const newMeetinaddNewMeetingsg = {
      //   serviceName: serviceName,
      //   serviceName: serviceName,
      //   servicePrice: servicePrice,
      //   dateTime: dateTime,
      //   clientName: clientName,
      //   clientPhone: clientPhone,
      //   clientEmail: clientEmail,
      // };
      // addNewService(newMeeting);
    };

    //close(false);
    const onaccsept = (value) => {
      setMeeting({ ...meeting, dateTime: value });
    };

    return (
      <>
        <label>
          dateTime:
          <Date
            onAccsept={onaccsept}
            selectedDateTime={meeting.selectedDateTime}
          />
        </label>
        <label>
          clientName:
          <input
            type="text"
            value={meeting.clientName}
            onChange={(e) =>
              setMeeting({ ...meeting, clientName: e.target.value })
            }
          />
        </label>
        <label>
          clientPhone:
          <input
            type="text" //איך בודקים שזה טלפון
            value={meeting.clientPhone}
            onChange={(e) =>
              setMeeting({ ...meeting, clientPhone: e.target.value })
            }
          />
        </label>
        <label>
          clientEmail:
          <input
            type="email"
            value={meeting.clientEmail}
            onChange={(e) =>
              setMeeting({ ...meeting, clientEmail: e.target.value })
            }
          />
        </label>
        <label>
          service:
          <select
            value={meeting.selectedService}
            onChange={(e) =>
              setMeeting({ ...meeting, selectedService: e.target.value })
            }
          >
            {services.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </label>

        <button onClick={onSubmit}>אישור</button>
      </>
    );
  }
);

export default AddMeeting;
