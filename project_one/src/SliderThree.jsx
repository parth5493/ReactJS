import React from "react";
import HoverCarousel from "hover-carousel";

const MyImageCarousel = () => {
  const images = [
    "https://images.pexels.com/photos/3476860/pexels-photo-3476860.jpeg?cs=srgb&dl=pexels-studio-art-smile-3476860.jpg&fm=jpg",
    "https://imgk.timesnownews.com/story/main_indian_flag_iStock-1194408359.jpg",
    "https://www.businessinsider.in/thumb/msid-93373692,width-1200,height-900/indian-flag.jpg",
    "https://s.yimg.com/ny/api/res/1.2/SOXZwxvvJ__PB8xn3v4lcg--/YXBwaWQ9aGlnaGxhbmRlcjtoPTY2Ng--/https://s.yimg.com/os/creatr-uploaded-images/2021-08/46b45290-fc2e-11eb-bbfb-ec632f14765d",
    "https://www.asiapacific.ca/sites/default/files/styles/apf_700/public/Keystone_93.png.jpeg"
    // Add more image URLs here
  ];

  return (
    <div>
      <HoverCarousel images={images} />
    </div>
  );
};

export default MyImageCarousel;