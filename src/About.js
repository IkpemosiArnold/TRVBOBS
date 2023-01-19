import Pnavbar from "./Pnavbar";
import radarSvg from "./The_Radar_main_white_notext.svg";
import Aboutslider from "./Aboutslider";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import eAudio from "./entranceAudio.mp3";
const entranceAudio = new Audio(eAudio);
let firstLoad = 0;

function hideGeneral(element) {
  element.classList.add("delete");
}

function About() {
  const et = useRef();
  const tt = useRef();
  useEffect(() => {
    let enterButton = document.getElementById("enter-button");
    let overlay = document.getElementsByClassName("overlay")[0];
    if (firstLoad == 1) {
      hideGeneral(overlay);
    }

    let index = 0;
    const languages = [
      "Welcome",
      "Bienvenido",
      "Bienvenue",
      "Willkommen",
      "ようこそ",
      "Benvenuto",
      "Ẹ Káàbọ̀",
      "Ndewo",
      "Barka da zuwa",
      "🥺"
    ];

    overlay.addEventListener("click", () => {
      index = (index + 1) % languages.length;
      enterButton.innerHTML = languages[index];
    });

    overlay.addEventListener("click", function (e) {
      var pulse = document.createElement("div");
      pulse.classList.add("pulse");
      pulse.style.top = e.pageY + "px";
      pulse.style.left = e.pageX + "px";
      overlay.appendChild(pulse);
    });

    overlay.addEventListener("touchstart", function (e) {
      var pulse = document.createElement("div");
      pulse.classList.add("pulse");
      pulse.style.top = e.pageY + "px";
      pulse.style.left = e.pageX + "px";
      overlay.appendChild(pulse);
    });
    /*  
    let mainCircle = document.getElementById("middle-circle");
    let main = document.querySelector("#root");
    */
    enterButton.addEventListener("click", () => {
      entranceAudio.play();
      gsap.to(".overlay", 10, {
        delay: 1.3,
        top: "-100%",
        y: -60,
        ease: "expo.out",
      });
      firstLoad = 1;
    });

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
      ref={et}
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, type: "tween", ease: "linear" }}
    >
      <div className="overlay">
        <h2 id="enter-button">Welcome</h2>
      </div>
      <section id="about-us">
        <div id="logo-canvas">
          <img className="logo-bg" src={radarSvg} alt="TheRadar Logo" />
          <img className="about-bg-img-1" src={radarCity} />
        </div>
        <Pnavbar />
        <Aboutslider />
      </section>
    </motion.div>
  );
}

export default About;
