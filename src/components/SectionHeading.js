import React from "react";

function SectionHeading({ back_heading, main_heading, light }) {
  return (
    <div className="flex flex-col justify-center items-center w-full" >
      <div className="relative w-full h-12 md:h-32 flex items-center md:items-end justify-center overflow-hidden" data-aos="zoom-in">
        <div className="absolute inset-0 flex items-center justify-center text-5xl md:text-8xl font-extrabold">
          <span className="bg-gradient-to-r from-[#651FFF] to-[#00BCD4] text-transparent bg-clip-text opacity-45 md:opacity-20">
            {back_heading}
          </span>
        </div>
        <h1
          className={`relative z-10 text-[24px] md:text-[50px] font-extrabold ${
            light ? "text-heading" : "text-white"
          } mt-4 md:mb-2`}
        >
          {main_heading}
        </h1>
      </div>
      <div className="h-2 w-20 flex space-x-2 my-6" >
        <div className="h-full w-[10%] bg-gradient-to-r from-[#B2EBF2] via-[#D1C4E9] to-[#F8BBD0] rounded-full opacity-60" data-aos="fade-right"></div>
        <div className="h-full w-[60%] md:w-[80%] bg-gradient-to-r from-[#B2EBF2] via-[#D1C4E9] to-[#F8BBD0] rounded opacity-60" data-aos="fade-left"></div>
      </div>
    </div>
  );
}

export default SectionHeading;
