import React from "react";

const Card3 = () => {
  const Cards = [
    {
      title: "Silicon INGOT Manufacturing",
      description:
        "To produce high-purity silicon ingots for semiconductor applications through controlled crystallization processes, ensuring quality and consistency",
    },
    {
      title: "Semiconductor Fabrication Facility",
      description:
        "Our semiconductor fabrication facility is aimed with advanced cleanroom conditions to minimize contamination, utilizes sophisticated machinery for processes like photolithography, etching, and doping, and ensures precision in producing high-performance chips for various electronic applications",
    },
    {
      title: "Assembly, Testing, Marking and Packing (ATMP)",
      description:
        "ATMP plays a vital role in ensuring that semiconductor devices meet quality standards and are ready for integration into various electronic applications",
    },
  ];
  return (
    <div
      className="w-full overflow-hidden bg-white"
    >
      <div className="py-12 flex flex-col gap-6 sm:w-[95%] md:w-[85%] mx-auto">
      <div  style={{ fontFamily: '"Inter", sans-serif' }} className="underline text-center text-[28px] font-bold ">OUR BUSINESS</div>
        <div className="flex sm:flex-col sm:gap-0 md:gap-3 md:flex-row">
          {Cards.map((item, index) => (
            <div
              key={index}
              className={`flex md:w-1/3 sm:px-2 sm:py-3 md:px-6 md:py-5  text-black gap-3 flex-col ${
                index == 0 ? "border-none" : "md:border-l md:border-black"
              } `}
            >
              <div
                style={{ fontFamily: '"Inter", sans-serif' }}
                className="text-[#050038]  sm:text-center md:text-left underline text-[18px] font-semibold "
              >
                {item.title}
              </div>
              <div
                style={{ fontFamily: '"Lato", sans-serif' }}
                className=" sm:text-center md:text-left text-[#05003899] text-[15px] "
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card3;
