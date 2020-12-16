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
import { graphql } from 'gatsby';

const useStyles = makeStyles(() => ({
  mainContainer: {
    flexGrow: 1,
    flexShrink: 0,
    background: "rgba(0,0,0,0.3)"
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
    backgroundColor: "transparent"
  },
  cardContent: {
    backgroundColor: "#fff",
    minHeight: "200px"
  },
  cardBottom: {
    backgroundColor: "#fff"
  },
  technologies: {
    margin: "8px 16px 0 0",
    display: "inline-block",
    fontSize: "0.875rem",
    lineHeight: 1
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

const PortfolioPage = ({ data }) => {
  const classes = useStyles();
  const images = data.images.nodes
    .map(item => item.fluid.src);

  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {data.resume.portfolio.map((item, i) => (
          <Grid item xs={12} sm={8} md={4} key={`portfolio-${i + 1}`}>
            <Card className={classes.cardContainer} elevation={3}>
              <CardMedia
                component="img"
                alt={item.name}
                height="140"
                image={images[i]}
              />
              <CardContent className={classes.cardContent}>
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
                <CardActions className={classes.cardBottom}>
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
                  {item.liveurl === "" ? "" :
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
                  }
                </CardActions>
              </ThemeProvider>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PortfolioPage;

export const query = graphql`
query {
  resume: resumeDataJson {
    portfolio {
      name
      description
      imgurl
      codeurl
      liveurl
      technologies
    }
  }
  images: allImageSharp(filter : {fluid: {src: {regex: "/portfolio/i"}}}) {
    nodes {
      fluid(maxHeight: 400, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
