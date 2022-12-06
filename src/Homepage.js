import Hnavbar from "./Hnavbar";
import Homemain from "./Homemain";
import Hfooter from "./Hfooter";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import "./style.css";

function Homepage() {
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
      <main id="home-menu" className="starry-bg">
        <Hnavbar />
        <Homemain />
        <Hfooter />
      </main>
    </motion.div>
  );
}

export default Homepage;
