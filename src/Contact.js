import Pnavbar from "./Pnavbar";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Typography, Grid, Button, TextField } from "@mui/material";
import emailjs from "emailjs-com";
import validate from "validate.js";
const PUBLIC_KEY = "_O76ZlQ0wx24Gvbh9";
const TEMPLATE_ID = "template_x1cmt9p";
const SERVICE_ID = "service_fj3fk8k";

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
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((res) => {
        console.log("SUCCESS!", res.status, res.text);
        let success = document.getElementById("success-message");
        let container = document.getElementById("contact-container");
        toggleQuestion(container, success);
      })
      .catch((error) => {
        console.log("FAILED...", error);
        let failure = document.getElementById("failure-message");
        let container = document.getElementById("contact-container");
        toggleQuestion(container, failure);
      });

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
        <div className="contact-form" id="contact-container">
          <form
            headers="application/json"
            name="contact-form"
            onSubmit={sendEmail}
          >
            <Grid container spacing={5}>
              <Grid
                item
                xs={12}
                sx={{
                  ".MuiTypography-root": {
                    fontFamily: "Jost, sans-serif",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  align="center"
                  className="green-text uppercase"
                >
                  <strong>Hi there! We'd love to help.</strong>
                </Typography>
              </Grid>
              <Grid item xs={12} id="q1">
                <p className="call-out contact-text">What's your name ?</p>

                <TextField
                  placeholder="ENTER YOUR NAME"
                  variant="standard"
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
                    paddingLeft: "5vw",
                    paddingRight: "5vw",
                    ".MuiFormLabel-root": {
                      color: "white",
                    },
                    ".MuiInputBase-root": {
                      backgroundColor: "transparent",
                      color: "white",
                    },
                    ".MuiInputBase-input": {
                      textAlign: "center !important",
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
                <p className="call-out contact-text">
                  Kindly give us an email we could use to contact you
                </p>
                <TextField
                  placeholder="ENTER YOUR EMAIL"
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
                    paddingLeft: "5vw",
                    paddingRight: "5vw",
                    ".MuiFormLabel-root": {
                      color: "white",
                    },
                    ".MuiInputBase-root": {
                      backgroundColor: "transparent",
                      color: "white",
                    },
                    ".MuiInputBase-input": {
                      textAlign: "center !important",
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
                <p className="call-out contact-text">
                  Thanks for letting us know. Now, how would you like TheRadar
                  to help you?
                </p>
                <TextField
                  placeholder="ENTER YOUR MESSAGE"
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
                    paddingLeft: "5vw",
                    paddingRight: "5vw",
                    ".MuiFormLabel-root": {
                      color: "white",
                    },
                    ".MuiInputBase-root": {
                      backgroundColor: "transparent",
                      color: "white",
                    },
                    ".MuiInputBase-input": {
                      textAlign: "center !important",
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
                  color="success"
                  disabled={!formState.isValid}
                  sx={{
                    ".MuiButtonBase-root": {
                      backgroundColor: "#42ff00",
                      color: "#000000",
                    },
                  }}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
        <p
          id="success-message"
          className="call-out contact-text green-text hide-question"
        >
          Thank you for reaching out to us, we'll get back to you as soon as we
          get your message.
          <br />
          While you wait, take a look at some of our work{" "}
          <span className="underline">
            <Link to="/gallery">here</Link>
          </span>
        </p>
        <p
          id="failure-message"
          className="call-out contact-text red-text hide-question"
        >
          Something went wrong, Please refresh the page and try again.
        </p>
      </div>
    </motion.div>
  );
}
export default Contact;
