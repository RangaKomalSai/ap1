// components/Benefits.js
import React from "react";
import SectionHeading from "../../components/SectionHeading.js";
import w1 from "../../assets/w1.svg";
import w2 from "../../assets/w2.svg";
import w3 from "../../assets/w3.svg";
import w4 from "../../assets/w4.svg";

function Benefits() {
  return (
    <section className="benefits bg-primary font-montserrat text-white py-16 overflow-hidden">
      <div className="container mx-auto">
        <SectionHeading
          back_heading="DEVELOP"
          main_heading="What's in it for you?"
        />

        <div className="flex flex-col flex-wrap px-2 mt-6 md:mt-0 md:px-16 mx-auto w-[90%] md:w-[70%] space-y-12">
          <div className="flex justify-around items-center">
            <img
              src={w1}
              alt="Cash Prizes"
              className="md:h-48 md:w-auto w-[30%] h-auto"
              draggable="false"
              data-aos="fade-right"
            />
            <div className="font-semibold font-montserrat flex flex-col justify-center items-start w-[60%]">
              <div className="flex items-center justify-start space-x-2">
                <h1
                  className=" w-[90%] bg-gradient-to-b from-[#FFFFFF] to-[#3812E4] text-transparent bg-clip-text text-[22px] md:text-[32px]"
                  data-aos="fade-left"
                >
                  Unlock Cash Prizes, Rewards
                </h1>
              </div>
              <span
                className="text-[16px] mt-2 md:mt-0 md:text-[24px] text-pretty"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                Access to cash prize, rewards and exciting incentives that drive
                your social innovation forward
              </span>
            </div>
          </div>
          <div className="flex justify-around items-center">
            <div className="font-semibold font-montserrat flex flex-col justify-center items-start w-[60%]">
              <div className="flex items-center justify-start space-x-2">
                <h1
                  className="w-[90%] bg-gradient-to-b from-[#FFFFFF] to-[#3812E4] text-transparent bg-clip-text text-[22px] md:text-[32px]"
                  data-aos="fade-right"
                >
                  Networking Opportunities
                </h1>
              </div>
              <span
                className="text-[16px] mt-2 md:mt-0 md:text-[24px] text-pretty"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                Opportunity to netwok with Action Plan's excelent partner base
                spread across the globe
              </span>
            </div>
            <img
              src={w2}
              alt="Networking"
              className="md:h-48 md:w-auto w-[30%] h-auto"
              draggable="false"
              data-aos="fade-left"
            />
          </div>
          <div className="flex justify-around items-center">
            <img
              src={w3}
              alt="Mentoring"
              className="md:h-48 md:w-auto w-[30%] h-auto"
              draggable="false"
              data-aos="fade-right"
            />
            <div className="font-semibold font-montserrat flex flex-col justify-center items-start w-[60%]">
              <div className="flex items-center justify-start space-x-2">
                <h1
                  className="w-[90%] bg-gradient-to-b from-[#FFFFFF] to-[#3812E4] text-transparent bg-clip-text text-[22px] md:text-[32px]"
                  data-aos="fade-left"
                >
                  Mentoring Support
                </h1>
              </div>
              <span
                className="text-[16px] mt-2 md:mt-0 md:text-[24px] text-pretty"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                Gain personalized guidance from seasoned mentors to nurture your
                social entrepreneurship journey
              </span>
            </div>
          </div>
          <div className="flex justify-around items-center">
            <div className="font-semibold font-montserrat flex flex-col justify-center items-start w-[60%]">
              <div className="flex items-center justify-start space-x-2">
                <h1
                  className="w-[90%] bg-gradient-to-b from-[#FFFFFF] to-[#3812E4] text-transparent bg-clip-text text-[22px] md:text-[32px]"
                  data-aos="fade-right"
                >
                  Exclusive Workshops
                </h1>
              </div>
              <span
                className="text-[16px] mt-2 md:mt-0 md:text-[24px] text-pretty"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                Series of exclusive and interesting workshops in both Round 1
                and Round 2 by leading speakers of the field.
              </span>
            </div>
            <img
              src={w4}
              alt="Workshops"
              className="md:h-48 md:w-auto w-[30%] h-auto"
              draggable="false"
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
