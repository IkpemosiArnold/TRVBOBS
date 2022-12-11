import React, { useEffect, useRef } from "react";
import client1 from "./client1.png";
import client2 from "./client2.png";
import radarLogo from "./beambase.png";
import { gsap } from "gsap";

let imgArray = [client1, client2];

function Gallerybody() {
  useEffect(() => {}, []);
  return (
    <>
      <div className="gallery-center">
        <div className="image-boxes">
          <h1>Projects</h1>
          <img id="image-box" src={client1} alt="client-site" />
          <img id="image-box" src={client2} alt="client-site" />
          <img id="image-box" src={client2} alt="client-site" />
        </div>
      </div>
    </>
  );
}

export default Gallerybody;
