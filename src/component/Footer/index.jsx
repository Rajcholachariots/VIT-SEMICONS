import React from "react";
import img5 from "../../assets/Navbar/img5.svg";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div
      style={{ fontFamily: '"Roboto", sans-serif' }}
      className="bg-black w-full overflow-x-hidden"
    >
      <div className="w-[95%] mx-auto overflow-x-hidden">
        <div className="flex py-8 gap-3 flex-col overflow-x-hidden">
          <div className="flex sm:flex-col md:flex-row overflow-x-hidden sm:gap-8 md:gap-12">
            <div className="flex-col flex-[2] overflow-x-hidden justify-center place-content-center self-center ">
              <div className="self-start mb-2 flex content-center sm:justify-center md:justify-start ">
                <img
                  srcSet={img5}
                  className="text-center content-centers self-center"
                />
              </div>
              <div className="text-white sm:text-center flex flex-col gap-1 md:text-left">
                <h2 className="text-[18px]">
                  Leading Affordable Semiconductor Innovation
                </h2>
                <p className="text-white text-[14px] sm:text-center md:text-left">
                  Delivering quality semiconductors globally, reducing imports,
                  fostering technological innovation.
                </p>
              </div>
              {/* <div className="flex gap-4 flex-row sm:justify-center cursor-pointer md:justify-start sm:text-center md:text-left">
                <div className="">
                  <img srcSet={facebook} className="cursor-pointer" />
                </div>
                <div className="">
                  <img srcSet={instagram} className="cursor-pointer"  />
                </div>
                <div className="">
                  <img srcSet={twitter} className="cursor-pointer"  />
                </div>
                <div className="">
                  <img srcSet={youtube} className="cursor-pointer"  />
                </div>
              </div> */}
            </div>
            <div className="flex-[1] flex flex-col sm:text-center md:text-left">
              <Link className="z-0 text-white cursor-pointer">
                Home
              </Link>
              <Link
                to="WhatWeDo"
                duration={400}
                className="z-0 text-white cursor-pointer"
              >
                What We Do
              </Link>
              <Link to="" className="z-0 text-white cursor-pointer">
                Our Product
              </Link>
            </div>
            <div className="flex-[1] flex flex-col sm:text-center md:text-left ">
              <Link to="about" className="z-0 text-white cursor-pointer">
                About
              </Link>
              <Link to="contact" className="z-0 text-white cursor-pointer">
                Contact Us
              </Link>
            </div>
            {/* <div className="flex-[1] flex-col sm:text-center md:text-left ">
              <div className="">
                <p className="text-white">Become a driver</p>
              </div>
              <div className="">
                <p className="text-white">Term and Condition</p>
              </div>
              <div className="">
                <p className="text-white">Privacy policy</p>
              </div>
            </div> */}
            <div className="flex-[1] flex-col sm:text-center md:text-left">
              <div className="">
                <p className="text-white">info@vitpark.com</p>
              </div>
            </div>
          </div>
          <div className="text-center text-white ">
            2024 VITSEMICON Pvt Ltd, All Right Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
