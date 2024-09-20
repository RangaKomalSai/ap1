// components/ActionPlanInfo.js
import React from "react";
import ap from "../../assets/ap.svg";
import apsub from "../../assets/apsub.svg";
import "./sections.css";
import SectionHeading from "../../components/SectionHeading.js";

function ActionPlanInfo() {
  return (
    <section className="action-plan-info bg-primary text-white py-16 font-montserrat">
      <div className="container mx-auto text-center">
        <div className="flex flex-col justify-start items-end w-[60%] h-[70vh]">
          <img src={ap} alt="Logo" className="h-64 w-auto" draggable="false" />{" "}
          <img
            src={apsub}
            alt="Logo"
            className="h-24 w-auto"
            draggable="false"
          />{" "}
          <div className="flex justify-end items-center w-full my-4 mr-32">
            <button className="bg-[#41BDEE] hover:bg-blue-600 text-[20px] text-white font-extrabold py-2 px-4 rounded-full text-lg">
              REGISTER NOW
            </button>
          </div>
        </div>

        <div className="relative bg-white text-black py-16 content font-montserrat">
          <div className="container mx-auto flex flex-col justify-center items-center my-8">
            <SectionHeading
              back_heading="ACTION PLAN"
              main_heading="What is Action Plan?"
              light={true}
            />
            <p className="mb-8 max-w-3xl mx-auto text-[#311B92] font-semibold">
              Action Plan, the Flagship Social Entrepreneurship Competition of
              Abhyuday, IIT Bombay, empowers young minds to tackle grass root
              level problems and design a sustainable business model for them.
              Teams progress through transformative stages, from ideation to
              execution, guided by industry experts and investors. Since 2013,
              Action Plan has driven growth and is poised to become Asia's
              premier Social Entrepreneurship Platform.
            </p>
            <div className="stats flex justify-center space-x-12 mb-8">
              <div className="stat">
                <div className="text-4xl font-bold text-heading mb-2">
                  2000+
                </div>
                <div className="text-[#5ED2FF] font-extrabold text-[20px]">
                  ENTRIES
                </div>
              </div>
              <div className="stat">
                <div className="text-4xl font-bold text-heading mb-2">
                  INR 7.5 Mn+
                </div>
                <div className="text-[#5ED2FF] font-extrabold text-[20px]">
                  PRIZES WORTH
                </div>
              </div>
              <div className="stat">
                <div className="text-4xl font-bold text-heading mb-2">100+</div>
                <div className="text-[#5ED2FF] font-extrabold text-[20px]">
                  MENTORS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActionPlanInfo;
