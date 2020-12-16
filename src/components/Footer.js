import React from "react";
// import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  footer: {
    marginTop: 'auto',
    backgroundColor: '#222',
    color: 'tan',
    fontSize: '1.8rem',
    textAlign: 'center',
  },
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <BottomNavigation className={classes.bottomNavContainer}>
        <BottomNavigationAction
          icon={<LinkedIn />}
          className={classes.root}
          // component={Link}
          to={{ pathname: "https://www.linkedin.com/in/ricmedeiros" }}
          target="_blank"
        />
        <BottomNavigationAction
          icon={<GitHub />}
          className={classes.root}
          // component={Link}
          to={{ pathname: "https://github.com/medeirosricardo" }}
          target="_blank"
        />
      </BottomNavigation>
      <Container maxWidth="sm">
        <Typography>
          {'Copyright © Ricardo Medeiros'}
          {' '}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </footer>
  );
};
export default Footer;
