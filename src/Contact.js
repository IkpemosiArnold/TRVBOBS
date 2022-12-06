import Pnavbar from "./Pnavbar";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { Typography, Grid, Button, TextField } from "@mui/material";
import emailjs from "emailjs-com";
import validate from "validate.js";
const USER_ID = "process.env.REACT_APP_EMAILJS_USERID";
const TEMPLATE_ID = " process.env.REACT_APP_EMAILJS_TEMPLATEID";
const SERVICE_ID = "process.env.REACT_APP_EMAILJS_SERVICEID";

const schema = {
  name: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 128,
    },
  },
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
    length: {
      maximum: 300,
    },
  },
  message: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 2000,
    },
  },
};

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((res) => console.log("SUCCESS!", res.status, res.text))
      .catch((error) => console.log("FAILED...", error));

    setFormState((formState) => ({
      ...formState,
      isValid: false,
      values: {},
      touched: {},
      errors: {},
    }));
  };

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (e) => {
    e.persist();

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      },
      touched: {
        ...formState.touched,
        [e.target.name]: true,
      },
    }));
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  const el = useRef();
  const tl = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ repeat: -1 }).to(".starry-bg", {
        backgroundPosition: "-600px 0px",
        ease: "Linear.easeNone",
        duration: 50,
      });
    }, el);
  }, []); //
  return (
    <motion.div
      ref={el}
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, type: "tween", ease: "linear" }}
    >
      <div id="contact" className="starry-bg">
        <Pnavbar />
        <div>
          <form
            headers="application/json"
            name="contact-form"
            onSubmit={sendEmail}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h4" align="center">
                  <strong>We'd love to hear from you!</strong>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  placeholder="Name"
                  label="Name *"
                  variant="outlined"
                  size="medium"
                  name="name"
                  id="name"
                  fullWidth
                  helperText={
                    hasError("name") ? formState.errors.name[0] : null
                  }
                  error={hasError("name")}
                  onChange={handleChange}
                  type="text"
                  value={formState.values.name || ""}
                  sx={{
                    ".MuiFormLabel-root": {
                      color: "white",
                    },
                    ".MuiInputBase-root": {
                      backgroundColor: "grey",
                      opacity: "0.5",
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  placeholder="E-mail"
                  label="E-mail *"
                  variant="outlined"
                  size="medium"
                  name="email"
                  fullWidth
                  helperText={
                    hasError("email") ? formState.errors.email[0] : null
                  }
                  error={hasError("email")}
                  onChange={handleChange}
                  type="email"
                  value={formState.values.email || ""}
                  sx={{
                    ".MuiFormLabel-root": {
                      color: "white",
                    },
                    ".MuiInputBase-root": {
                      backgroundColor: "grey",
                      opacity: "0.5",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  placeholder=""
                  label="Message *"
                  variant="outlined"
                  size="medium"
                  name="message"
                  id="message"
                  multiline
                  fullWidth
                  helperText={
                    hasError("message") ? formState.errors.message[0] : null
                  }
                  error={hasError("message")}
                  onChange={handleChange}
                  type="text"
                  value={formState.values.message || ""}
                  sx={{
                    ".MuiFormLabel-root": {
                      color: "white",
                    },
                    ".MuiInputBase-root": {
                      backgroundColor: "grey",
                      opacity: "0.5",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  size="large"
                  variant="contained"
                  type="submit"
                  color="primary"
                  disabled={!formState.isValid}
                  className="btn"
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
export default Contact;
