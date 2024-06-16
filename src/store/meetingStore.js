import { makeObservable, observable, action } from "mobx";
import { getMeetings, postMeeting } from "../dal/MeetingServer";

class MeetingStore {
  meetings=[]

  constructor() {
    makeObservable(this, {
      meetings: observable,
      addNewMeetings: action,
    });
    this.init();
  }

    init = async () => {
      this.meetings = await getMeetings();
    };

  addNewMeetings = async (/*serviceId,*/ newMeeting) => {
    const fullMeeting = { id: this.meetings.length + 1, ...newMeeting };
    //TODO replase service to service id from name(if need to)
    const isAvainable = await postMeeting(fullMeeting);
    if (isAvainable) this.meetings = { ...this.meetings, fullMeeting };
    return isAvainable;
  };
}

export default new MeetingStore();
