import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Avatar, Box, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    background: "#233"
  },
  heading: {
    color: "tomato",
    padding: "2rem 0",
    textTransform: "uppercase"
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: "8px",
    marginRight: 32
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.aboutContainer}>
      <Box>
        <Typography variant="h4" align="left" className={classes.heading}>
          About Me
      </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar className={classes.image}>
              <img className={classes.img} alt="complex" src="images/me.jpg" />
            </Avatar>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h4">
                  About Me
              </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
              </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
              </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
              </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default About;
