import React from "react";
import SectionHeading from "../../components/SectionHeading";
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <section
      className="contact-us bg-primary text-white py-12 sm:py-16 px-8 sm:px-16 font-montserrat"
      id="contact"
    >
      <div className="container mx-auto text-center">
        <SectionHeading back_heading="CONTACT" main_heading="Contact Us" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-28 justify-center items-center mt-8">
          <div>
            <div className="box-container mb-8 sm:mb-12">
              <div className="white-box rounded-2xl"></div>
              <div className="black-box rounded-2xl"></div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold" data-aos="zoom-in-up">
              Ramya Ranjan Behera
            </h3>
            <p className="text-sm sm:text-base" data-aos="zoom-in-up">Competition Head</p>
            <Link to="mailto:ramya.abhyuday@gmail.com">
              <p
                data-aos="zoom-in-up"
                className="hover:underline text-sm sm:text-base"
              >
                ramya.abhyuday@gmail.com
              </p>
            </Link>
            <Link to="tel:+918144020711">
              <p
                data-aos="zoom-in-up"
                className="hover:underline text-sm sm:text-base"
              >
                81440 20711
              </p>
            </Link>
          </div>
          <div>
            <div className="box-container mb-8 sm:mb-12">
              <div className="white-box rounded-2xl"></div>
              <div className="black-box rounded-2xl"></div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold" data-aos="zoom-in-up">
              Hardik Agrawal
            </h3>
            <p className="text-sm sm:text-base" data-aos="zoom-in-up">Competition Head</p>
            <Link to="mailto:hardik.abhyuday@gmail.com">
              <p
                data-aos="zoom-in-up"
                className="hover:underline text-sm sm:text-base"
              >
                hardik.abhyuday@gmail.com
              </p>
            </Link>
            <Link to="tel:+918209205908">
              <p
                data-aos="zoom-in-up"
                className="hover:underline text-sm sm:text-base"
              >
                82092 05908
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
