import "./style.css";
import radarSvg from "./The_Radar_main_white_notext.svg";
import Fulllogo from "./Full with text_animated.svg";
import React, { useEffect } from "react";
import rAudio from "./radarAudio.mp3";
import { Link } from "react-router-dom";
import eAudio from "./entranceAudio.mp3";
import { gsap } from "gsap";
let bulb = 0;
let firstLoad = 0;
const radarAudio = new Audio(rAudio);
const entranceAudio = new Audio(eAudio);
function hideGeneral(element) {
  element.classList.add("delete");
}
function hide(element) {
  if (bulb == 1) {
    setTimeout(function () {
      for (let i = 0; i < element.length; i++) {
        element[i].classList.add("hide");
        element[i].classList.remove("show");
      }
    }, 2000);

    bulb = 0;
  }
}

function show(element) {
  for (let i = 0; i < element.length; i++) {
    element[i].classList.add("show");
    if (element[i].classList.contains("hide")) {
      element[i].classList.remove("hide");
    }
  }
  bulb = 1;
}
function Homemain() {
  useEffect(() => {
    let radar = document.getElementById("main-section");
    let menuLinks = document.getElementsByClassName("menu-link");
    let enterButton = document.getElementById("enter-button");
    let overlay = document.getElementsByClassName("overlay");
    if (firstLoad == 1) {
      hideGeneral(overlay[0]);
    }
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

    radar.addEventListener("click", () => {
      radarAudio.play();
      show(menuLinks);
      hide(menuLinks);
    });
  }, []); //
  return (
    <>
      <div className="overlay">
        <div id="-overlay-img-canvas">
          <img id="overlay-img" src={Fulllogo} />
        </div>
        <h2 id="enter-button">Enter</h2>
      </div>
      <section id="main-section">
        <img id="middle-circle" src={radarSvg} className="box" />
        <div className="box stack-top menu-links">
          <div className="wwa-link">
            <Link to="/about">
              <div className="menu-link">
                <p>Who we are</p>
                <div className="circle"></div>
              </div>
            </Link>
          </div>
          <div className="sw-link">
            <Link to="/gallery">
              <div className="menu-link">
                <p>Selected Work</p>
                <div className="circle"></div>
              </div>
            </Link>
          </div>

          <div className="tt-link">
            <Link to="/team">
              <div className="menu-link">
                <p>The team</p>
                <div className="circle"></div>
              </div>
            </Link>
          </div>
          <div className="wwd-link" href="twitter.com">
            <Link to="/services">
              <div className="menu-link">
                <p>What we do</p>
                <div className="circle"></div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homemain;
