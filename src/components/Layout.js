import React from 'react';
import { CssBaseline } from '@material-ui/core';

import '../styles/global.css';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <p>Here goes the NAV</p>
      {children}
      <p>Here goes the FOOTER</p>
    </React.Fragment>
  )
}

export default Layout;
