import Pnavbar from "./Pnavbar";
import Gallerybody from "./Gallerybody";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

function Gallery() {
  const el = useRef();
  const tl = useRef();
  useEffect(() => {
    let html = document.getElementsByTagName("html");
    if (html[0].classList.contains("overflox-hidden")) {
    } else {
      html[0].classList.add("overflow-hidden");
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
      <div id="gallery" className="starry-bg">
        <Pnavbar />
        <Gallerybody />
      </div>
    </motion.div>
  );
}
export default Gallery;
