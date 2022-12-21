import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client1 from "./client1.png";
import client1m from "./client1-1.png";
import client2 from "./client2.png";
import { gsap } from "gsap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  accessibility: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 4000,
  arrows: false,
  pauseOnHover: true,
  swipeToSlide: true,
  Draggable: true,
};

let c1Array = [client1, client1m];
let c2Array = [client2];
let i = 0;

function toggleClass(element) {
  element.classList.add("hide-question");
}

function Gallerybody() {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [zoomer, setZoomer] = useState(false);
  useEffect(() => {}, []);

  const handleStateChange = () => {
    let c1 = document.getElementById("c1");
    i++;
    if (i < c1Array.length) {
      c1.src = c1Array[i];
    } else {
      c1.src = c1Array[0];
      i = 0;
      console.log(c1Array);
    }
  };

  const toggler = (open) => {
    // check if open is true then change class here
    if (open) {
    }
  };
  const opener = (zoom) => {
    // check if open is true then change class here
    if (zoom) {
    } else {
    }
  };
  const looker = (zoomer) => {
    // check if open is true then change class here
    if (zoomer) {
    } else {
    }
  };

  useEffect(() => {
    toggler(open);
  }, [open]);

  useEffect(() => {
    opener(zoom);
  }, [zoom]);

  useEffect(() => {
    looker(zoomer);
  }, [zoomer]);

  return (
    <>
      <Slider {...settings} className="img-slider">
        <div
          id="project-one"
          className="project-box"
          onClick={handleStateChange}
        >
          <img
            id="c1"
            className="client-img"
            alt="project-screengrabs"
            src={c1Array[i]}
          />
          <p id="ll-1" className="uppercase live-link">
            <a
              href="https://www.valafilms.com"
              target={"_blank"}
              rel="noreferrer"
            >
              Visit Site
            </a>
          </p>
        </div>
        <div id="project-two" className="project-box">
          <img
            id="c2"
            className="client-img"
            alt="project-screengrabs"
            src={client2}
          />
          <p id="ll-1" className="uppercase live-link">
            <a
              href="https://www.valafilms.com"
              target={"_blank"}
              rel="noreferrer"
            >
              Visit Site
            </a>
          </p>
        </div>
        <div id="project-three" className="project-box">
          <h3>Add your Project here</h3>
        </div>
      </Slider>
    </>
  );
}

export default Gallerybody;
