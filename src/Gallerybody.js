import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client1 from "./client1.png";
import client1_2 from "./client1-1.png";
import client1_3 from "./C1 (1).png";
import client1_4 from "./C1 (2).png";
import client1_5 from "./C1 (3).png";
import client1_6 from "./C1 (4).png";
import client1_7 from "./C1 (5).png";
import client1_8 from "./C1 (6).png";
import client1_9 from "./C1 (7).png";
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

let c1Array = [
  client1,
  client1_2,
  client1_3,
  client1_4,
  client1_5,
  client1_6,
  client1_7,
  client1_8,
  client1_9,
];

let i = 0;

let itemList = [];
c1Array.forEach((index) => {
  itemList.push(<li key={index} className="c1-active"></li>);
});

function toggleClass(element) {
  element.classList.add("hide-question");
}

function Gallerybody() {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [zoomer, setZoomer] = useState(false);
  useEffect(() => {
    let c1acv = document.getElementsByClassName("c1-active");
    c1acv[0].style.backgroundColor = "#fff";
  }, []);

  const handleStateChange = () => {
    let c1 = document.getElementById("c1");
    let c1Info = document.getElementById("c1-info");
    let c1active = document.getElementsByClassName("c1-active");

    c1Info.style.opacity = 0;
    i++;
    if (i < c1Array.length) {
      c1.style.opacity = 0;
      c1.src = c1Array[i];
      c1.style.opacity = 1;
      for (let index = 0; index < c1active.length; index++) {
        c1active[index].style.backgroundColor = "#3f3a3a";
      }
      c1active[i].style.backgroundColor = "#fff";
    } else {
      c1.style.opacity = 0;
      c1.src = c1Array[0];
      c1.style.opacity = 1;
      for (let index = 0; index < c1active.length; index++) {
        c1active[index].style.backgroundColor = "#3f3a3a";
      }
      i = 0;
      c1active[i].style.backgroundColor = "#fff";
    }
  };

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
          <div className="project-info" id="c1-info">
            <h1>Vala films</h1>
            <h4>Website Design and Development</h4>
          </div>

          <p id="ll-1" className="uppercase live-link">
            <a
              href="https://www.valafilms.com"
              target={"_blank"}
              rel="noreferrer"
            >
              Visit Site
            </a>
          </p>
          <ul className="active-imgs">{itemList}</ul>
        </div>

        <div id="project-three" className="project-box">
          <Link to="/contact">
            <h3>Add your Project here</h3>
          </Link>
        </div>
      </Slider>
    </>
  );
}

export default Gallerybody;
