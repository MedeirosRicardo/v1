import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
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
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction
        icon={<LinkedIn />}
        className={classes.root}
        component={Link}
        to={{ pathname: "https://www.linkedin.com/in/ricmedeiros"}}
        target="_blank"
      />
      <BottomNavigationAction
        icon={<GitHub />}
        className={classes.root}
        component={Link}
        to={{ pathname: "https://github.com/medeirosricardo"}}
        target="_blank"
      />
    </BottomNavigation>
  );
};
export default Footer;
