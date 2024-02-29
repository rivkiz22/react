import { observer } from "mobx-react-lite";
import { Link, Outlet } from "react-router-dom";
import logo from "../../logo/footer-logo.png.webp";
import adminDetailsStore from "../../store/adminDetails.js";
import EditBusinessData from "./EditBusinessData.jsx";
import { useState } from "react";

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



const BusinessData = observer(() => {
  const { isAdmin } = adminDetailsStore;
  const [isEdit, setIsEdit] = useState(false);


  return (
    <>
      <>
        {isEdit ? (
          <EditBusinessData businexessData={business} onClose={setIsEdit} />
        ) : (
          <>
    <AppBar position="static" sx={{ backgroundColor: '#333', borderBottom: '2px solid #00bcd4' }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Roboto', letterSpacing: '1px' }}>
        <p>{business.name}</p>
        </Typography>
        <Typography variant="body1" component="div" sx={{ fontFamily: 'Roboto', letterSpacing: '1px' }}>
        <p>{business.address}</p>
            <p>{business.phone}</p>
            <p>{business.owner}</p>
            <img src={business.logo} style={{ width: "100px" }} />
            <p>{business.description}</p>
        </Typography>
      </Toolbar>
    </AppBar>
            {/* <p>{business.name}</p>
            <p>{business.address}</p>
            <p>{business.phone}</p>
            <p>{business.owner}</p>
            <img src={business.logo} style={{ width: "100px" }} />
            <p>{business.description}</p> */}
            {isAdmin && <button onClick={() => setIsEdit(true)}>עדכון</button>}
          </>
        )}

        <Link to="services">שרותי העסק </Link>
        <Link to="meeting">פגישות</Link>

        <Outlet />
      </>
    </>
  );
});
export default BusinessData;

const business = {
  name: "רפואה טבעית",
  address: "ר' עקיבא 100 בני ברק",
  phone: "03-6166666",
  owner: "רבקה לנדאו",
  logo: logo,
  description:
    "ברפואה-משלימה אינטגרטיבית למגוון רחב של בעיות בהתאמה אישית ובפיקוח רפואי בכאבים ובמחלות כרוניות.",
};
