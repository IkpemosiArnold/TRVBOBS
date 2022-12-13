import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function toggleNext(hideQuestion, showQuestion) {
  if (hideQuestion.classList.contains("hide-question")) {
  } else {
    hideQuestion.classList.add("hide-question");
    showQuestion.classList.remove("hide-question");
  }
}
function toggleLast(showQuestion) {
  showQuestion.classList.remove("hide-question");
}
function Servicebody() {
  useEffect(() => {
    let sv1 = document.getElementById("sv-1");
    let sv2 = document.getElementById("sv-2");
    let sv3 = document.getElementById("sv-3");
    let sv4 = document.getElementById("sv-4");
    let sv5 = document.getElementById("sv-5");
    let sv6 = document.getElementById("sv-6");
    let sv7 = document.getElementById("sv-7");
    let sv8 = document.getElementById("sv-8");
    let svfooter = document.getElementById("sv-footer");

    let svn1 = document.getElementById("sv-next-1");
    let svn2 = document.getElementById("sv-next-2");
    let svn3 = document.getElementById("sv-next-3");
    let svn4 = document.getElementById("sv-next-4");
    let svn5 = document.getElementById("sv-next-5");
    let svn6 = document.getElementById("sv-next-6");
    let svn7 = document.getElementById("sv-next-7");

    svn1.addEventListener("click", (e) => {
      e.preventDefault();
      toggleNext(sv1, sv2);
    });
    svn2.addEventListener("click", (e) => {
      e.preventDefault();
      toggleNext(sv2, sv3);
    });
    svn3.addEventListener("click", (e) => {
      e.preventDefault();
      toggleNext(sv3, sv4);
    });
    svn4.addEventListener("click", (e) => {
      e.preventDefault();
      toggleNext(sv4, sv5);
    });
    svn5.addEventListener("click", (e) => {
      e.preventDefault();
      toggleNext(sv5, sv6);
    });
    svn6.addEventListener("click", (e) => {
      e.preventDefault();
      toggleNext(sv6, sv7);
    });
    svn7.addEventListener("click", (e) => {
      e.preventDefault();
      toggleNext(sv7, sv8);
      toggleLast(svfooter);
    });
  }, []); //
  return (
    <div className="service-body">
      <div id="sv-1" className="big-body-text sv-slide">
        <p className="">
          Are you ready to take your business to the next level?
          <br />
          We can help!
        </p>
        <p id="sv-next-1" className="sv-next green-text text-right">
          {">"}
        </p>
      </div>

      <div
        id="sv-2"
        className="big-body-text sv-slide text-right hide-question"
      >
        <p className="green-text">How?</p>
        <p id="sv-next-2" className="sv-next green-text text-right">
          {">"}
        </p>
      </div>
      <div
        id="sv-3"
        className="big-body-text sv-slide text-right hide-question"
      >
        <p className="green-text">
          We offer a suite of services designed to deliver undeniable
          improvement for our customers.
        </p>
        <p id="sv-next-3" className="sv-next green-text text-right">
          {">"}
        </p>
      </div>
      <div id="sv-4" className="big-body-text sv-slide hide-question">
        <p className="green-text">
          Our website development services provide your businesses with
          beautiful online presence they can be proud of.
        </p>
        <div className="align-right">
          <p className="small-section">
            We offer custom designs that are tailored to your business, and our
            team of experienced professionals ensures that your website is
            user-friendly, engaging, and optimized for search engines.
          </p>
        </div>

        <p id="sv-next-4" className="sv-next green-text text-right">
          {">"}
        </p>
      </div>
      <div
        id="sv-5"
        className="big-body-text sv-slide text-right hide-question"
      >
        <p className="green-text">
          Web application development services help you automate and streamline
          your processes, saving time, energy, and money.
        </p>
        <div className="align-right">
          <p className="small-section">
            With <span className="green-text">TheRadar</span>, you can create
            custom web applications that meet your unique business needs, and
            our team provides ongoing support and maintenance to ensure that
            your applications are always running smoothly.
          </p>
        </div>
        <p id="sv-next-5" className="sv-next green-text text-right">
          {">"}
        </p>
      </div>
      <div id="sv-6" className="big-body-text sv-slide hide-question">
        <p className="green-text">
          Mobile app development services to help you reach more customers and
          provide them with a seamless user experience on the go.
        </p>
        <div className="align-left">
          <p className="small-section">
            We offer custom designs and features that are tailored to your
            business, and our team ensures that your mobile app is
            user-friendly, engaging, and optimized for all devices.
          </p>
        </div>
        <p id="sv-next-6" className="sv-next green-text text-right">
          {">"}
        </p>
      </div>
      <div id="sv-7" className="big-body-text sv-slide hide-question">
        <p className="text-right green-text">
          Whether you need help with branding, security, or anything in between,
        </p>
        <p className="text-right">
          <span className=" green-text">TheRadar</span> has you covered.
        </p>

        <div className="align-left">
          <p className="small-section">
            In addition to our core services, we also offer a range of support
            services, including graphics design and branding, application
            security consultation, and discovery enhancement services.
          </p>
        </div>
        <p id="sv-next-7" className="sv-next green-text text-right">
          {">"}
        </p>
      </div>
      <div id="sv-8" className="big-body-text sv-slide hide-question">
        <ul className="services-list">
          <li className="green-text">Website development</li>
          <li>Web application development</li>
          <li className="green-text">Mobile app development</li>
          <li>Graphics design and branding</li>
          <li className="green-text">Application security consultation</li>
          <li>Business process automation</li>
          <li className="green-text">Discovery enhancement services</li>
          <li>Content writing/development </li>
          <li className="green-text">Social media management and marketing</li>
        </ul>
      </div>

      <footer id="sv-footer" className="pages-footer hide-question">
        <Link to="/contact">
          <div className="contact-us">
            <p>Reach out</p>
          </div>
        </Link>
      </footer>
    </div>
  );
}

export default Servicebody;
