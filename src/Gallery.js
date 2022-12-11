import Pnavbar from "./Pnavbar";
import Gallerybody from "./Gallerybody";
import React, { useEffect, useRef } from "react";
import radarSvg from "./The_Radar_main_white_notext.svg";
import { gsap } from "gsap";
import { motion } from "framer-motion";

function Gallery() {
  const el = useRef();
  const tl = useRef();
  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(".logo-bg", {
      x: "100vw",
      duration: 20,
      repeat: -1,
      yoyo: true,
    });
    let tk = gsap.timeline();
    tk.to(".logo-bg", {
      rotation: 360,
      duration: 20,
      transformOrigin: "center",
      repeat: -1,
      ease: "Linear.easeNone",
      yoyo: true,
    });
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
      <div id="gallery">
        <div id="logo-canvas">
          <img className="logo-bg" src={radarSvg} alt="TheRadar Logo" />
        </div>
        <Pnavbar />
        <Gallerybody />
      </div>
    </motion.div>
  );
}
export default Gallery;
