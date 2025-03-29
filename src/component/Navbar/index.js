import React, { useEffect, useState } from "react";
import img1 from "../../assets/Navbar/img1.svg";
import img2 from "../../assets/Navbar/img2.svg";
import img3 from "../../assets/Navbar/img3.svg";
import img4 from "../../assets/Navbar/img4.svg";
import img5 from "../../assets/Navbar/img5.svg";
import { Link } from "react-scroll";
import { easeLinear } from "easing-functions";
const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const toggleDiv = () => {
    setIsDivVisible(!isDivVisible);
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      style={{ fontFamily: '"Inter", sans-serif' }}
      className="flex flex-col items-center md:absolute md:bg-transparent sm:bg-black md:z-20 md:backdrop-blur-lg overflow-x-hidden  w-full "
    >
      {windowWidth >= 768 ? (
        <div className="flex flex-col w-full">
          <div className="flex items-center w-full max-md:max-w-full">
            <div className="flex flex-row gap-6 items-center justify-between md:px-[65px] lg:px-[85px] my-auto w-full ">
              {/* <div className="flex bg-slate-300 flex-row justify-between "> */}
                <div className="flex itms-center">
                  <img srcSet={img5} className="" />
                </div>
                <div className="flex flex-col pb-6 md:pl-1 lg:ml-8  my-auto sm:text-[11px] md:text-[14px] lg:text-[16px] xl:text-[15px] font-medium leading-6 text-white ">
                  <div className="flex flex-row  pt-6 md:gap-4 lg:gap-10 xl:gap-18 xxl:gap-[70px] xxxl:gap-[100px]">
                    <div
                      className={`flex relative flex-col whitespace-nowrap `}
                    >
                      <Link
                      // to="home"
                        // onClick={() => handleItemClick("Home")}3
                        className="z-0 cursor-pointer"
                      >
                        Home
                      </Link>
                    </div>
                    <div className="flex relative flex-col whitespace-nowrap ">
                      <Link
                        // onClick={() => handleItemClick("Driver")}
                        to="WhatWeDo"
                        smooth={easeLinear}
                        duration={400}
                        className="z-0 cursor-pointer"
                      >
                        What We Do
                      </Link>
                    </div>
                    <div
                      className={`flex relative flex-col whitespace-nowrap 

                      `}
                    >
                      <Link
                        // onClick={() => handleItemClick("Passenger")}
                        to="about"
                        className="z-0 cursor-pointer"
                      >
                        About
                      </Link>
                    </div>
                    <div className="flex relative flex-col whitespace-nowrap">
                      <Link
                        to="OurProduct"
                        smooth={easeLinear}
                        duration={400}
                        className="z-0 cursor-pointer"
                      >
                        Our Product
                      </Link>
                    </div>
                    <Link
                      // onClick={() => handleItemClick("Contact")}
                      className="z-0 cursor-pointer"
                      to="contact"
                      smooth={easeLinear}
                      duration={400}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              {/* </div> */}
              {/* <div className="flex md:gap-2 lg:gap-5 flex-row items-center self-center justify-center my-auto ">
                <div className="flex flex-row md:gap-1 lg:gap-2  py-1 my-auto ">
                  <img
                    loading="lazy"
                    srcSet={img1}
                    className="object-contain items-center flex place-content-center"
                  />
                  <div className="text-white md:text-[11px] lg:text-[13px] ">
                    +41 22 715 7000
                  </div>
                </div>
                <div className="flex flex-row md:gap-1 lg:gap-2 items-center place-content-center my-auto ">
                  <img
                    loading="lazy"
                    srcSet={img2}
                    className="object-containm flex items-center place-content-center "
                  />
                  <div className="text-white items-center mb-[2px] flex place-content-center md:text-[11px] lg:text-[13px]  ">
                    en
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="text-white py-3 w-[95%] px-4 justify-between items-center mx-auto flex flex-row gap-2 ">
            {/* <div className="flex gap-6"> */}
              <div className="">
                <img srcSet={img5} className=" " />
              </div>
              <div className="flex items-center ">
                {isDivVisible ? (
                  <img
                    srcSet={img3}
                    className="cursor-pointer"
                    onClick={toggleDiv}
                    alt="Close"
                  />
                ) : (
                  <img
                    srcSet={img4}
                    className="cursor-pointer"
                    onClick={toggleDiv}
                    alt="Open"
                  />
                )}
              </div>
            {/* </div> */}
            {/* <div className="flex sm:gap-4 md:gap-6 text-[10px] flex-row items-center self-center justify-center my-auto ">
              <div className="flex flex-row sm:gap-1 md:gap-2 py-1 my-auto ">
                <img
                  loading="lazy"
                  srcSet={img1}
                  className="object-contain h-[14px] w-[14px] items-center flex place-content-center"
                />
                <div className="text-white ">+41 22 715 7000</div>
              </div>
              <div className="flex flex-row gap-1 items-center place-content-center my-auto ">
                <img
                  loading="lazy"
                  srcSet={img2}
                  className="object-containm h-[14px] w-[14px] flex items-center place-content-center "
                />
                <div className="text-white items-center mb-[5px] flex place-content-center text-[14px] ">
                  en
                </div>
              </div>
            </div> */}
          </div>
          {isDivVisible && (
            <div className="flex absolute z-20 top-16 right-1 justify-end self-start place-content-start items-start text-white">
              <div className="flex bg-black rounded-[12px] w-[90%] mx-2 flex-col gap-2 px-3 py-3">
                <div
                  to="services"
                  style={{ fontSize: "17px", fontWeight: "400" }}
                  className={`nav-link cursor-pointer  text-[22px] font-normal  `}
                  //   onClick={() => handleItemClick("Home")}
                >
                  Home
                </div>
                <div
                  to="faqs"
                  style={{ fontSize: "17px", fontWeight: "400" }}
                  className="nav-link cursor-pointer  text-[22px]  font-semibold "
                  // onClick={() => handleItemClick("Driver")}
                >
                  What We Do
                </div>
                <div
                  to="blog"
                  style={{ fontSize: "17px", fontWeight: "400" }}
                  className={`nav-link cursor-pointer  text-[22px] font-semibold `}
                  //   onClick={() => handleItemClick("Passenger")}
                >
                  About
                </div>
                <div
                  to="contact"
                  style={{ fontSize: "17px", fontWeight: "400" }}
                  className="nav-link cursor-pointer  text-[22px] font-semibold "
                  // onClick={() => handleItemClick("About")}
                >
                  Our Product
                </div>
                <div
                  to="contact"
                  style={{ fontSize: "17px", fontWeight: "400" }}
                  className="nav-link cursor-pointer  text-[22px] font-semibold "
                  // onClick={() => handleItemClick("Contact")}
                >
                  Contact
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Navbar;
