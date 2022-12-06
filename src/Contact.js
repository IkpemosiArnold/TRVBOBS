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
function toggleQuestion(hideQuestion, showQuestion) {
  if (hideQuestion.classList.contains("hide-question")) {
  } else {
    hideQuestion.classList.add("hide-question");
    showQuestion.classList.remove("hide-question");
  }
}
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
    let q1 = document.getElementById("q1");
    let q2 = document.getElementById("q2");
    let q3 = document.getElementById("q3");

    let n1 = document.getElementById("next-1");
    let n2 = document.getElementById("next-2");

    let p1 = document.getElementById("prev-1");
    let p2 = document.getElementById("prev-2");

    n1.addEventListener("click", (e) => {
      e.preventDefault();
      toggleQuestion(q1, q2);
    });
    n2.addEventListener("click", (e) => {
      e.preventDefault();
      toggleQuestion(q2, q3);
    });
    p1.addEventListener("click", (e) => {
      e.preventDefault();
      toggleQuestion(q2, q1);
    });
    p2.addEventListener("click", (e) => {
      e.preventDefault();
      toggleQuestion(q3, q2);
    });

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
        <div className="contact-form">
          <form
            headers="application/json"
            name="contact-form"
            onSubmit={sendEmail}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" align="center">
                  <strong>
                    Hi there. TheRadar would love to know more about you.
                  </strong>
                </Typography>
              </Grid>
              <Grid item xs={12} id="q1">
                <span className="call-out">What's your name ?</span>

                <TextField
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
                <div className="form-buttons">
                  <button className="form-btn" id="next-1">
                    Next
                  </button>
                </div>
              </Grid>

              <Grid item xs={12} className="hide-question question" id="q2">
                <span className="call-out">
                  An email we may get back to you on ?
                </span>
                <TextField
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
                <div className="form-buttons">
                  <button className="form-btn " id="prev-1">
                    Previous
                  </button>
                  <button className="form-btn" id="next-2">
                    Next
                  </button>
                </div>
              </Grid>
              <Grid item xs={12} className="hide-question question" id="q3">
                <span className="call-out">
                  Thanks for letting us know. Now, how would you like TheRadar
                  to help you?
                </span>
                <TextField
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
                <div className="form-buttons">
                  <button className="form-btn" id="prev-2">
                    Previous
                  </button>
                </div>
              </Grid>
              <Grid
                item
                xs
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  size="large"
                  variant="contained"
                  type="submit"
                  color="primary"
                  disabled={!formState.isValid}
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
