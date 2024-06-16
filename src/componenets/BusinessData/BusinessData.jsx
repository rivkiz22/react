import { observer } from "mobx-react-lite";
import adminDetailsStore from "../../store/adminDetails.js";
import EditBusinessData from "./EditBusinessData.jsx";
import { useState } from "react";

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BusinessDataStore from "../../store/BusinessDataStore.js";



const BusinessData = observer(() => {
  const { isAdmin } = adminDetailsStore;
  const [isEdit, setIsEdit] = useState(false);
  const { businessDataDetails } = BusinessDataStore;


  return (
    <>
      <>
        {isEdit ? (
          <EditBusinessData onClose={()=>{setIsEdit(false)}} />
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
        <p>{businessDataDetails.name}</p>
        </Typography>
        <Typography variant="body1" component="div" sx={{ fontFamily: 'Roboto', letterSpacing: '1px' }}>
        <p>{businessDataDetails.address}</p>
            <p>{businessDataDetails.phone}</p>
            <p>{businessDataDetails.owner}</p>
            <img src={businessDataDetails.logo} style={{ width: "100px" }} />
            <p>{businessDataDetails.description}</p>
        </Typography>
      </Toolbar>
       {isAdmin && <button onClick={() => setIsEdit(true)}>עדכון</button>}
    </AppBar>
           
          </>
        )}

       
      </>
    </>
  );
});
export default BusinessData;


