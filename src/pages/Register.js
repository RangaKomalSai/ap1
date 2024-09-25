import React, { useState } from "react";
import SectionHeading from "../components/SectionHeading.js";
import Footer from "../components/Footer.js";
import axios from "axios";
import toast from "react-hot-toast";

function Register() {
  const [formData, setFormData] = useState({
    teamName: "",
    teamLeaderName: "",
    phoneNumber: "",
    email: "",
    city: "",
    state: "",
    profession: "",
    actionPlanSource: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
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

    // Validate phone number
    const phoneNumberPattern = /^\d{10}$/;
    if (!phoneNumberPattern.test(formData.phoneNumber)) {
      // setErrorMessage("Contact number must be a 10-digit number");
      toast.error("Contact number must be a 10-digit number");

      return;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      toast.error(
        "Invalid email address. \nPlease enter a valid email address."
      );
      return;
    }

    setIsLoading(true);

    const promise = axios.post(
      "http://localhost:4002/api/register/register-team",
      formData
    );

    toast.promise(promise, {
      loading: "Registering...",
      success: <b>Registration successful!</b>,
      error: (
        <b>
          Error registering.
          <br /> Please try again.
        </b>
      ),
    });

    // Reset formData fields to empty after successful submission
    promise
      .then(() => {
        setFormData({
          teamName: "",
          teamLeaderName: "",
          phoneNumber: "",
          email: "",
          city: "",
          state: "",
          profession: "",
          actionPlanSource: "",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
    // console.log(formData);
  };

  return (
    <section className="action-plan-info bg-primary text-white py-16 font-montserrat">
      <div className="container mx-auto">
        <SectionHeading back_heading="REGISTER" main_heading="Register" />
        <div className="text-white p-10 rounded-md w-[60%] mx-auto">
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            data-aos="zoom-in"
          >
            <div>
              <label
                htmlFor="teamName"
                className="block text-sm font-medium mb-2"
              >
                Team Name:
              </label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                disabled={isLoading}
                value={formData.teamName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              />
            </div>
            <div>
              <label
                htmlFor="teamLeaderName"
                className="block text-sm font-medium mb-2"
              >
                Team Leader Name:
              </label>
              <input
                type="text"
                id="teamLeaderName"
                name="teamLeaderName"
                disabled={isLoading}
                value={formData.teamLeaderName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium mb-2"
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                disabled={isLoading}
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                disabled={isLoading}
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium mb-2">
                City:
              </label>
              <input
                type="text"
                id="city"
                name="city"
                disabled={isLoading}
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium mb-2">
                State:
              </label>
              <input
                type="text"
                id="state"
                name="state"
                disabled={isLoading}
                value={formData.state}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              />
            </div>
            <div>
              <label
                htmlFor="profession"
                className="block text-sm font-medium mb-2"
              >
                Profession:
              </label>
              <input
                type="text"
                id="profession"
                name="profession"
                disabled={isLoading}
                value={formData.profession}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              />
            </div>
            <div>
              <label
                htmlFor="actionPlanSource"
                className="block text-sm font-medium mb-2"
              >
                From where did you hear about Action Plan:
              </label>
              <input
                type="text"
                id="actionPlanSource"
                name="actionPlanSource"
                disabled={isLoading}
                value={formData.actionPlanSource}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              />
            </div>
            <div className="flex justify-center items-center w-full my-4 mr-32">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-[#41BDEE] hover:bg-blue-600 text-[20px] text-white font-extrabold py-2 mt-8 px-4 rounded-full text-lg"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="loader mr-2"></div>
                    REGISTERING...
                  </div>
                ) : (
                  "REGISTER"
                )}
              </button>
            </div>
          </form>
        </div>
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

export default Register;
