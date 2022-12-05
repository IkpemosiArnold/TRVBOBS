import React from "react";
import Slider from "react-slick";
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
      <div className="big-body-text body-center">
        <p>
          <span className="green-text">TheRadar</span> upgrades your business
          till customers can't help but notice.
          <br />
          We herald <span className="green-text">TheFuture</span> of your
          business.
        </p>
      </div>
      <div className="big-body-text body-center">
        <p className="question-small">
          What is <span className="green-text">TheRadar</span> ?
        </p>
      </div>
      <div className="big-body-text body-center">
        <p>
          We are a Digital Transformation agency.
          <br />
          We help businesses build amazing applications and experiences online (
          <span className="green-text">did someone say metaverse?</span>)
          <br />
          We automate business processes. Who said you can't relax and make
          money.
          <br /> We polish you till you shine.
        </p>
      </div>
    </Slider>
  );
};

export default Aboutslider;
