// components/ContactUs.js
import React from "react";
import SectionHeading from "../../components/SectionHeading.js";
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <section className="contact-us bg-primary text-white py-16 px-8 md:px-16 font-montserrat" id="contact">
      <div className="container mx-auto text-center">
        <SectionHeading back_heading="CONTACT" main_heading="Contact Us" />
        <div className="flex flex-wrap gap-5 md:gap-28 justify-center items-center">
          <div>
            <div className="box-container mb-12">
              <div className="white-box rounded-2xl"></div>
              <div className="black-box rounded-2xl"></div>
            </div>
            <h3 className="text-xl font-semibold" data-aos="zoom-in-up">
              Ramya Ranjan Behera
            </h3>
            <p data-aos="zoom-in-up">Competition Head</p>
            <Link to="mailto:ramya.abhyuday@gmail.com">
              <p data-aos="zoom-in-up" className="hover:underline">
                ramya.abhyuday@gmail.com
              </p>
            </Link>
            <Link to="tel:+918144020711">
              <p data-aos="zoom-in-up" className="hover:underline">
                81440 20711
              </p>
            </Link>
          </div>
          <div>
            <div className="box-container mb-12">
              <div className="white-box rounded-2xl"></div>
              <div className="black-box rounded-2xl"></div>
            </div>
            <h3 className="text-xl font-semibold" data-aos="zoom-in-up">
              Hardik Agrawal
            </h3>
            <p data-aos="zoom-in-up">Competition Head</p>
            <Link to="mailto:hardik.abhyuday@gmail.com">
              <p data-aos="zoom-in-up" className="hover:underline">
                hardik.abhyuday@gmail.com
              </p>
            </Link>
            <Link to="tel:+918209205908">
              <p data-aos="zoom-in-up" className="hover:underline">
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
