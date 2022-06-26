import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import "./FooterBar.css";


function Footer() {
   
    return (
        <div className="footerbar">
        <AppBar position="center" className="footersss">
          <Toolbar>
            <Typography className="fotter-txt">
              Copyright © 2020, Bookstore Private Limited. All Rights Reserved.
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Footer