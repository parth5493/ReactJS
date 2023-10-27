import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <h3 className="text-center">1</h3>
      </div>
      <div>
        <h3 className="text-center">2</h3>
      </div>
      <div>
        <h3 className="text-center">3</h3>
      </div>
      <div>
        <h3 className="text-center">4</h3>
      </div>
      <div>
        <h3 className="text-center">5</h3>
      </div>
      <div>
        <h3 className="text-center">6</h3>
      </div>
    </Slider>
  );
}