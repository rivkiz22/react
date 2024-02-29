// import { MonthCalendar } from '@mui/x-date-pickers/MonthCalendar';
import { useState } from "react";
import Date from "./Date";
import AddMeeting from "./AddMeeting";
import { observer } from "mobx-react-lite";
import adminDetailsStore from "../../store/adminDetails.js";
import MeetingsList from "./MeetingsList.jsx";

const Meeting = observer(() => {
  const [openAddMeeting, setOpenAddMeeting] = useState(false);
  const [date, setDate] = useState();
  const { isAdmin } = adminDetailsStore;

  // const meeting = {
  //   serviceName: "פגישת ייעוץ",
  //   serviceDescription: "פגישת ייעוץ עם יריב כץ",
  //   servicePrice: 500,
  //   dateTime: "2021-06-20T10:00:00.000Z", //מבנה של תאריך ושעה סטנדרטי בjs
  //   clientName: "אבי כהן",
  //   clientPhone: "050-1234567",
  //   clientEmail: "m@m.com",
  // };

  const onChooseDate = (value) => {
    setDate(value);
    setOpenAddMeeting(true);
  };

  return (
    <>
      {isAdmin ? (
        <MeetingsList />
      ) : (
        <>
          <h1>בחר תאריך</h1>
          {!openAddMeeting && <Date onAccsept={onChooseDate} />}
          {openAddMeeting && (
            <AddMeeting
              selectedDateTime={date}
              close={() => {
                setOpenAddMeeting(false);
              }}
            />
          )}
        </>
      )}
    </>
  );
});

export default Meeting;
