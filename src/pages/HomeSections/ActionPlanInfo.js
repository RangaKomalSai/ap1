// components/ActionPlanInfo.js
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ap from "../../assets/ap.svg";
import apsub from "../../assets/apsub.svg";
import "./sections.css";
import SectionHeading from "../../components/SectionHeading.js";

function ActionPlanInfo() {
  const [entries, setEntries] = useState(0);
  const [prizes, setPrizes] = useState(0);
  const [mentors, setMentors] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // Track whether animation has started
  const statsRef = useRef(null);

  // Function to start the counting animation
  const startCountingAnimation = () => {
    if (!hasAnimated) {
      setHasAnimated(true); // Ensure the animation runs only once

      // Counting animation for entries
      const targetEntries = 2000;
      const incrementEntries = targetEntries / 100;
      const countUpEntries = setInterval(() => {
        setEntries((prev) => {
          if (prev >= targetEntries) {
            clearInterval(countUpEntries);
            return targetEntries;
          }
          return prev + incrementEntries;
        });
      }, 30);

      // Counting animation for prizes
      const targetPrizes = 7.5; // 7.5 million INR
      const incrementPrizes = targetPrizes / 100;
      const countUpPrizes = setInterval(() => {
        setPrizes((prev) => {
          if (prev >= targetPrizes) {
            clearInterval(countUpPrizes);
            return targetPrizes;
          }
          return prev + incrementPrizes;
        });
      }, 40);

      // Counting animation for mentors
      const targetMentors = 100;
      const incrementMentors = targetMentors / 100;
      const countUpMentors = setInterval(() => {
        setMentors((prev) => {
          if (prev >= targetMentors) {
            clearInterval(countUpMentors);
            return targetMentors;
          }
          return prev + incrementMentors;
        });
      }, 20);
    }
  };

  // Set up Intersection Observer to trigger the animation when the stats come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCountingAnimation();
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the stats container is visible
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current); // Cleanup the observer on component unmount
      }
    };
  }, [hasAnimated]);

  return (
    <section className="action-plan-info bg-primary text-white py-16 font-montserrat">
      <div className="container mx-auto text-center">
        <div
          className="flex flex-col justify-start items-end w-[60%] h-[70vh]"
          id="top"
        >
          <img
            src={ap}
            alt="Logo"
            className="h-64 w-auto"
            draggable="false"
            data-aos="fade-right"
          />{" "}
          <img
            src={apsub}
            alt="Logo"
            className="h-24 w-auto"
            draggable="false"
            data-aos="fade-right"
            data-aos-delay="200"
          />{" "}
          <div className="flex justify-end items-center w-full my-4 mr-32">
            <Link to="/register">
              <button
                className="bg-[#41BDEE] hover:bg-blue-600 text-[20px] text-white font-extrabold py-2 px-4 rounded-full text-lg"
                data-aos="zoom-in-up"
              >
                REGISTER NOW
              </button>
            </Link>
          </div>
        </div>

        <div className="relative bg-white text-black py-16 content font-montserrat">
          <div className="container mx-auto flex flex-col justify-center items-center my-8">
            <SectionHeading
              back_heading="ACTION PLAN"
              main_heading="What is Action Plan?"
              light={true}
            />
            <p
              className="mb-8 max-w-3xl mx-auto text-[#311B92] font-semibold"
              data-aos="fade-up"
            >
              Action Plan, the Flagship Social Entrepreneurship Competition of
              Abhyuday, IIT Bombay, empowers young minds to tackle grass root
              level problems and design a sustainable business model for them.
              Teams progress through transformative stages, from ideation to
              execution, guided by industry experts and investors. Since 2013,
              Action Plan has driven growth and is poised to become Asia's
              premier Social Entrepreneurship Platform.
            </p>
            <div
              className="stats flex justify-center space-x-12 mb-8"
              ref={statsRef}
            >
              <div className="stat">
                <div className="text-4xl font-bold text-heading mb-2">
                  {Math.floor(entries)}+
                </div>
                <div className="text-[#5ED2FF] font-extrabold text-[20px]">
                  ENTRIES
                </div>
              </div>
              <div className="stat">
                <div className="text-4xl font-bold text-heading mb-2">
                  INR {prizes.toFixed(1)} Mn+
                </div>
                <div className="text-[#5ED2FF] font-extrabold text-[20px]">
                  PRIZES WORTH
                </div>
              </div>
              <div className="stat">
                <div className="text-4xl font-bold text-heading mb-2">
                  {Math.floor(mentors)}+
                </div>
                <div className="text-[#5ED2FF] font-extrabold text-[20px]">
                  MENTORS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActionPlanInfo;
