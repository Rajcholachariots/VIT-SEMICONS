import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img14 from "../../assets/img14.svg";
import img15 from "../../assets/img15.svg";
import img16 from "../../assets/img16.svg";

const AboutUs = () => {
  const items = [
    <img src={img14} className="w-full " alt="image1" key="1" />,
    <img src={img15} className="w-full " alt="image2" key="2" />,
    <img src={img16} className="w-full " alt="image3" key="3" />,
  ];
  return (
    <div
      id="about"
      className="w-full bg-gradient-to-b from-[#000000] to-[#969191] h-fit overflow-hidden"
    >
      <div className="sm:w-[90%] py-12 md:w-[80%] mx-auto ">
        <div className="flex flex-col gap-3 ">
          <div className="text-[36px] text-white text-center font-bold ">
            BHUMI PUJAN CEREMONY
          </div>
          <div className="">
            <AliceCarousel
              mouseTracking={false}
              items={items}
              infinite={true}
              autoPlay={true}
              autoPlayInterval={3000}
              disableButtonsControls
              disableDotsControls
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
