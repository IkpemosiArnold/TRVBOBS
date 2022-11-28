import React, { useEffect, useRef } from "react";
import client1 from "./client1.png";
import client2 from "./client2.png";
import radarLogo from "./beambase.png";
import { gsap } from "gsap";

function Gallerybody() {
  useEffect(() => {
    let imageBox = document.getElementById("image-box");
    let beam = document.getElementById("beam-base");

    beam.addEventListener("click", () => {
      console.log("Clicked");

      gsap
        .timeline()
        .to("#image-box", {
          x: "-100vw",
          ease: "expo.out",
          opacity: 0,
          duration: 1,
        })
        .set("#image-box", {
          x: "100vw",
          attr: { src: client2 },
        })
        .to("#image-box", {
          x: "0",
          opacity: 1,
          ease: "expo.in",
          duration: 1,
        });
    });
  }, []);
  return (
    <>
      <div className="gallery-center">
        <div className="image-boxes">
          <img id="image-box" src={client1} />
        </div>
        <img src={radarLogo} alt="TheRadar Logo" id="beam-base" />
      </div>
    </>
  );
}

export default Gallerybody;
