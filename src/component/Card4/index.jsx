import React from "react";
import img6 from "../../assets/img6.svg";
const Card4 = () => {
  const List = [
    { item: "Manufacturing of Silicon INGOTS and Raw Wafers." },
    { item: "Advanced wafer fabrication." },
    { item: "Packaging and assembly solutions." },
    { item: "Comprehensive testing and quality assurance." },
    { item: "Scalable production capabilities." },
    {
      item: "Driving excellence in semiconductor manufacturing for the next generation of technology.",
    },
  ];
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
              srcSet={img6}
              className="md:h-[550px] md:w-[550px] xxl:h-[650px] xxl:w-[650px]  sm:w-full sm:h-auto  self-center "
            />
            <div
              style={{ fontFamily: '"Roboto", sans-serif' }}
              className="flex px-6 sm:text-center lg:text-left gap-8 flex-col items-center place-content-center"
            >
              <div className="text-white sm:self-center lg:self-start font-semibold sm:gap-6 md:gap-12 flex justify-start items-start self-start flex-row">
                <div className=" text-[28px] underline">Key Services</div>
                {/* <img srcSet={img4} className="cursor-pointer  my-auto" /> */}
              </div>
              <div className="text-[#B0ABAB] leading-7">
                <ul className="list-disc">
                  {List.map((item, index) => (
                    <li className="text-left" key={index}>
                      {item.item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card4;
