import Hnavbar from "./Hnavbar";
import Homemain from "./Homemain";
import Hfooter from "./Hfooter";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import "./style.css";

function Menu() {
  const el = useRef();
  const tl = useRef();

  useEffect(() => {
    let menudiv = document.getElementById("home-menu");

    menudiv.addEventListener("click", function (e) {
      var pulse = document.createElement("div");
      pulse.classList.add("pulse");
      pulse.style.top = e.pageY + "px";
      pulse.style.left = e.pageX + "px";
      menudiv.appendChild(pulse);
    });

    menudiv.addEventListener("touchstart", function (e) {
      var pulse = document.createElement("div");
      pulse.classList.add("pulse");
      pulse.style.top = e.pageY + "px";
      pulse.style.left = e.pageX + "px";
      menudiv.appendChild(pulse);
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
      <main id="home-menu" className="starry-bg">
        <Hnavbar />
        <Homemain />
        <Hfooter />
      </main>
    </motion.div>
  );
}

export default Menu;
