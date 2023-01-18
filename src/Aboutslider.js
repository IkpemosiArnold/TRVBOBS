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
  pauseOnHover: false,
  swipeToSlide: true,
  Draggable: true,
};

const Aboutslider = () => {
  return (
    <Slider {...settings} className="slide-area">
      <div className="big-body-text body-center text-center">
        <p>
          <h3 className="green-text">TheRadar?</h3>
        </p>
      </div>

      <div className="big-body-text body-center">
        <p>
        <span className="green-text">TheRadar</span> is a Digital Transformation agency that specializes 
        <br />in helping businesses build amazing applications, and
        <br />experiences online, while automating business processes. 
        <br />
        <br />This means you can relax and make money while your business grows.
        <br /><img src="https://cdn.discordapp.com/attachments/1054728518359072798/1065337754814251018/6060l4_An_isometric_view_of_a_city_surrounding_the_logo_of_a_ra_3a0d8d27-3564-4e55-8e32-5417ff53c7d5.png" />
        </p>
      </div>
      <div className="big-body-text body-center">
        <p>
          Let's upgrade your business till customers <br />can't help but comment on the positive changes.
        </p>
      </div>
      <div className="big-body-text body-center">
        <p>
          At <span className="green-text">TheRadar</span>, we herald TheFuture of your business 
          <br />by staying ahead of the curve in technology and digital trends.
        </p>
      </div>
      <div className="big-body-text body-center">
        <p>
          And we do it because we like to 😎 
        </p>
      </div>
      <div className="big-body-text body-center text-right">
        <p>
          Say yes and chart the course to your business's success.
          <br />
          <Link to="/services">
            <span className="green-text">Discover how we can help </span>
          </Link>
        </p>
      </div>
    </Slider>
  );
};

export default Aboutslider;
