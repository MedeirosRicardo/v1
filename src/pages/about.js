import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from "../components/SEO";

const useStyles = makeStyles(() => ({
  aboutContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    flexShrink: 0,
    padding: 32,
    background: "rgba(0,0,0,0.3)"
  },
  innerContainer: {
    maxWidth: "900px"
  },
  heading: {
    color: "tomato",
    padding: "2rem 0",
    textTransform: "uppercase"
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: "8px",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  text: {
    color: "tan",
    maxWidth: "500px",
    paddingBottom: "12px",
    marginRight: "12px",
    fontSize: "1.1rem",

    "& a": {
      textDecoration: "none",
      color: "tomato",
    }
  },
  skillsContainer: {
    marginBottom: 32
  },
  skillsText: {
    color: "tan",
  }
}));

const AboutPage = ({ data }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <SEO title="About Me" />
      <Grid container className={classes.aboutContainer}>
        <Box className={classes.innerContainer}>
          <Typography variant="h4" align="left" className={classes.heading}>
            About Me
        </Typography>
          <Grid container>
            <Grid item sm>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs className={classes.skillsContainer}>
                  <Typography variant="body1" className={classes.text}>
                    Hello! I'm Ricardo Medeiros, a software engineer based in Toronto, ON.
                </Typography>
                  <Typography variant="body1" className={classes.text}>
                    I enjoy creating things, wheter it is a website, an application, or anything in between. My goal is
                    to always build products that provide performant experiences.
                </Typography>
                  <Typography variant="body1" className={classes.text}>
                    I'm graduate from{' '}
                    <a href="https://www.senecacollege.ca/">Seneca College</a>
                    {' '}in Computer Programmer.
                </Typography>
                  <Typography variant="body1" className={classes.text}>
                    Here are a few technologies I've been working with recently:
                </Typography>
                  <GridList cols={2} cellHeight="auto">
                    {data.resume.skills.map((skill, i) => (
                      <ListItem key={`skill-${i}`}>
                        <ListItemIcon className={classes.skillsText}>
                          <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary={skill.skillname} className={classes.skillsText} />
                      </ListItem>
                    ))}
                  </GridList>
                </Grid>
              </Grid>
            </Grid>
            <Grid>
              <Avatar className={classes.image}>
                <StaticImage
                  src="../assets/images/me.jpg"
                  layout="fixed"
                  width={500}
                  alt="Me"
                  className={classes.img}
                />
              </Avatar>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </React.Fragment>
  );
}

export default AboutPage;

export const query = graphql`
  query {
    resume: resumeDataJson {
      skills {
        skillname
      }
    }
  }
`;
