import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  autoplay: true,
  autoPlaySpeed: 10000,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 4000,
  arrows: false,
  pauseOnHover: true,
  swipeToSlide: true,
  Draggable: true,
};

const Aboutslider = () => {
  return (
    <Slider {...settings} className="slide-area">
      <div className="big-body-text body-center text-center">
        <p>
          <span className="green-text">TheRadar?</span>
        </p>
      </div>

      <div className="big-body-text body-center">
        <p>
          We are a Digital Transformation agency.
          <br />
          We help businesses build amazing applications and experiences online
          <br />
          We automate business processes. Who said you can't relax and make
          money.
        </p>
      </div>
      <div className="big-body-text body-center">
        <p>
          <span className="green-text">TheRadar</span> upgrades your business
          till customers can't help but notice.
        </p>
      </div>
      <div className="big-body-text body-center text-right">
        <p>
          We Herald <span className="green-text">TheFuture</span> of your
          business.
          <br />
          <Link to="/services">
            <span className="green-text">Learn more about what we do. </span>
          </Link>
        </p>
      </div>
    </Slider>
  );
};

export default Aboutslider;
