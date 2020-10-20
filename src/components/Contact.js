import React from "react";
import { Controller, useForm } from "react-hook-form";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Send from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
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

const Contact = () => {
  const classes = useStyles();

  const { control, handleSubmit, errors } = useForm();
  const onSubmit = values => console.log(values);

  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className={classes.form}>
            <Typography variant="h5" className={classes.heading}>
              Get In Touch
            </Typography>
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
    </Box>
  );
};

export default Contact;
