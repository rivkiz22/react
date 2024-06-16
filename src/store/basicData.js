import logo from "../logo/footer-logo.png.webp";

export const defaultServices = [
  { id: 0, name: "רפלקסולוגיה", price: "300", desciption: "aaaaaaa" },
  { id: 1, name: "עיסויים", price: "200", desciption: "bbbbbbb" },
  { id: 2, name: "צמחי מרפא", price: "250", desciption: "rrrrrrrrrr" },
  { id: 3, name: "תזונה", price: "180", desciption: "eeeeeeee" },
];

export const defaultMeetings = [
  {
    id: 0,
    serviceId: 1,
    dateTime: "2021-06-20T10:00:00.000Z",
    clientName: "אבי כהן",
    clientPhone: "050-1234567",
    clientEmail: "m@m.com",
  },
  {
    id: 1,
    serviceId: 3,
    dateTime: new Date(),
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

export const defaultbBusiness = {
  name: "רפואה טבעית",
  address: "ר' עקיבא 100 בני ברק",
  phone: "03-6166666",
  owner: "רבקה לנדאו",
  logo: logo,
  description:
    "ברפואה-משלימה אינטגרטיבית למגוון רחב של בעיות בהתאמה אישית ובפיקוח רפואי.",
};
