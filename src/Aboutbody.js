import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Aboutbody() {
  const el = useRef();
  const tl = useRef();
  const tl2 = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.from(".about-text", {
        duration: 3,
        scrollTrigger: {
          trigger: ".about-second",
          start: "top 50%",
          toggleClass: "view-text",
        },
      });
      tl2.current = gsap.from(".about-text", {
        duration: 3,
        scrollTrigger: {
          trigger: ".about-third",
          start: "top 50%",
          toggleClass: "view-text",
        },
      });
    }, el);
  });
  return (
    <div ref={el}>
      <div className="about-text">
        <div className="big-body-text body-center">
          <p>
            <span className="green-text">TheRadar</span> upgrades your business
            till customers can't help but notice.
            <br />
            We herald <span className="green-text">TheFuture</span> of your
            business.
          </p>
        </div>

        <div className="big-body-text body-center about-second">
          <p>
            What is <span className="green-text">TheRadar</span> ?
          </p>
        </div>
        <div className="big-body-text body-center about-third">
          <p>
            We are a Digital Transformation agency.
            <br />
            We help businesses build amazing applications and experiences online
            (<span className="green-text">did someone say metaverse?</span>)
            <br />
            We automate business processes. Who said you can't relax and make
            money.
            <br /> We polish you till you shine.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutbody;
