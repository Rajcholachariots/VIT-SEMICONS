import React from "react";
import img10 from "../../assets/img10.svg";
const ContactUs = () => {
  return (
    <div
      id="contact"
      style={{
        fontFamily: '"Inter", sans-serif',
        backgroundImage: `url(${img10})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-full overflow-hidden relative"
    >
      <div className="sm:w-[90%] py-6 items-center place-content-center md:w-[60%] mx-auto">
        <div className="flex items-center sm:gap-6 md:gap-12 py-auto my-auto flex-col">
          <div className="text-white font-bold sm:text-[24px] md:text-[32px] text-center">
            Contact Us
          </div>
          <div className="flex sm:gap-[50px] md:gap-24 flex-row justify-between">
            <div className="flex w-1/2 md:gap-2 flex-col">
              <div className="text-[#F89955] font-semibold sm:text-[18px] md:text-[21px]">
                Visit Us
              </div>
              <div className="text-white sm:text-[15px] md:text-[18px] md:leading-6">
                VIT SEMICONS PARK PRIVATE LIMITED No.108 & 109, Siddhi Vinayak
                Complex, Shivaji Nagar, Ratnagiri - 415 612, Maharashtra
              </div>
            </div>
            <div className="flex w-1/2 md:gap-2 flex-col">
              <div className="text-[#F89955] font-semibold sm:text-[18px] md:text-[21px]">
                Admin Office
              </div>
              <div className="text-white sm:text-[15px] md:text-[18px] md:leading-6">
                13/16,24 th East cross road Gandhinagar Vellore-632 006
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
