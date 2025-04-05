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
      className="flex flex-col items-center md:absolute md:bg-transparent sm:bg-black md:z-20 md:backdrop-blur-lg overflow-x-hidden w-full"
    >
      {windowWidth >= 768 ? (
        <div className="flex flex-col w-full">
          <div className="flex items-center w-full max-md:max-w-full">
            <div className="flex flex-row gap-6 items-center justify-between md:px-[65px] lg:px-[85px] my-auto w-full">
              <div className="flex items-center">
                <img srcSet={img5} className="" />
              </div>
              <div className="flex flex-col pb-6 md:pl-1 lg:ml-8 my-auto sm:text-[11px] md:text-[14px] lg:text-[16px] xl:text-[15px] font-medium leading-6 text-white">
                <div className="flex flex-row pt-6 md:gap-4 lg:gap-10 xl:gap-18 xxl:gap-[70px] xxxl:gap-[100px]">
                  <div className="flex relative flex-col whitespace-nowrap">
                    <Link className="z-0 cursor-pointer">Home</Link>
                  </div>
                  <div className="flex relative flex-col whitespace-nowrap">
                    <Link
                      to="WhatWeDo"
                      smooth={true}
                      duration={400}
                      className="z-0 cursor-pointer"
                    >
                      What We Do
                    </Link>
                  </div>
                  <div className="flex relative flex-col whitespace-nowrap">
                    <Link
                      to="about"
                      smooth={true}
                      duration={400}
                      className="z-0 cursor-pointer"
                    >
                      About Us
                    </Link>
                  </div>
                  <div className="flex relative flex-col whitespace-nowrap">
                    <Link
                      to="milestone"
                      smooth={true}
                      duration={400}
                      className="z-0 cursor-pointer"
                    >
                      Milestones
                    </Link>
                  </div>
                  <div className="flex relative flex-col whitespace-nowrap">
                    <Link
                      to="OurProduct"
                      smooth={true}
                      duration={400}
                      className="z-0 cursor-pointer"
                    >
                      Our Product
                    </Link>
                  </div>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={400}
                    className="z-0 cursor-pointer"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="text-white py-3 w-[95%] px-4 justify-between items-center mx-auto flex flex-row gap-2">
            <div>
              <img srcSet={img5} className="" />
            </div>
            <div className="flex items-center">
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
          </div>

          {isDivVisible && (
            <div className="flex absolute z-20 top-16 right-1 justify-end self-start place-content-start items-start text-white">
              <div className="flex bg-black rounded-[12px] w-[90%] mx-2 flex-col gap-2 px-3 py-3">
                <div
                  style={{ fontSize: "17px", fontWeight: "400" }}
                  className="nav-link text-[22px] font-normal"
                >
                  <Link to="home" smooth={true} duration={400}>
                    Home
                  </Link>
                </div>
                <div
                  style={{ fontSize: "17px", fontWeight: "400" }}
                  className="nav-link text-[22px] font-semibold"
                >
                  <Link to="WhatWeDo" smooth={true} duration={400}>
                    What We Do
                  </Link>
                </div>
                <div
                  style={{ fontSize: "17px", fontWeight: "400" }}
                  className="nav-link text-[22px] font-semibold"
                >
                  <Link to="about" smooth={true} duration={400}>
                    About Us
                  </Link>
                </div>
                <div
                  style={{ fontSize: "17px", fontWeight: "400" }}
                  className="nav-link text-[22px] font-semibold"
                >
                  <Link to="milestone" smooth={true} duration={400}>
                    Milestones
                  </Link>
                </div>
                <div
                  style={{ fontSize: "17px", fontWeight: "400" }}
                  className="nav-link text-[22px] font-semibold"
                >
                  <Link to="OurProduct" smooth={true} duration={400}>
                    Our Product
                  </Link>
                </div>
                <div
                  style={{ fontSize: "17px", fontWeight: "400" }}
                  className="nav-link text-[22px] font-semibold"
                >
                  <Link to="contact" smooth={true} duration={400}>
                    Contact
                  </Link>
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
