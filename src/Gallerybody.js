import React, { useEffect, useRef } from "react";
import client1 from "./client1.png";
import client2 from "./client2.png";
import radarLogo from "./beambase.png";
import { gsap } from "gsap";

let imgArray = [client1, client2];

function Gallerybody() {
  useEffect(() => {
    let beam = document.getElementById("beam-base");
    let srcNum = 1;
    let imgSrc;

    beam.addEventListener("click", () => {
      if (srcNum === imgArray.length - 1) {
        srcNum = 0;
      } else {
        srcNum = srcNum + 1;
      }
      console.log(srcNum);
      imgSrc = imgArray[srcNum];
      //console.log(imgArray.length);
      gsap
        .timeline()
        .to("#image-box", {
          x: "-50vw",
          ease: "expo.out",
          opacity: 0,
          duration: 1,
        })
        .set("#image-box", {
          x: "50vw",
          attr: { src: imgSrc },
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
          <img id="image-box" src={client1} alt="client-site" />
        </div>
        <img src={radarLogo} alt="TheRadar Logo" id="beam-base" />
      </div>
    </>
  );
}

export default Gallerybody;
