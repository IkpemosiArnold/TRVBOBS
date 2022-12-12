import React, { useEffect, useRef } from "react";
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
  useEffect(() => {
    let projectscontainer = document.getElementById("projects-container");
    let imgbox1 = document.getElementById("img-box-1");
    let imgbox2 = document.getElementById("img-box-2");
    let project1 = document.getElementById("project-one");
    let ll1 = document.getElementById("ll-1");
    let clientreview = document.getElementById("client-review");
    let projectname = document.getElementById("project-name");

    projectscontainer.addEventListener("click", () => {
      let projects = document.getElementsByClassName("project-box");
      let imgboxs = document.getElementsByClassName("image-box");
      for (const project of projects) {
        project.style.display = "none";
      }
      for (const box of imgboxs) {
        box.style.display = "inline-flex";
      }
    });

    project1.addEventListener("mouseenter", () => {
      project1.style.opacity = 0.8;
      ll1.style.opacity = 1;
      clientreview.style.opacity = 1;
      projectname.style.opacity = 1;
    });
    project1.addEventListener("mouseleave", () => {
      ll1.style.opacity = 0;
      clientreview.style.opacity = 0;
      projectname.style.opacity = 0;
      project1.style.opacity = 1;
    });
  }, []);
  
  
  
  /** New code I wrote starts here... try this and let's see if it works */
  const handleStateChange = () => {
    setOpen(true);
  }
  
  const toggler = (open) => {
    const div = document.querySelector(".image-box");

     // check if open is true then change class here
    if(open){
      div.classList.add("class to hide");
    }else{
      div.classList.remove("class to hide");
    }
     
  }
  
  useEffect(()=>{
    toggler(open);
  }, [open])
  
  return (
    <>
      <div id="projects-container" className="gallery-center">
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
          <p className="clientname">Vala Films</p>
        </div>

        <div
          id="img-box-2"
          className="image-box"
          style={{
            backgroundImage: `url(${imgArray[1]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <p className="clientname">TheRadar</p>
        </div>
        <div className="image-box">
          <p className="clientname">Add your project here</p>
        </div>
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
