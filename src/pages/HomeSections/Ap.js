import React from 'react';
import { Link } from 'react-router-dom';
import ThreeJSScene from './ThreeJSScene'; // Import the ThreeJSScene component

import ap from "../../assets/ap.svg";
import apsub from "../../assets/apsub.svg";

export default function ActionPlanSection() {
  return (
    <section className="action-plan-info relative font-montserrat overflow-hidden">
      {/* Background ThreeJS Globe for mobile */}
      <div className="absolute inset-0 z-0 md:hidden opacity-30">
        <ThreeJSScene />
      </div>

      {/* Globe on larger screens */}
      <div className="container mx-auto text-center flex flex-wrap items-center justify-between h-[70vh] max-w-full px-4 relative z-10">
        
        {/* Text Section - Aligned to the left */}
        <div className="flex flex-col justify-start items-start w-full md:w-[40%]">
          <img
            src={ap}
            alt="Logo"
            className="h-64 w-auto"
            draggable="false"
            data-aos="fade-right"
          />
          <img
            src={apsub}
            alt="Logo"
            className="h-24 w-auto"
            draggable="false"
            data-aos="fade-right"
            data-aos-delay="200"
          />
          <div className="flex justify-start items-center w-full my-4 ml-4">
            <Link to="/register">
              <button
                className="bg-[#41BDEE] hover:bg-blue-600 text-[20px] text-white font-extrabold py-2 px-4 rounded-full text-lg"
                data-aos="zoom-in-up"
              >
                REGISTER NOW
              </button>
            </Link>
          </div>
        </div>

        {/* Three.js Globe - Display on larger screens */}
        <div className="hidden md:block w-full md:w-[50%] mt-2 md:mt-0">
          <ThreeJSScene />
        </div>
      </div>
    </section>
  );
}
