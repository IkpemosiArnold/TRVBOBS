import Pnavbar from "./Pnavbar";
import Aboutbody from "./Aboutbody";
import Pfooter from "./Pfooter";
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
    <div ref={el}>
      <div id="gallery" className="starry-bg">
        <Pnavbar />
        <Gallerybody />
        <Pfooter />
      </div>
    </div>
  );
}
export default Gallery;
