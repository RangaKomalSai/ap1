// components/ContactUs.js
import React from "react";

function ContactUs() {
  return (
    <section className="contact-us bg-indigo-800 text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="contact-item text-center">
            <img
              src="path-to-image"
              alt="Ramya Ranjan Behera"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Ramya Ranjan Behera</h3>
            <p>Competition Head</p>
            <p>ramya.abvyuday@gmail.com</p>
          </div>
          <div className="contact-item text-center">
            <img
              src="path-to-image"
              alt="Hardik Agrawal"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Hardik Agrawal</h3>
            <p>Competition Head</p>
            <p>hardik.abvyuday@gmail.com</p>
          </div>
        </div>
        <div className="social-links flex justify-center space-x-4 mb-8"> 
          {/* Add social media icons/links here */}
          {/* Example:
          <a href="#" className="text-white hover:text-blue-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          */}
        </div>
        <div className="reach-out text-center">
          <h3 className="text-xl font-semibold mb-2">REACH OUT</h3>
          <p>ABVyuday Office</p>
          <p>Student Activity Centre,</p>
          <p>IIT Bombay, Powai</p>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
