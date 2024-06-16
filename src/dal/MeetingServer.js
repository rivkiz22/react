import { defaultMeetings } from "../store/basicData";

export async function postMeeting(newMeeting) {
  try {
    console.log("postMeeting", newMeeting);

    const response = await fetch("http://localhost:8787/appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMeeting),
    });
    console.log("response", response);

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log("responseerror", error);

    return false;
  }
}

export const getMeetings = async () => {
  try {
    const response = await fetch("http://localhost:8787/appointment");
    console.log(response)
    if (!response.ok ) {
      return defaultMeetings;
    }
    const meetings = await response.json();
    return meetings;
  } catch (error) {
    console.error(error);
    return null;
  }
};
