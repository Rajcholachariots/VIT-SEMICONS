import React, { useState } from "react";
import img9 from "../../assets/img9.svg";
const Card7 = () => {
  const [keyServices, setKeyServices] = useState(false);
  const handleClick = () => {
    setKeyServices(!keyServices);
  };
  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#999999] bg-cover bg-center w-full overflow-hidden">
      <div className="justify-center items-center text-white">
        <div className="w-[85%] py-4 mx-auto">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="flex flex-col"
          >
            <div
              style={{ fontFamily: '"Roboto", sans-serif' }}
              className="w-full sm:gap-6 lg:gap-12 flex sm:flex-col-reverse lg:flex-row "
            >
              <div className="flex px-6 sm:text-center lg:text-left gap-5 flex-col items-center place-content-center">
                {  !keyServices ? (
                  <>
                    <div className="text-white sm:self-center lg:self-start font-semibold sm:gap-4 md:gap-2 flex justify-start items-start self-start flex-row">
                      <div className=" text-[24px] text-black ">
                        ATMP - ASSEMBLY, TESTING , MARKING AND PACKING - BACK
                        END
                      </div>
                    </div>
                    <div className="text-[#3C3C3C] text-[20px] leading-7">
                      Our Back-End Semiconductor Fab focuses on the final stages
                      of chip manufacturing, where wafer-based circuits are
                      transformed into fully functional semiconductor devices.
                      We specialize in processes like wafer testing, die
                      separation, and packaging, ensuring each chip meets high
                      standards of reliability and performance
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
                        <li>⦁ Wafer testing and characterization</li>
                        <li>⦁ Die bonding and wire bonding</li>
                        <li>⦁ Advanced packaging and encapsulation</li>
                        <li>⦁ Final inspection and quality assurance</li>
                      </ul>
                      <span className="font-semibold py-2 ">
                        {" "}
                        Transforming high-quality wafers into robust,
                        ready-to-use semiconductor components with precision and
                        efficiency.
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
                srcSet={img9}
                className="md:h-[550px] md:w-[550px] xxl:h-[650px] xxl:w-[650px]  sm:w-full sm:h-auto  self-center "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card7;
