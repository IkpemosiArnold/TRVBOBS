import moonman from "./moonman.png";
function Servicebody() {
  return (
    <div id="servicebody">
      <div className="services-header">
        <p>
          Our tech solutions put you on{" "}
          <span className="green-text">The Map.</span>
        </p>
      </div>

      <div id="marquee">
        <p id="marquee-content">
          {" "}
          Website development{" "}
          <img
            className="marquee-img"
            alt="Man on the moon"
            src={moonman}
          />{" "}
          Graphics Design and Branding{" "}
          <img className="marquee-img" alt="Man on the moon" src={moonman} />{" "}
          Business Process Automation{" "}
          <img className="marquee-img" alt="Man on the moon" src={moonman} />{" "}
          Application Security and Consultation{" "}
          <img className="marquee-img" alt="Man on the moon" src={moonman} />{" "}
          Mobile App Development{" "}
          <img className="marquee-img" alt="Man on the moon" src={moonman} />{" "}
          Web Application Development{" "}
          <img className="marquee-img" alt="Man on the moon" src={moonman} />{" "}
          Discovery Enhancement Services{" "}
          <img className="marquee-img" alt="Man on the moon" src={moonman} />{" "}
          Content Writing/Development{" "}
          <img className="marquee-img" alt="Man on the moon" src={moonman} />{" "}
        </p>
      </div>
      <button className="btn">Get a quote</button>
    </div>
  );
}

export default Servicebody;
