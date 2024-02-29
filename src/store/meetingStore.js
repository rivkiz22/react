import { makeObservable, observable, action } from "mobx";
import { getMeetings, postMeeting } from "../dal/MeetingServer";

class MeetingStore {
  meetings = [
    {
      id: 0,
      serviceId: 1,
      dateTime: "2021-06-20T10:00:00.000Z", //מבנה של תאריך ושעה סטנדרטי בjs
      clientName: "אבי כהן",
      clientPhone: "050-1234567",
      clientEmail: "m@m.com",
    },
    {
      id: 1,
      serviceId: 3,
      dateTime: new Date(), //מבנה של תאריך ושעה סטנדרטי בjs
      clientName: "אבי כהן",
      clientPhone: "050-1234567",
      clientEmail: "m@m.com",
    },
    {
      id: 2,
      serviceId: 3,
      dateTime: "2024-02-21T10:00:00.000Z", //מבנה של תאריך ושעה סטנדרטי בjs
      clientName: "אבי כהן",
      clientPhone: "050-1234567",
      clientEmail: "m@m.com",
    },
    {
      id: 3,
      serviceId: 3,
      dateTime: "2024-03-21T10:00:00.000Z", //מבנה של תאריך ושעה סטנדרטי בjs
      clientName: "אבי כהן",
      clientPhone: "050-1234567",
      clientEmail: "m@m.com",
    },
  ];

  constructor() {
    makeObservable(this, {
      meetings: observable,
      addNewMeetings: action,
    });
    // this.init();
  }

  // const meeting = {
  //    id:1
  //   serviceId:1,
  //   serviceDescription: "פגישת ייעוץ עם יריב כץ",
  //   servicePrice: 500,
  //   dateTime: "2021-06-20T10:00:00.000Z", //מבנה של תאריך ושעה סטנדרטי בjs
  //   clientName: "אבי כהן",
  //   clientPhone: "050-1234567",
  //   clientEmail: "m@m.com",
  // };

    init = async () => {
      this.meetings = await getMeetings();
    };

  addNewMeetings = async (/*serviceId,*/ newMeeting) => {
    console.log("isnewMeeting", newMeeting);
    const fullMeeting = { id: this.meetings.length + 1, ...newMeeting };
    const isAvainable = await postMeeting(fullMeeting);
    if (isAvainable) this.meetings = { ...this.meetings, fullMeeting };
    return isAvainable;
  };
}

export default new MeetingStore();
