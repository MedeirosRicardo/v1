import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Alert, AlertTitle } from '@material-ui/lab';
import Send from "@material-ui/icons/Send";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    flexShrink: 0,
    padding: 32,
    background: "#233",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const defaultValues = {
  name: "",
  email: "",
  message: ""
};

const Contact = () => {
  const classes = useStyles();

  const [ isSuccessfullySubmitted, setIsSuccessfullySubmitted ] = useState(false);

  const { control, handleSubmit, errors, reset } = useForm({defaultValues});
  
  const onSubmit = async values => {
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const userID = process.env.REACT_APP_USER_ID;

    emailjs.send(serviceID, templateID, values, userID)
      .then(() => {
        reset(defaultValues);
        setIsSuccessfullySubmitted(true);
      })
      .catch(() => {
        setIsSuccessfullySubmitted("error");
      });
    };

  return (
    <Grid container className={classes.contactContainer}>
      <Grid container justify="center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <Typography variant="h5" className={classes.heading}>
              Get In Touch
            </Typography>
            {isSuccessfullySubmitted === true && (
              <Alert severity="success" className={classes.field} onClose={() => setIsSuccessfullySubmitted(false)}>
                <AlertTitle>Success</AlertTitle>
              Your message was successfully sent!
              </Alert>
            )}
            {isSuccessfullySubmitted === "error" && (
              <Alert severity="error" className={classes.field} onClose={() => setIsSuccessfullySubmitted(false)}>
                <AlertTitle>Something went wrong</AlertTitle>
              Your message was not sent. Please try again!
              </Alert>
            )}
            <Controller
              name="name"
              as={
                <InputField
                  fullWidth={true}
                  label="Name"
                  variant="outlined"
                  inputProps={{ className: classes.input }}
                  required={true}
                />
              }
              control={control}
              defaultValue=""
            />
            <Controller
              name="email"
              as={
                <InputField
                  id="email"
                  fullWidth={true}
                  label="Email"
                  variant="outlined"
                  inputProps={{ className: classes.input }}
                  className={classes.field}
                  required={true}
                  helperText={errors.email ? errors.email.message : null}
                  error={errors.email ? true : false}
                />
              }
              control={control}
              defaultValue=""
              rules={{
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address'
                }
              }}
            />
            <Controller
              name="message"
              as={
                <InputField
                  fullWidth={true}
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  inputProps={{ className: classes.input }}
                  required={true}
                />
              }
              control={control}
              defaultValue=""
            />
            <Button
              variant="outlined"
              fullWidth={true}
              endIcon={<Send />}
              className={classes.button}
              type="submit"
            >
              Contact Me
            </Button>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
};

export default Contact;
