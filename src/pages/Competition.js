import React, { useState, useEffect } from "react";
import SectionHeading from "../components/SectionHeading.js";
import Footer from "../components/Footer.js";
import "./IncentivesSections/sections.css";
import Rules from "./IncentivesSections/Rules.js";

function Competition() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLineIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3500); // Change line every 2 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="action-plan-info bg-primary text-white py-16 font-montserrat">
      <div className="container mx-auto">
        <div className="mb-32">
          <SectionHeading back_heading="TIMELINE" main_heading="Timeline" />
          <div>
            <div className="w-[80%] mx-auto flex justify-between items-end">
              <div className="w-[20%]"></div>
              <div className="w-[20%]">
                <p className="text-white mt-2 text-start font-extrabold text-sm ">
                  <p className="border-b-2 mb-2 pb-2 w-[50%]">
                    Workshops
                    <br />
                  </p>
                  30 Sept - 21 Oct
                </p>
              </div>
              <div className="w-[20%]"></div>
              <div className="w-[20%]">
                <p className="text-white mt-2 text-start font-extrabold text-sm ">
                  <p className="border-b-2 mb-2 pb-2 w-[70%]">
                    Round 1 <br />
                    Submission Deadline
                    <br />
                  </p>
                  4 Nov
                </p>
              </div>
            </div>
            <div className="w-[80%] mx-auto mt-4 flex justify-between items-start relative">
              <svg
                className="absolute top-1/2 left-0 w-full h-1 z-0"
                style={{ transform: "translateY(-50%)" }}
              >
                <line
                  x1="0%"
                  y1="50%"
                  x2="28%"
                  y2="50%"
                  stroke="#e0e0e0"
                  strokeWidth="4"
                />
                <line
                  x1="28%"
                  y1="50%"
                  x2="56%"
                  y2="50%"
                  stroke="#e0e0e0"
                  strokeWidth="4"
                />
                <line
                  x1="56%"
                  y1="50%"
                  x2="84%"
                  y2="50%"
                  stroke="#e0e0e0"
                  strokeWidth="4"
                />
                <line
                  x1="84%"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                  stroke="#e0e0e0"
                  strokeWidth="4"
                />

                <line
                  x1="0%"
                  y1="50%"
                  x2="28%"
                  y2="50%"
                  stroke="#00FFFF"
                  strokeWidth="4"
                  className={`glow-line ${
                    activeLineIndex === 0 ? "active" : ""
                  }`}
                />
                <line
                  x1="28%"
                  y1="50%"
                  x2="56%"
                  y2="50%"
                  stroke="#00FFFF"
                  strokeWidth="4"
                  className={`glow-line ${
                    activeLineIndex === 1 ? "active" : ""
                  }`}
                />
                <line
                  x1="56%"
                  y1="50%"
                  x2="84%"
                  y2="50%"
                  stroke="#00FFFF"
                  strokeWidth="4"
                  className={`glow-line ${
                    activeLineIndex === 2 ? "active" : ""
                  }`}
                />
                <line
                  x1="84%"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                  stroke="#00FFFF"
                  strokeWidth="4"
                  className={`glow-line ${
                    activeLineIndex === 3 ? "active" : ""
                  }`}
                />
              </svg>
              <div className=" w-[20%] z-1 relative">
                <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                  <p className="incen-number">01</p>
                </div>
              </div>
              <div className=" w-[20%] z-1 relative">
                <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                  <p className="incen-number">02</p>
                </div>
              </div>
              <div className=" w-[20%] z-1 relative">
                <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                  <p className="incen-number">03</p>
                </div>
              </div>
              <div className=" w-[20%] z-1 relative">
                <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                  <p className="incen-number">04</p>
                </div>
              </div>
            </div>
            <div className="w-[80%] mx-auto flex justify-between items-start">
              <div className="w-[20%]">
                <p className="text-white mt-2 text-start font-extrabold text-sm ">
                  <p className="border-b-2 mb-2 pb-2 w-[90%]">
                    Registrations start
                    <br />
                    Questionnaire Submission
                  </p>
                  28 Sept
                </p>
              </div>
              <div className="w-[20%]"></div>
              <div className="w-[20%]">
                <p className="text-white mt-2 text-start font-extrabold text-sm ">
                  <p className="border-b-2 mb-2 pb-2 w-[70%]">
                    Registration Deadline
                    <br />
                  </p>
                  20 Oct
                </p>
              </div>
              <div className="w-[20%]"></div>
            </div>
          </div>
          <div>
            <div className="w-[80%] mx-auto flex justify-between items-end mt-12">
              <div className="w-[20%]"></div>
              <div className="w-[20%]">
                <p className="text-white mt-2 text-start font-extrabold text-sm ">
                  <p className="border-b-2 mb-2 pb-2 w-[70%]">
                    Advanced Workshop
                  </p>
                  15 Nov - 20 Dec
                </p>
              </div>
              <div className="w-[20%]"></div>
              <div className="w-[20%]">
                <p className="text-white mt-2 text-start font-extrabold text-sm ">
                  <p className="border-b-2 mb-2 pb-2 w-[60%]">
                    Round 1 Results
                    <br />
                  </p>
                  11 Nov
                </p>
              </div>
            </div>
            <div className="w-[80%] mx-auto mt-4 flex justify-between items-start relative">
              <svg
                className="absolute top-1/2 left-0 w-full h-1 z-0"
                style={{ transform: "translateY(-50%)" }}
              >
                <line
                  x1="-50%"
                  y1="50%"
                  x2="28%"
                  y2="50%"
                  stroke="#e0e0e0"
                  strokeWidth="4"
                />
                <line
                  x1="28%"
                  y1="50%"
                  x2="56%"
                  y2="50%"
                  stroke="#e0e0e0"
                  strokeWidth="4"
                />
                <line
                  x1="56%"
                  y1="50%"
                  x2="84%"
                  y2="50%"
                  stroke="#e0e0e0"
                  strokeWidth="4"
                />
                <line
                  x1="84%"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                  stroke="#e0e0e0"
                  strokeWidth="4"
                />

                <line
                  x1="-50%"
                  y1="50%"
                  x2="28%"
                  y2="50%"
                  stroke="#00FFFF"
                  strokeWidth="4"
                  className={`glow-line ${
                    activeLineIndex === 0 ? "active" : ""
                  }`}
                />
                <line
                  x1="28%"
                  y1="50%"
                  x2="56%"
                  y2="50%"
                  stroke="#00FFFF"
                  strokeWidth="4"
                  className={`glow-line ${
                    activeLineIndex === 1 ? "active" : ""
                  }`}
                />
                <line
                  x1="56%"
                  y1="50%"
                  x2="84%"
                  y2="50%"
                  stroke="#00FFFF"
                  strokeWidth="4"
                  className={`glow-line ${
                    activeLineIndex === 2 ? "active" : ""
                  }`}
                />
                <line
                  x1="84%"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                  stroke="#00FFFF"
                  strokeWidth="4"
                  className={`glow-line ${
                    activeLineIndex === 3 ? "active" : ""
                  }`}
                />
              </svg>
              <div className=" w-[20%] z-1 relative">
                <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                  <p className="incen-number">08</p>
                </div>
              </div>
              <div className=" w-[20%] z-1 relative">
                <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                  <p className="incen-number">07</p>
                </div>
              </div>
              <div className=" w-[20%] z-1 relative">
                <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                  <p className="incen-number">06</p>
                </div>
              </div>
              <div className=" w-[20%] z-1 relative">
                <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                  <p className="incen-number">05</p>
                </div>
              </div>
            </div>
            <div className="w-[80%] mx-auto flex justify-between items-start">
              <div className="w-[20%]">
                <p className="text-white mt-2 text-start font-extrabold text-sm ">
                  <p className="border-b-2 mb-2 pb-2 w-[70%]">
                    Round 2
                    <br />
                    Submission Deadline
                  </p>
                  24 Dec
                </p>
              </div>
              <div className="w-[20%]"></div>
              <div className="w-[20%]">
                <p className="text-white mt-2 text-start font-extrabold text-sm ">
                  <p className="border-b-2 mb-2 pb-2 w-[60%]">
                    Mentor Allotment
                    <br />
                  </p>
                  15 Nov
                </p>
              </div>
              <div className="w-[20%]"></div>
            </div>
          </div>
          <div>
            <div className="w-[80%] mx-auto flex justify-between items-end mt-12">
              <div className="w-[20%]"></div>
              <div className="w-[20%]">
                <p className="text-white mt-2 text-start font-extrabold text-sm ">
                  <p className="border-b-2 mb-2 pb-2 w-[50%]">
                    Final Round
                    <br />
                    Submission
                  </p>
                  15 Jan
                </p>
              </div>
              <div className="w-[20%]"></div>
              <div className="w-[20%]">
                <p className="text-white mt-2 text-start font-extrabold text-sm ">
                  <p className="border-b-2 mb-2 pb-2 w-[30%]">
                    Results
                    <br />
                  </p>
                  Feb 2024
                </p>
              </div>
            </div>
            <div className="w-[80%] mx-auto mt-4 flex justify-between items-start relative">
              <svg
                className="absolute top-1/2 left-0 w-full h-1 z-0"
                style={{ transform: "translateY(-50%)" }}
              >
                <line
                  x1="-50%"
                  y1="50%"
                  x2="28%"
                  y2="50%"
                  stroke="#e0e0e0"
                  strokeWidth="4"
                />
                <line
                  x1="28%"
                  y1="50%"
                  x2="56%"
                  y2="50%"
                  stroke="#e0e0e0"
                  strokeWidth="4"
                />
                <line
                  x1="56%"
                  y1="50%"
                  x2="84%"
                  y2="50%"
                  stroke="#e0e0e0"
                  strokeWidth="4"
                />
                <line
                  x1="84%"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                  stroke="#e0e0e0"
                  strokeWidth="4"
                />

                <line
                  x1="-50%"
                  y1="50%"
                  x2="28%"
                  y2="50%"
                  stroke="#00FFFF"
                  strokeWidth="4"
                  className={`glow-line ${
                    activeLineIndex === 0 ? "active" : ""
                  }`}
                />
                <line
                  x1="28%"
                  y1="50%"
                  x2="56%"
                  y2="50%"
                  stroke="#00FFFF"
                  strokeWidth="4"
                  className={`glow-line ${
                    activeLineIndex === 1 ? "active" : ""
                  }`}
                />
                <line
                  x1="56%"
                  y1="50%"
                  x2="84%"
                  y2="50%"
                  stroke="#00FFFF"
                  strokeWidth="4"
                  className={`glow-line ${
                    activeLineIndex === 2 ? "active" : ""
                  }`}
                />
                <line
                  x1="84%"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                  stroke="#00FFFF"
                  strokeWidth="4"
                  className={`glow-line ${
                    activeLineIndex === 3 ? "active" : ""
                  }`}
                />
              </svg>
              <div className=" w-[20%] z-1 relative">
                <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                  <p className="incen-number">09</p>
                </div>
              </div>
              <div className=" w-[20%] z-1 relative">
                <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                  <p className="incen-number">10</p>
                </div>
              </div>
              <div className=" w-[20%] z-1 relative">
                <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                  <p className="incen-number">11</p>
                </div>
              </div>
              <div className=" w-[20%] z-1 relative">
                <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                  <p className="incen-number">12</p>
                </div>
              </div>
            </div>
            <div className="w-[80%] mx-auto flex justify-between items-start">
              <div className="w-[20%]">
                <p className="text-white mt-2 text-start font-extrabold text-sm ">
                  <p className="border-b-2 mb-2 pb-2 w-[60%]">
                    Round 2 Results
                  </p>
                  31 Dec
                </p>
              </div>
              <div className="w-[20%]"></div>
              <div className="w-[20%]">
                <p className="text-white mt-2 text-start font-extrabold text-sm ">
                  <p className="border-b-2 mb-2 pb-2 w-[80%]">
                    Final Closed Room
                    <br />
                    Pitching ( Social Fest)
                  </p>
                  Jan 2024
                </p>
              </div>
              <div className="w-[20%]"></div>
            </div>
          </div>
        </div>
        <Rules />
        <Footer />
      </div>
    </section>
  );
}

export default Competition;
