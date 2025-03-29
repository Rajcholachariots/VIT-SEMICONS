import React, { useState } from "react";

const OurProduct = () => {
  const [keyServices, setKeyServices] = useState(false);
  const handleClick = () => {
    setKeyServices(!keyServices);
  };
  return (
    <div id="OurProduct" className="bg-slate-200  w-full overflow-hidden">
      <div className="w-[90%] py-12 mx-auto">
        <div className="flex flex-col gap-8 ">
          <div
            style={{ fontFamily: '"Inter", sans-serif' }}
            className=" self-center capitalize flex text-[#050038] text-[32px] underline font-bold "
          >
            OUR PRODUCTS
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex gap-14  ">
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #000000 61%, #969191 100%)",
                }}
                className="flex w-1/2 flex-col px-4 gap-5 pt-2 pb-6 "
              >
                <div
                  style={{ fontFamily: '"Inter", sans-serif' }}
                  className="text-white underline text-[22px] "
                >
                  Silicon Wafers
                </div>
                <div
                  style={{ fontFamily: '"Lato", sans-serif' }}
                  className=" text-[#FFFBFB] "
                >
                  Unlock cutting-edge innovation with our comprehensive
                  semiconductor product development ecosystem. From design to
                  manufacturing, we provide end-to-end solutions, ensuring
                  speed, efficiency, and reliability. Our expertise includes
                  advanced chip design, prototyping, testing, and scalable
                  production, powering the future of technology with next-gen
                  semiconductors tailored to your needs.
                </div>
              </div>
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #000000 61%, #969191 100%)",
                }}
                className="flex flex-col w-1/2 px-4 gap-5 pt-2 pb-6 "
              >
                <div
                  style={{ fontFamily: '"Inter", sans-serif' }}
                  className=" text-white underline text-[22px] "
                >
                  Analog Semiconductor Products
                </div>
                <div
                  style={{ fontFamily: '"Lato", sans-serif' }}
                  className=" text-[#FFFBFB] "
                >
                  Explore our range of high-quality analog semiconductor
                  products, engineered for precision and reliability in diverse
                  applications. From signal processing to power management, our
                  analog solutions offer exceptional performance for electronics
                  that demand accuracy and stability.
                </div>
              </div>
            </div>
            {keyServices && (
              <div className="flex gap-14  ">
                <div
                  style={{
                    background:
                      "linear-gradient(180deg, #FFFFFF 61%, #999999 100%)",
                  }}
                  className="flex w-1/2 flex-col px-4 gap-5 pt-2 pb-6 "
                >
                  <div
                    style={{ fontFamily: '"Inter", sans-serif' }}
                    className="text-black font-semibold underline text-[22px] "
                  >
                    Silicon Wafers Key Features
                  </div>
                  <div
                    style={{ fontFamily: '"Lato", sans-serif' }}
                    className=" text-black "
                  >
                    <div className=" gap-2 flex flex-col  leading-7">
                      <ul>
                        <li>⦁ High-purity, defect-free silicon</li>
                        <li>⦁ Precision slicing and uniform thickness</li>
                        <li>⦁ Various sizes and specifications available</li>
                        <li>
                          ⦁ Rigorous quality control for optimal performance
                        </li>
                      </ul>
                      <span className="font-semibold py-1 ">
                        {" "}
                        Engineered for excellence, our silicon wafers are
                        designed to power the future of technology.
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    background:
                      "linear-gradient(180deg, #FFFFFF 61%, #999999 100%)",
                  }}
                  className="flex flex-col w-1/2 px-4 gap-5 pt-2 pb-6 "
                >
                  <div
                    style={{ fontFamily: '"Inter", sans-serif' }}
                    className=" text-black font-semibold underline text-[22px] "
                  >
                    Analog Semiconductor Products Key Features
                  </div>
                  <div
                    style={{ fontFamily: '"Lato", sans-serif' }}
                    className=" text-black "
                  >
                    <div className=" gap-2 flex flex-col  leading-7">
                      <ul>
                        <li>⦁ Operational amplifiers</li>
                        <li>⦁ Voltage regulators and reference chips</li>
                        <li>
                          ⦁ Analog-to-digital and digital-to-analog converters
                        </li>
                        <li>
                          ⦁ Signal conditioning and amplification circuits
                        </li>
                      </ul>
                      <span className="font-semibold py-1 ">
                        {" "}
                        Designed to meet stringent industry standards, our
                        analog semiconductors are ideal for automotive,
                        industrial, and consumer electronics, delivering
                        superior performance where precision matters.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-[60%] mx-auto mt-4">
            <div
              onClick={handleClick}
              className="border-2 border-black cursor-pointer py-1 flex self-center content-center place-content-center "
            >
              {keyServices ? (
                <div> Hide Key Services </div>
              ) : (
                <div>Show Key Services</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
