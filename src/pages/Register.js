import React, { useState } from "react";
import {Link} from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";

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

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle form submission, e.g., send data to a server
    console.log(formData);
  };

  return (
    <section className="action-plan-info bg-primary text-white py-16 font-montserrat">
      <div className="container mx-auto">
        <SectionHeading back_heading="REGISTER" main_heading="Register" />
        <div className="text-white p-10 rounded-md w-[60%] mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4" data-aos="zoom-in">
            <div>
              <label htmlFor="teamName" className="block text-sm font-medium mb-2" >
                Team Name:
              </label>
              <input
                type="text"
                id="teamName"
                name="teamName"
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
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2" >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium mb-2" >
                City:
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium mb-2" >
                State:
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              />
            </div>
            <div>
              <label htmlFor="profession" className="block text-sm font-medium mb-2" >
                Profession:
              </label>
              <input
                type="text"
                id="profession"
                name="profession"
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
                value={formData.actionPlanSource}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              />
            </div>
            <div className="flex justify-center items-center w-full my-4 mr-32">
            <Link to="/register">
              <button
                className="bg-[#41BDEE] hover:bg-blue-600 text-[20px] text-white font-extrabold py-2 mt-8 px-4 rounded-full text-lg"
                data-aos="zoom-in-up"
              >
                REGISTER NOW
              </button>
            </Link>
          </div>
          </form>
        </div>
        <Footer/>
      </div>
    </section>
  );
}

export default Register;
