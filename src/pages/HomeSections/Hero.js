import React from "react";
import { Link } from "react-router-dom";
import ap from "../../assets/ap.svg";
import GridGlobe from "../../components/Globe/GridGlobe.tsx";

function Hero() {
  return (
    <section className="action-plan-info bg-primary text-white py-16 font-montserrat pt-[20vh]">
      <div className="container mx-auto text-center relative">
      <div className="absolute inset-0 z-0 md:hidden opacity-80">
           <GridGlobe />
         </div>
         <div className="hidden md:block absolute -top-48 right-0 z-0 md:right-10 lg:right-20 w-[60%]">
           <GridGlobe />
         </div>
        <div
          className="flex flex-col justify-start items-center md:items-end w-full md:w-[60%] min-h-[40vh] md:h-[70vh]"
          id="top"
        >
          <img
            src={ap}
            alt="Logo"
            className="md:h-80 md:w-auto w-[90%] h-auto"
            draggable="false"
            data-aos="fade-right"
          />
          <div className="flex justify-center md:justify-end items-center w-full my-4 md:mr-32">
            <Link to="/register">
              <button
                className="bg-[#41BDEE] hover:bg-blue-600 text-[20px] text-white font-extrabold py-2 px-4 mt-10 md:mt-0 rounded-full text-lg"
                data-aos="zoom-in-up"
              >
                REGISTER NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
