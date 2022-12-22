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
    let gallery = document.getElementById("gallery");

    gallery.addEventListener("click", function (e) {
      var pulse = document.createElement("div");
      pulse.classList.add("pulse");
      pulse.style.top = e.pageY + "px";
      pulse.style.left = e.pageX + "px";
      gallery.appendChild(pulse);
    });

    gallery.addEventListener("touchstart", function (e) {
      var pulse = document.createElement("div");
      pulse.classList.add("pulse");
      pulse.style.top = e.pageY + "px";
      pulse.style.left = e.pageX + "px";
      gallery.appendChild(pulse);
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
        <Pnavbar />
        <Gallerybody />
      </div>
    </motion.div>
  );
}
export default Gallery;
