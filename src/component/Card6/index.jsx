import React, { useState } from "react";
import img8 from "../../assets/img8.svg";
const Card6 = () => {
  const [keyServices, setKeyServices] = useState(false);
  const handleClick = () => {
    setKeyServices(!keyServices);
  };
  return (
    <div className="bg-black bg-cover bg-center w-full overflow-hidden bg-gradient-to-b from-[#000000] to-[#373333]">
      <div className="justify-center items-center text-white">
        <div className="w-[85%] py-4 mx-auto">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="w-full sm:gap-6 lg:gap-12 flex sm:flex-col lg:flex-row "
          >
            <img
              srcSet={img8}
              className="md:h-[550px] md:w-[550px] xxl:h-[650px] xxl:w-[650px]  sm:w-full sm:h-auto  self-center "
            />
            <div
              style={{ fontFamily: '"Roboto", sans-serif' }}
              className="flex px-6 sm:text-center lg:text-left gap-8 flex-col items-center place-content-center"
            >
              {!keyServices ? (
                <>
                  <div className="text-white sm:self-center lg:self-start font-semibold sm:gap-6 md:gap-12 flex justify-start items-start self-start flex-row">
                    <div className=" text-[24px]">
                      Semiconductor Fabrication Facility
                    </div>
                  </div>
                  <div className="text-[#B0ABAB] text-[20px] leading-7">
                    Our Front-End Semiconductor Fab specializes in the initial
                    stages of chip manufacturing, transforming raw silicon
                    wafers into functional semiconductor devices. We utilize
                    advanced lithography, etching, and deposition techniques to
                    build precise, high-performance circuits with stringent
                    quality controls.
                  </div>
                </>
              ) : (
                <>
                  <div className="text-white sm:self-center lg:self-start font-semibold sm:gap-4 md:gap-2 flex justify-start items-start self-start flex-row">
                    <div className=" text-[24px] text-white ">Key Feature</div>
                  </div>
                  <div className="text-[#B0ABAB] gap-3 flex flex-col text-[20px] leading-7">
                    <ul>
                      <li>⦁ Lithography, etching, and deposition</li>
                      <li>⦁ Oxidation and doping processes</li>
                      <li>⦁ Cutting-edge cleanroom manufacturing</li>
                      <li>⦁ Rigorous testing and inspection</li>
                    </ul>
                    <span className="font-semibold py-2 text-[#B0ABAB] ">
                      {" "}
                      Pioneering innovation in front-end semiconductor
                      fabrication for next-gen technology.
                    </span>
                  </div>
                </>
              )}
              <button
                onClick={handleClick}
                className="border-[1px] border-gray-200 px-[24px] py-1 text-gray-200 text-[12px] font-extralight self-start "
              >
                {keyServices ? <div>Features</div> : <div>Key Services</div>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card6;
