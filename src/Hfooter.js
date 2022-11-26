import "./style.css";
import React, { useRef, useEffect } from "react";
import useInterval from "use-interval";

let current_hourNG;
let current_minuteNG;
let current_hourLA;
let current_minuteLA;

function updateTime(watHour, watMinute, pdtHour, pdtMinute) {
  let date = new Date();
  let date2 = new Date();
  let timeNG = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    timeZone: "Africa/Lagos",
  }).format(date);
  let timeLA = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    timeZone: "America/Los_Angeles",
  }).format(date2);
  current_hourNG = timeNG.split(":")[0];
  current_minuteNG = timeNG.split(":")[1];
  watHour.innerHTML = current_hourNG;
  watMinute.innerHTML = current_minuteNG;
  current_hourLA = timeLA.split(":")[0];
  current_minuteLA = timeLA.split(":")[1];
  pdtHour.innerHTML = current_hourLA;
  pdtMinute.innerHTML = current_minuteLA;
}

function Hfooter() {
  useInterval(() => {
    let watHour = document.querySelector(".watHour");
    let watMinute = document.querySelector(".watMinute");
    let pdtHour = document.querySelector(".pdtHour");
    let pdtMinute = document.querySelector(".pdtMinute");
    updateTime(watHour, watMinute, pdtHour, pdtMinute);
  }, 1000); // passing null instead of 1000 will cancel the interval if it is already running
  return (
    <footer className="footerSection">
      <div className="currentTimes">
        <p>
          <span className="watHour"></span>
          <span className="flash">:</span>
          <span className="watMinute"></span> WAT
        </p>
        <p>
          <span className="pdtHour"></span>
          <span className="flash">:</span>
          <span className="pdtMinute"></span> PDT
        </p>
      </div>
      <div className="notice">
        <p>
          EXPLORE WITH YOUR MOUSE OR CLICK ON THE RADAR TO FIND YOUR NEXT STOP
        </p>
      </div>
    </footer>
  );
}
export default Hfooter;
