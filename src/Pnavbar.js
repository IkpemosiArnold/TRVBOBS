import "./style.css";
import navLogo from "./nav-logo.png";
import ig from "./instagram.svg";
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
function Pnavbar() {
  const el = useRef();
  const tl = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ repeat: -1 }).to(".nav-logo", {
        x: 0,
        y: 0,
        rotation: 360,
        duration: 20,
        ease: "Linear.easeNone",
      });
    }, el);
  });
  return (
    <nav className="nav sticky-header">
      <div className="go-back" ref={el}>
        <Link to="/">
          <img alt="nav-logo" src={navLogo} className="nav-logo" />
          <p className="go-back-text">go back</p>
        </Link>
      </div>

      <img alt="instagram-logo" src={ig} className="ig-logo" />

      <p className="contact-btn">Contact us</p>
    </nav>
  );
}

export default Pnavbar;
