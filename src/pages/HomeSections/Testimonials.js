// components/Testimonials.js
import React from "react";
import SectionHeading from "../../components/SectionHeading.js";

function Testimonials() {
  return (
    <section className="testimonials bg-primary text-white py-16 font-montserrat w-full overflow-hidden">
      <div className="container mx-auto text-center">
        <div className="relative bg-white text-black py-16 content2 font-montserrat">
          <div className="container mx-auto flex flex-col justify-center items-center my-8">
            <SectionHeading
              back_heading="REVIEWS"
              main_heading="Testimonials"
              light={true}
            />
            <div className="flex pb-8 space-x-16">
              <div className="h-[400px] w-[350px] bg-black"></div>
              <div className="h-[400px] w-[350px] bg-black"></div>
              <div className="h-[400px] w-[350px] bg-black"></div>
              <div className="h-[400px] w-[350px] bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
