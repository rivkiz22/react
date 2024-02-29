import { observer } from "mobx-react-lite";
import meetingStore from "../../store/meetingStore.js";
import React, { useEffect, useState } from "react";

const MeetingView = observer(({ meetingId }) => {
  const { meetings } = meetingStore;
  const currrentMeet = meetings.find((meet) => meet.id === meetingId);
  const [color, setColor] = useState("green");

  useEffect(() => {
    if (currrentMeet) {
      FindColor();
    }
  }, [currrentMeet]);

  const FindColor = () => {
    const dateTimeMeeting = currrentMeet.dateTime;
    if (!dateTimeMeeting) return;

    const today = new Date();
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999); // Set end of the day (23:59:59.999)
    
    const endOfWeek = new Date(today);
    endOfWeek.setDate(today.getDate() + (6 - today.getDay())); // Get end of the week (Saturday)
    endOfWeek.setHours(23, 59, 59, 999); // Set end of the day for end of the week
    
    const givenDate = new Date(dateTimeMeeting);
    
    // Check if the given date is today
    if (
      givenDate >= today.setHours(0, 0, 0, 0) &&
      givenDate <= endOfDay
    ) {
      setColor("red");
    } else if (givenDate < today) {
      setColor("black");
    } else if (givenDate <= endOfWeek) {
      setColor("orange");
    } else {
      setColor("green");
    }
    
  };

  // Convert both dates to milliseconds since Epoch

  return (
    <div
      style={{ borderColor: color, borderStyle: "solid", borderRadius: "7px" }}
    >
      {currrentMeet ? (
        <>
          <p>{currrentMeet.clientName}</p>
          <p>{currrentMeet.clientPhone}</p>
        </>
      ) : (
        <p>לא נמצאה פגישה</p>
      )}
    </div>
  );
});

export default MeetingView;
