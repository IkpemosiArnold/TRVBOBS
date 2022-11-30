import Pnavbar from "./Pnavbar";
import Servicebody from "./Servicesbody";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

function Services() {
  const el = useRef();
  const tl = useRef();
  useEffect(() => {
    let html = document.getElementsByTagName("html");
    if (html[0].classList.contains("overflow-hidden")) {
      html[0].classList.remove("overflow-hidden");
      if (html[0].classList.contains("overflow-x-hidden")) {
      }
    } else if (!html[0].classList.contains("overflow-x-hidden")) {
      html[0].classList.add("overflow-x-hidden");
    }

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
        scale: 0.5,
      }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, type: "tween", ease: "linear" }}
    >
      <div id="services" className="starry-bg">
        <Pnavbar />
        <Servicebody />
      </div>
    </motion.div>
  );
}
export default Services;
