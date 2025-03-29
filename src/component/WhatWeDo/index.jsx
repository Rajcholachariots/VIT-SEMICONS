import React, { useState } from "react";
import img7 from "../../assets/img7.svg";
const WhatWeDo = () => {
  const [keyServices, setKeyServices] = useState(false);
  const handleClick = () => {
    setKeyServices(!keyServices);
  };
  return (
    <div
      id="WhatWeDo"
      className="bg-gradient-to-b from-[#FFFFFF] to-[#999999] bg-cover bg-center w-full overflow-hidden"
    >
      <div className="justify-center items-center text-white">
        <div className="w-[85%] py-4  mx-auto">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="flex flex-col"
          >
            <div className="underline text-[40px] text-[#050038]  md:mb-[-40px] sm:text-center  self-center font-bold font-roboto justify-center mx-auto ">
              WHAT WE DO
            </div>
            <div
              style={{ fontFamily: '"Roboto", sans-serif' }}
              className="w-full sm:gap-6 lg:gap-12 flex sm:flex-col-reverse lg:flex-row "
            >
              {/* <img
                srcSet={img7}
                className="md:h-[550px] md:w-[550px] xxl:h-[650px] xxl:w-[650px]  sm:w-full sm:h-auto  self-center "
              /> */}
              <div className="flex px-6 sm:text-center lg:text-left gap-5 flex-col items-center place-content-center">
                { !keyServices ? (
                  <>
                    <div className="text-white sm:self-center lg:self-start font-semibold sm:gap-4 md:gap-2 flex justify-start items-start self-start flex-row">
                      <div className=" text-[24px] text-black ">
                        SILICON MANUFACTURING FACILITY
                      </div>
                    </div>
                    <div className="text-[#3C3C3C]  text-[20px] leading-7">
                      Our Silicon Ingot and Raw Silicon Wafers Manufacturing
                      Facility delivers high-purity silicon ingots and
                      precision-cut wafers for semiconductor applications.
                      Utilizing advanced crystal growth techniques, we ensure
                      superior material quality and consistency, supporting the
                      production of high-performance devices across various
                      industries.
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-white sm:self-center lg:self-start font-semibold sm:gap-4 md:gap-2 flex justify-start items-start self-start flex-row">
                      <div className=" text-[24px] text-black ">
                        Key Feature
                      </div>
                    </div>
                    <div className="text-[#3C3C3C] gap-3 flex flex-col text-[20px] leading-7">
                      <ul>
                        <li>⦁ High-purity silicon ingot production</li>
                        <li>⦁ Precision slicing for raw silicon wafers</li>
                        <li>⦁ Scalable production for various wafer sizes</li>
                      </ul>
                      <span className="font-semibold py-2 " >
                        {" "}
                        Setting the standard for excellence in silicon ingot and
                        wafer manufacturing.
                      </span>
                    </div>
                  </>
                )}
                <button
                  onClick={handleClick}
                  className="border-[1px] border-black px-[24px] py-1 text-gray-800 text-[12px] font-extralight self-start "
                >
                  {keyServices ? <div>Features</div> : <div>Key Services</div>}
                </button>
              </div>
              <img
                srcSet={img7}
                className="md:h-[550px] md:w-[550px] xxl:h-[650px] xxl:w-[650px]  sm:w-full sm:h-auto  self-center "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
