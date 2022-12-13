import "./style.css";
import ig from "./instagram.svg";
import emailicon from "./emailicon.svg";
import hamburger from "./hamburger.png";
import { Link } from "react-router-dom";
import React from "react";

function Pnavbar() {
  return (
    <nav className="nav sticky-header">
      <div className="go-back">
        <Link to="/menu">
          <img alt="nav-logo" src={hamburger} className="ig-logo" />
        </Link>
      </div>
      <img alt="instagram-logo" src={ig} className="ig-logo" />

      <Link to="/contact">
        <img alt="email icon" src={emailicon} className="ig-logo" />
      </Link>
    </nav>
  );
}

export default Pnavbar;
