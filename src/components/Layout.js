import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './Navbar';

import '../styles/global.css';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      {children}
      <p>Here goes the FOOTER</p>
    </React.Fragment>
  )
}

export default Layout;
