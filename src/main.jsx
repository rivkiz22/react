import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AdminPage from "./componenets/Admin/AdminPage.jsx";
import AddMeeting from "./componenets/Meetings/AddMeeting.jsx";
import Meeting from "./componenets/Meetings/Meeting.jsx";
import ServicesList from "./componenets/Services/ServicesList.jsx";
import "./index.css";
import Login from "./componenets/Admin/Login.jsx";

//TODO defult view services
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "services", element: <ServicesList/> },
      { path: "meeting", element: <Meeting/> },
    ],
  },
  { 
    path: "/login",
    element: <Login />
   },
  { 
    path: "/addMeeting"
  , element: <AddMeeting />
 },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={routes} />
  </React.StrictMode>
);
