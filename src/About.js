import Pnavbar from "./Pnavbar";
import Aboutbody from "./Aboutbody";
import Pfooter from "./Pfooter";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

function About() {
  const el = useRef();
  const tl = useRef();
  useEffect(() => {
    let html = document.getElementsByTagName("html");
    html[0].classList.add("overflow-x-hidden");
    if (html[0].classList.contains("overflow-hidden")) {
      html[0].classList.remove("overflow-hidden");
    }
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ repeat: -1 }).to(".starry-bg", {
        backgroundPosition: "0x -600px",
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
        backgroundColor: "black",
      }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, backgroundColor: "black" }}
      transition={{ duration: 1, type: "tween", ease: "linear" }}
    >
      <section id="about-us" className="starry-bg">
        <Pnavbar />
        <Aboutbody />
        <Pfooter />
      </section>
    </motion.div>
  );
}

export default About;
