import React, { useState } from "react";
import Footer from "../components/Footer.js";
import ContactUs from "./HomeSections/ContactUs.js";
import SectionHeading from "../components/SectionHeading.js";
import axios from "axios";
import toast from "react-hot-toast";
import { API_URL } from "../utils/apiConfig.js";

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate empty fields
    let hasEmptyField = false;

    for (const key in formData) {
      if (!formData[key]) {
        hasEmptyField = true;
        break;
      }
    }

    if (hasEmptyField) {
      toast.error("Please fill out all fields");
      return;
    }
    setIsLoading(true);

    const promise = axios.post(`${API_URL}/api/email/send-email`, formData);

    toast.promise(promise, {
      loading: "Sending...",
      success: <b>Email sent successfully!</b>,
      error: <b>Couldn't send email!</b>,
    });

    // Reset formData fields to empty after successful submission
    promise
      .then(() => {
        setFormData({
          name: "",
          contactNumber: "",
          email: "",
          message: "",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section className="action-plan-info bg-primary text-white py-16 font-montserrat pt-[20vh]">
      <div className="container mx-auto">
        <SectionHeading back_heading="WRITE" main_heading="Write to us" />
        <form
          onSubmit={handleSubmit}
          className="mx-auto p-4 w-[80%] md:w-[60%] max-w-[600px] shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-bold mb-2 text-white"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              disabled={isLoading}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-bold mb-2 text-white"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              disabled={isLoading}
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="contactNumber"
              className="block text-sm font-bold mb-2 text-white"
            >
              Contact Number:
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              disabled={isLoading}
              value={formData.contactNumber}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-bold mb-2 text-white"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              disabled={isLoading}
              value={formData.message}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#41BDEE] hover:bg-blue-600 text-[14px] md:text-[20px] text-white font-extrabold py-2 px-4 rounded-md text-lg"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="loader mr-2"></div>
                  Sending...
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
        <ContactUs />
        <Footer />
      </div>
      <style jsx="true">
        {`
          .loader {
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid #fff;
            border-radius: 50%;
            width: 25px;
            height: 25px;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </section>
  );
}

export default ContactUsPage;
