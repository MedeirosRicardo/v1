import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './Navbar';
import Footer from './Footer';

import '../styles/global.css';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout;
