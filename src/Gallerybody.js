import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client1 from "./client1.png";
import client1m from "./client1-1.png";
import client2 from "./client2.png";
import { gsap } from "gsap";

let imgArray = [client1, client2];

function toggleClass(element) {
  element.classList.add("hide-question");
}

function Gallerybody() {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [zoomer, setZoomer] = useState(false);
  useEffect(() => {
    let projectscontainer = document.getElementById("projects-container");
    let project1 = document.getElementById("project-one");
    let project2 = document.getElementById("project-two");
    let ll1 = document.getElementById("ll-1");
    let ll2 = document.getElementById("ll-2");
    let clientreview = document.getElementById("client-review");
    let projectname = document.getElementById("project-name");

    /* projectscontainer.addEventListener("click", () => {
      let projects = document.getElementsByClassName("project-box");
      let imgboxs = document.getElementsByClassName("image-box");
      for (const project of projects) {
        project.style.display = "none";
      }
      for (const box of imgboxs) {
        box.style.display = "inline-flex";
      }
    });*/

    project1.addEventListener("mouseenter", () => {
      project1.style.opacity = 0.8;
      ll1.style.opacity = 1;
      clientreview.style.opacity = 1;
    });
    project1.addEventListener("mouseleave", () => {
      ll1.style.opacity = 0;
      clientreview.style.opacity = 0;
      project1.style.opacity = 1;
    });

    project2.addEventListener("mouseenter", () => {
      project2.style.opacity = 0.8;
      ll2.style.opacity = 1;
      clientreview.style.opacity = 1;
    });
    project2.addEventListener("mouseleave", () => {
      ll2.style.opacity = 0;
      clientreview.style.opacity = 0;
      project2.style.opacity = 1;
    });
  }, []);

  /** New code I wrote starts here... try this and let's see if it works */
  const handleStateChange = (event) => {
    let clientreview = document.getElementById("client-review");
    let projectname = document.getElementById("project-name");
    if (event.currentTarget.classList.contains("image-box")) {
      setOpen(true);
      if (event.currentTarget.id == "img-box-1") {
        projectname.innerText = "ValaFilms";
        clientreview.innerText = "Loved every bit of it - Chav";
        setZoom(true);
      }
      if (event.currentTarget.id == "img-box-2") {
        projectname.innerText = "TheRadar";
        clientreview.innerText = "Good work.";
        setZoomer(true);
      }
    } else {
      setOpen(false);
      setZoom(false);
      setZoomer(false);
      projectname.innerText = "";
      clientreview.innerText = "";
    }
  };

  const toggler = (open) => {
    const boxes = document.querySelectorAll(".image-box");

    // check if open is true then change class here
    if (open) {
      for (const box of boxes) {
        box.classList.add("hide-box");
      }
    } else {
      for (const box of boxes) {
        box.classList.remove("hide-box");
      }
    }
  };
  const opener = (zoom) => {
    const project1 = document.querySelectorAll(".project-box")[0];

    // check if open is true then change class here
    if (zoom) {
      project1.classList.remove("hide-box");
    } else {
      project1.classList.add("hide-box");
    }
  };
  const looker = (zoomer) => {
    const project2 = document.querySelectorAll(".project-box")[1];

    // check if open is true then change class here
    if (zoomer) {
      project2.classList.remove("hide-box");
    } else {
      project2.classList.add("hide-box");
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
      <div
        id="projects-container"
        onClickCapture={handleStateChange}
        className="gallery-center"
      >
        <div className="gallery-header">
          <h1>Projects</h1>
          <p id="project-name" className="uppercase"></p>
          <p id="client-review"></p>
        </div>
        {/** this div can actually have event listeners on them and they can call a function*/}
        <div
          id="img-box-1"
          onClick={handleStateChange}
          className="image-box"
          style={{
            backgroundImage: `url(${imgArray[0]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <p className="clientname green-text">Vala Films</p>
        </div>

        <div
          id="img-box-2"
          onClick={handleStateChange}
          className="image-box"
          style={{
            backgroundImage: `url(${imgArray[1]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <p className="clientname green-text">TheRadar</p>
        </div>
        <Link to="/contact">
          <div className="image-box">
            <p className="clientname">Add your project here</p>
          </div>
        </Link>
        <div
          id="project-one"
          className="project-box"
          style={{
            backgroundImage: `url(${client1m})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <p id="ll-1" className="uppercase live-link">
            Visit Site
          </p>
        </div>
        <div
          id="project-two"
          className="project-box"
          style={{
            backgroundImage: `url(${client2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <p id="ll-2" className="uppercase live-link">
            Visit Site
          </p>
        </div>
      </div>
    </>
  );
}

export default Gallerybody;
