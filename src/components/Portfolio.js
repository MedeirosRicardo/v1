import React from "react";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from '@material-ui/icons/GitHub';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
  mainContainer: {

  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
  technologies: {
    margin: "8px 16px 0 0",
    display: "inline-block"
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff6347',
      contrastText: '#fff'
    },
  },
});

const Portfolio = (props) => {
  const classes = useStyles();
  const resumeData = props.resumeData;

  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {resumeData.portfolio.map((item, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardMedia
                component="img"
                alt={item.name}
                height="140"
                image={`${item.imgurl}`}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
                {item.technologies.map((tech, i) => (
                  <Typography key={i} className={classes.technologies} variant="body1" color="textPrimary">
                    {tech}
                  </Typography>
                ))}
              </CardContent>
              <ThemeProvider theme={theme}>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    startIcon={<GitHubIcon />}
                    href={`${item.codeurl}`}
                    target="_blank"
                  >
                    Code
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    endIcon={<ExitToAppIcon />}
                    href={`${item.liveurl}`}
                    target="_blank"
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </ThemeProvider>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
