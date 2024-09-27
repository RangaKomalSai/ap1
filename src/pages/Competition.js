import React, { useState, useEffect } from "react";
import SectionHeading from "../components/SectionHeading.js";
import Footer from "../components/Footer.js";
import "./IncentivesSections/sections.css";
import Rules from "./IncentivesSections/Rules.js";
import s1 from "../assets/s1.svg";
import s2 from "../assets/s2.svg";
import s3 from "../assets/s3.svg";
import s4 from "../assets/s4.svg";

function Competition() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLineIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3500); // Change line every 2 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="action-plan-info bg-primary text-white py-16 font-montserrat overflow-hidden pt-[20vh]">
      <div className="container mx-auto">
        <div className="mb-32">
          <div className="md:hidden bg-gradient-to-tr from-[#ffffff] to-[#2635BA] text-[#311B92] text-center font-extrabold px-2 py-2 rounded-lg w-[200px] h-[90px] mb-6 mx-auto">
            Social <br /> Entrepreneurship <br /> Track
          </div>
          <div class="grid md:grid-cols-5 grid-cols-[1fr_1.5fr] gap-2 mx-4 md:grid-rows-[1fr_100px] items-center justify-items-center">
            <div class="hidden md:block md:order-1 order-1"></div>
            <div class="hidden md:block order-2 md:order-6">
              <div className=" bg-gradient-to-tr from-[#ffffff] to-[#2635BA] text-[#311B92] text-center font-extrabold px-2 py-2 rounded-lg md:w-[200px] md:h-[90px] mb-2">
                Social <br /> Entrepreneurship <br /> Track
              </div>
            </div>
            <div class="order-3 md:order-2">
              <img
                src={s1}
                alt="Logo"
                className=""
                draggable="false"
                data-aos="fade-right"
              />
            </div>
            <div class="order-5 md:order-3">
              <img
                src={s2}
                alt="Logo"
                className=""
                draggable="false"
                data-aos="fade-down"
              />
            </div>
            <div class="order-7 md:order-4">
              <img
                src={s3}
                alt="Logo"
                className=""
                draggable="false"
                data-aos="fade-up"
              />
            </div>
            <div class="order-9 md:order-5">
              <img
                src={s4}
                alt="Logo"
                className=""
                draggable="false"
                data-aos="fade-left"
              />
            </div>
            <div class="order-4 md:order-7">
              <h2 className="text-center font-bold">
                Questionnaire submission
              </h2>
            </div>
            <div class="order-6 md:order-8">
              <h2 className="text-center font-bold">
                Mentor Allotment & Advanced Workshops
              </h2>
            </div>
            <div class="order-8 md:order-9">
              <h2 className="text-center font-bold">Video Pitch Submission</h2>
            </div>
            <div class="order-10 md:order-10">
              <h2 className="text-center font-bold">
                Offline Pitching at IIT Bombay
              </h2>
            </div>
          </div>
          <div className="hidden md:block border-gradient border-gradient-purple h-3 rounded-3xl"></div>
          <div className="md:hidden bg-gradient-to-tr from-[#ffffff] to-[#2635BA] text-[#311B92] text-center font-extrabold px-2 py-2 rounded-lg w-[200px] h-[90px] mb-6 mx-auto mt-8">
            Social <br /> Innovation <br /> Track
          </div>
          <div className="grid items-center justify-items-center grid-cols-[1fr_1.5fr] gap-2 mx-4 md:grid-rows-[1fr_100px] md:grid-cols-5 mb-12">
            <div className="hidden md:block md:order-1">
              <div className="bg-gradient-to-tr from-[#ffffff] to-[#2635BA] text-[#311B92] text-center font-extrabold px-2 py-2 rounded-lg w-[200px] h-[90px] mt-2">
                Social <br /> Innovation <br /> Track
              </div>
            </div>
            <div class="md:hidden order-1">
              <img
                src={s1}
                alt="Logo"
                className=""
                draggable="false"
                data-aos="fade-right"
              />
            </div>
            <div class="md:hidden order-3">
              <img
                src={s2}
                alt="Logo"
                className=""
                draggable="false"
                data-aos="fade-down"
              />
            </div>
            <div class="md:hidden order-5">
              <img
                src={s3}
                alt="Logo"
                className=""
                draggable="false"
                data-aos="fade-up"
              />
            </div>
            <div class="md:hidden order-7 font-bold">
              <img
                src={s4}
                alt="Logo"
                className=""
                draggable="false"
                data-aos="fade-up"
              />
            </div>
            <div className="md:order-2 order-2">
              <h2 className="text-center font-bold">Abstract submission</h2>
            </div>
            <div class="md:order-3 order-4">
              <h2 className="text-center font-bold">
                Mentor Allotment & Advanced Workshops
              </h2>
            </div>
            <div class="md:order-4 order-6">
              <h2 className="text-center font-bold">
                Progress Video Submission
              </h2>
            </div>
            <div class="md:order-5 order-8">
              <h2 className="text-center font-bold">
                Offline Idea Presentation at IIT Bombay
              </h2>
            </div>
          </div>
          <SectionHeading back_heading="TIMELINE" main_heading="Timeline" />

          <div className="relative p-8">
            <div className="grid grid-cols-2 grid-rows-12 md:grid-cols-4 md:grid-rows-9 gap-0 relative justify-items-center items-center">
              {/* First row horizontal line */}
              <div
                className="hidden md:block absolute top-[16.67%] left-[12.5%] right-[6.25%] h-1 bg-white"
                style={{ zIndex: 0 }}
              ></div>

              {/* Vertical line from first row to second row */}
              <div
                className="hidden md:block absolute top-[16.67%] right-[6.25%] w-1 bg-white h-[33.33%]"
                style={{ zIndex: 0 }}
              ></div>

              {/* Second row horizontal line */}
              <div
                className="hidden md:block absolute top-[50%] left-[6.25%] right-[6.25%] h-1 bg-white"
                style={{ zIndex: 0 }}
              ></div>

              {/* Vertical line from second row to third row */}
              <div
                className="hidden md:block absolute top-[50%] left-[6.25%] w-1 bg-white h-[33.33%]"
                style={{ zIndex: 0 }}
              ></div>

              {/* Third row horizontal line */}
              <div
                className="hidden md:block absolute top-[83.33%] left-[6.25%] right-[12.5%] h-1 bg-white"
                style={{ zIndex: 0 }}
              ></div>

              <div className="md:hidden absolute top-[4.16%] left-[25%] right-[1.5%] h-1 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-fuchsia-500 "></div>
              </div>
              <div className="md:hidden absolute top-[4.16%] right-[1.5%] w-1 h-[16.66%] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-fuchsia-500 via-cyan-500 to-fuchsia-500 "></div>
              </div>
              <div className="md:hidden absolute top-[20.83%] left-[1.5%] right-[1.5%] h-1 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-fuchsia-500 "></div>
              </div>
              <div className="md:hidden absolute top-[20.83%] left-[1.5%] w-1 h-[16.66%] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-fuchsia-500 via-cyan-500 to-fuchsia-500 "></div>
              </div>
              <div className="md:hidden absolute top-[37.48%] left-[1.5%] right-[1.5%] h-1 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-fuchsia-500 "></div>
              </div>
              <div className="md:hidden absolute top-[37.48%] right-[1.5%] w-1 h-[16.66%] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-fuchsia-500 via-cyan-500 to-fuchsia-500 "></div>
              </div>
              <div className="md:hidden absolute top-[54.14%] left-[1.5%] right-[1.5%] h-1 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-fuchsia-500 "></div>
              </div>
              <div className="md:hidden absolute top-[54.14%] left-[1.5%] w-1 h-[16.66%] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-fuchsia-500 via-cyan-500 to-fuchsia-500 "></div>
              </div>
              <div className="md:hidden absolute top-[70.8%] left-[1.5%] right-[1.5%] h-1 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-fuchsia-500 "></div>
              </div>
              <div className="md:hidden absolute top-[70.8%] right-[1.5%] w-1 h-[16.66%] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-fuchsia-500 via-cyan-500 to-fuchsia-500 "></div>
              </div>
              <div className="md:hidden absolute top-[87.46%] left-[12.5%] right-[1.5%] h-1 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-fuchsia-500 "></div>
              </div>

              {/* Animated gradient line */}
              <div className="hidden md:block absolute top-[16.67%] left-[12.5%] right-[6.25%] h-1 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-fuchsia-500 animate-move-gradient-1"></div>
              </div>
              <div className="hidden md:block absolute top-[16.67%] right-[6.25%] w-1 h-[33.33%] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-fuchsia-500 via-cyan-500 to-fuchsia-500 animate-move-gradient-2"></div>
              </div>
              <div className="hidden md:block absolute top-[50%] left-[6.25%] right-[6.25%] h-1 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-fuchsia-500 animate-move-gradient-3"></div>
              </div>
              <div className="hidden md:block absolute top-[50%] left-[6.25%] w-1 h-[33.33%] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-fuchsia-500 via-cyan-500 to-fuchsia-500 animate-move-gradient-4"></div>
              </div>
              <div className="hidden md:block absolute top-[83.33%] left-[6.25%] right-[12.5%] h-1 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-fuchsia-500 animate-move-gradient-5"></div>
              </div>

              <div className="hidden md:block md:col-start-1 md:row-start-1"></div>
              <div className="col-start-2 row-start-2 md:col-start-2 md:row-start-1 md:self-end self-start md:mt-2 mb-4 md:mb-0">
                <p className="text-white mt-2 text-start font-extrabold text-sm ">
                  <p className="border-b-2 mb-2 pb-2">
                    Workshops
                    <br />
                  </p>
                  30 Sept - 21 Oct
                </p>
              </div>
              <div className="hidden md:block col-start-2 row-start-4 md:col-start-3 md:row-start-1"></div>
              <div className="col-start-1 row-start-4 md:col-start-4 md:row-start-1 md:self-end md:mb-2 self-start md:mt-2 mb-4">
                <p className="text-white mt-2 text-start font-extrabold text-sm w-[70%] mx-auto ">
                  <p className="border-b-2 mb-2 pb-2">
                    Round 1 <br />
                    Submission Deadline
                    <br />
                  </p>
                  4 Nov
                </p>
              </div>
              <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-2 relative z-10">
                <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                  <p className="incen-number">01</p>
                </div>
              </div>
              <div className="col-start-2 row-start-1 md:col-start-2 md:row-start-2 relative z-10">
                <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                  <p className="incen-number">02</p>
                </div>
              </div>
              <div className="col-start-2 row-start-3 md:col-start-3 md:row-start-2 relative z-10">
                <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                  <p className="incen-number">03</p>
                </div>
              </div>
              <div className="col-start-1 row-start-3 md:col-start-4 md:row-start-2 relative z-10">
                <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                  <p className="incen-number">04</p>
                </div>
              </div>
              <div className="col-start-1 row-start-2 md:col-start-1 md:row-start-3 self-start md:mt-2 mb-4 md:mb-0">
                <p className="text-white mt-2 text-start font-extrabold text-sm w-[60%] mx-auto">
                  <p className="border-b-2 mb-2 pb-2 w-[90%]">
                    Registrations start &
                    <br />
                    Questionnaire Submission
                  </p>
                  28 Sept
                </p>
              </div>
              <div className="hidden md:block col-start-1 row-start-6 md:col-start-2 md:row-start-3"></div>
              <div className="col-start-2 row-start-4 md:col-start-3 md:row-start-3 mt-2 self-start md:mt-2 mb-4 md:mb-0">
                <p className="text-white mt-2 text-start font-extrabold text-sm w-[70%] mx-auto">
                  <p className="border-b-2 mb-2 pb-2">
                    Registration Deadline
                    <br />
                  </p>
                  20 Oct
                </p>
              </div>
              <div className="hidden md:block col-start-2 row-start-[10]  md:col-start-4 md:row-start-3"></div>
              <div className="col-start-1 row-start-[8]  md:col-start-1 md:row-start-4 md:self-end mb-2 self-start">
                <p className="text-white mt-2 text-start font-extrabold text-sm w-[70%] mx-auto">
                  <p className="border-b-2 mb-2 pb-2">
                    Round 2
                    <br />
                    Submission Deadline
                  </p>
                  24 Dec
                </p>
              </div>
              <div className="hidden md:block col-start-1 row-start-7 md:col-start-2 md:row-start-4"></div>
              <div className="col-start-2 row-start-6 md:col-start-3 md:row-start-4 md:self-end mb-2 self-start">
                <p className="text-white mt-2 text-start font-extrabold text-sm w-[85%] mx-auto">
                  <p className="border-b-2 mb-2 pb-2 self-start mt-2">
                    Mentor Allotment
                    <br />
                  </p>
                  15 Nov
                </p>
              </div>
              <div className="hidden md:block col-start-2 row-start-3 md:col-start-4 md:row-start-4"></div>
              <div className="col-start-1 row-start-[7] md:col-start-1 md:row-start-5 relative z-10">
                <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                  <p className="incen-number">08</p>
                </div>
              </div>
              <div className="col-start-2 row-start-[7] md:col-start-2 md:row-start-5 relative z-10">
                <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                  <p className="incen-number">07</p>
                </div>
              </div>
              <div className="col-start-2 row-start-5 md:col-start-3 md:row-start-5 relative z-10">
                <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                  <p className="incen-number">06</p>
                </div>
              </div>
              <div className="col-start-1 row-start-5 md:col-start-4 md:row-start-5 relative z-10">
                <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                  <p className="incen-number">05</p>
                </div>
              </div>
              <div className="hidden md:block col-start-1 row-start-[12] md:col-start-1 md:row-start-6"></div>
              <div className="col-start-2 row-start-[8] md:col-start-2 md:row-start-6 self-start md:mt-2">
                <p className="text-white mt-2 text-start font-extrabold text-sm w-[70%] mx-auto">
                  <p className="border-b-2 mb-2 pb-2">Advanced Workshop</p>
                  15 Nov - 20 Dec
                </p>
              </div>
              <div className="hidden md:block col-start-2 row-start-9 md:col-start-3 md:row-start-6"></div>
              <div className="col-start-1 row-start-6 md:col-start-4 md:row-start-6 self-start md:mt-2">
                <p className="text-white mt-2 text-start font-extrabold text-sm w-[90%] mx-auto">
                  <p className="border-b-2 mb-2 pb-2 ">
                    Round 1 Results
                    <br />
                  </p>
                  11 Nov
                </p>
              </div>
              <div className="hidden md:block col-start-2 row-start-[15] md:col-start-1 md:row-start-7"></div>
              <div className="col-start-1 row-start-[10] md:col-start-2 md:row-start-7 md:self-end mb-2 self-start">
                <p className="text-white mt-2 text-start font-extrabold text-sm w-[90%] mx-auto">
                  <p className="border-b-2 mb-2 pb-2">Round 2 Results</p>
                  31 Dec
                </p>
              </div>
              <div className="hidden md:block col-start-1 row-start-[18] md:col-start-3 md:row-start-7"></div>
              <div className="col-start-2 row-start-[12] md:col-start-4 md:row-start-7 md:self-end mb-2 self-start">
                <p className="text-white mt-2 text-start font-extrabold text-sm w-[60%] mx-auto">
                  <p className="border-b-2 mb-2 pb-2">
                    Final Closed Room
                    <br />
                    Pitching ( Social Fest)
                  </p>
                  Jan 2024
                </p>
              </div>
              <div className="col-start-1 row-start-[9] md:col-start-1 md:row-start-8 relative z-10">
                <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                  <p className="incen-number">09</p>
                </div>
              </div>
              <div className="col-start-2 row-start-[9] md:col-start-2 md:row-start-8 relative z-10">
                <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                  <p className="incen-number">10</p>
                </div>
              </div>
              <div className="col-start-2 row-start-[11] md:col-start-3 md:row-start-8 relative z-10">
                <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                  <p className="incen-number">11</p>
                </div>
              </div>
              <div className="col-start-1 row-start-[11] md:col-start-4 md:row-start-8 relative z-10">
                <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                  <p className="incen-number">12</p>
                </div>
              </div>
              <div className="col-start-2 row-start-[10] md:col-start-1 md:row-start-9 self-start mt-2">
                <p className="text-white mt-2 text-start font-extrabold text-sm ">
                  <p className="border-b-2 mb-2 pb-2">
                    Final Round
                    <br />
                    Submission
                  </p>
                  15 Jan
                </p>
              </div>
              <div className="hidden md:block col-start-2 row-start-[16] md:col-start-2 md:row-start-9"></div>
              <div className="col-start-1 row-start-[12] md:col-start-3 md:row-start-9 self-start md:mt-2">
                <p className="text-white mt-2 text-start font-extrabold text-sm ">
                  <p className="border-b-2 mb-2 pb-2">
                    Results
                    <br />
                  </p>
                  Feb 2024
                </p>
              </div>
              <div className="hidden md:block col-start-1 row-start-[13] md:col-start-4 md:row-start-9"></div>
            </div>
          </div>
        </div>
        <Rules />
        <Footer />
      </div>
      <style jsx="true">{`
        .border-gradient {
          border: 5px solid;
          border-image-slice: 1;
          border-width: 5px;
        }
        .border-gradient-purple {
          border-image-source: linear-gradient(
            to left,
            #34a0db,
            #2f208d,
            #5508ff
          );
        }
        .div1 {
          grid-area: 2 / 1 / 3 / 2;
        }
        .div2 {
          grid-area: 1 / 2 / 2 / 3;
        }
        .div3 {
          grid-area: 1 / 3 / 2 / 4;
        }
        .div4 {
          grid-area: 1 / 4 / 2 / 5;
        }
        .div5 {
          grid-area: 1 / 5 / 2 / 6;
        }
        .div6 {
          grid-area: 2 / 2 / 3 / 3;
        }
        .div7 {
          grid-area: 2 / 3 / 3 / 4;
        }
        .div8 {
          grid-area: 2 / 4 / 3 / 5;
        }
        .div9 {
          grid-area: 2 / 5 / 3 / 6;
        }
      `}</style>
    </section>
  );
}

export default Competition;
