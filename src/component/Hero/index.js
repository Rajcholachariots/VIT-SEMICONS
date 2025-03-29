import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img11 from "../../assets/img11.svg";
import img12 from "../../assets/img12.svg";
import img13 from "../../assets/img13.svg";
import HeroVideo from "../../assets/videoplayback.mp4";
import "@fortawesome/fontawesome-free/css/all.min.css";
const Hero = () => {
  const items = [
    <img src={img11} className="w-full " alt="image1" key="1" />,
    <img src={img12} className="w-full " alt="image2" key="2" />,
    <img src={img13} className="w-full " alt="image3" key="3" />,
  ];

  return (
    <>
      <div
        id="home"
        className="bg-cover  relative bg-center bg-black h-screen w-full flex items-center "
        style={{
          // backgroundImage: `url(${img11})`,
          fontFamily: '"Inter", sans-serif',
        }}
      >
        <video
          autoPlay
          loop
          muted
          className="rounded-lg shadow-lg h-full w-full object-cover"
        >
          <source src={HeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="sm:w-[95%] sm:mt-20 md:mt-24 absolute inset-0 text-white flex flex-col mx-auto  md:w-[85%] gap-10 sm:text-center md:px-12">
          <div className="sm:text-[28px] md:text-[50px] xxl:text-[60px]  md:mb-[-10px] font-extrabold">
            VIT SEMICONS PARK PRIVATE LIMITED
          </div>
          <div className="sm:text-[14px] md:mt-[12px] md:text-[20px] xxl:text-[28px] font-bold">
            <span className="md:block">
              VIT SEMICONS PARK PRIVATE LIMITED, India`s first Semiconductor Eco
              System to be set up in Ratnagiri, Maharashtra.
            </span>
          </div>
          <div className="flex sm:mt-10 md:mt-0 flex-row gap-6">
            <div className="flex gap-2 flex-col w-1/2 bg-white bg-opacity-20 backdrop-blur-lg sm:px-2 sm:pt-2 sm:pb-4 md:px-6 md:pt-4 md:pb-8 rounded-lg">
              <div className="text-[18px] font-semibold ">Vision</div>
              <div className="text-[13px]">
                To build a unified ecosystem that merges design, manufacturing,
                and innovation. This approach seeks to deliver high-performance,
                energy-efficient products, promote seamless integration across
                industries, and drive sustainable technological advancement
                worldwide.
              </div>
            </div>
            <div className="flex flex-col gap-2 w-1/2 bg-white bg-opacity-20 backdrop-blur-lg sm:px-2 sm:pt-2 sm:pb-4 md:px-6 md:pt-4 md:pb-8 rounded-lg">
              <div className="text-[18px] font-semibold ">Mission</div>
              <div className="text-[13px]">
                To deliver innovative, efficient, and scalable Integrated
                semiconductor solutions that power diverse applications and
                enhance connectivity.
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://youtu.be/F45iUfxMluY"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 sam:text-[9px] md:text-[14px] z-50 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 sm:rounded-full md:rounded-lg shadow-lg transition duration-300 ease-in-out"
      >
        <i className="fas fa-play  md:mr-2"></i>
        <span className="md:inline sm:hidden">Watch Video</span>
      </a>
    </>
  );
};

export default Hero;
