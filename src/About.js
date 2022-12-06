import Pnavbar from "./Pnavbar";
import Aboutslider from "./Aboutslider";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

function About() {
  const et = useRef();
  const tt = useRef();
  useEffect(() => {
    const cxt = gsap.context(() => {
      tt.current = gsap.timeline({ repeat: -1 }).to(".starry-bg", {
        backgroundPosition: "-600px 0px",
        ease: "Linear.easeNone",
        duration: 50,
      });
    }, et);
  }, []); //
  return (
    <motion.div
      ref={et}
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, type: "tween", ease: "linear" }}
    >
      <section id="about-us" className="starry-bg">
        <Pnavbar />
        <Aboutslider />
      </section>
    </motion.div>
  );
}

export default About;
