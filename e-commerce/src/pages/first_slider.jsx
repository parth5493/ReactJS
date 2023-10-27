import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
    <Slider >
   
      <div className="py-3">
        <div className="text-center">
            <p className="d-inline">Pay over time with monthly financing.‡</p>
            <Link className="d- ps-2">Financing details, including Quebec <i className="fa-solid fa-greater-than first_font"></i></Link>
        </div>
      </div>
      <div className="pt-3">
        <div className="text-center">
            <p className="d-inline p-0">Get $230–$955 in credit towards iPhone 15 or iPhone 15 Pro when you trade in an iPhone 11 or higher.1</p>
            <Link className="ps-2">Shop iPhone <i className="fa-solid fa-greater-than first_font"></i></Link>
        </div>
      </div>   
    </Slider>
    </>
  );
}