import Hnavbar from "./Hnavbar";
import Homemain from "./Homemain";
import Hfooter from "./Hfooter";
import Overlay from "./Overlay";
import React, { useEffect, useRef } from "react";
import eAudio from "./entranceAudio.mp3";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import "./style.css";
const entranceAudio = new Audio(eAudio);

function hideGeneral(element) {
  element.classList.add("delete");
}
function Homepage() {
  const el = useRef();
  const tl = useRef();

  useEffect(() => {
    let html = document.getElementsByTagName("html");
    let enterButton = document.getElementById("enter-button");

    html[0].classList.add("overflow-hidden");

    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ repeat: -1 }).to(".starry-bg", {
        backgroundPosition: "-600px 0px",
        ease: "Linear.easeNone",
        duration: 50,
      });
    }, el);

    enterButton.addEventListener("click", () => {
      entranceAudio.play();
      gsap.to(".overlay", 10, {
        delay: 1.3,
        top: "-100%",
        y: -60,
        ease: "expo.out",
      });
    });
  }, []); //
  useEffect(() => {
    let overlay = document.querySelector(".overlay");
    return () => {
      hideGeneral(overlay);
    };
  });

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
      <main id="home-menu" className="starry-bg">
        <Overlay />
        <Hnavbar />
        <Homemain />
        <Hfooter />
      </main>
    </motion.div>
  );
}

export default Homepage;
