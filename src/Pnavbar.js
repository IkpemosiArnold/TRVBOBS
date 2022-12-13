import "./style.css";
import navLogo from "./nav-logo.png";
import ig from "./instagram.svg";
import emailicon from "./emailicon.svg";
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
function Pnavbar() {
  const el = useRef();
  const tl = useRef();

  return (
    <nav className="nav sticky-header">
      <img alt="instagram-logo" src={ig} className="ig-logo" />
      <div className="go-back" ref={el}>
        <Link to="/menu">
          <img alt="nav-logo" src={navLogo} className="nav-logo" />
        </Link>
      </div>
      <Link to="/contact">
        <img alt="email icon" src={emailicon} className="ig-logo" />
      </Link>
    </nav>
  );
}

export default Pnavbar;
