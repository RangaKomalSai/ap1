import React, { useState, useEffect, useRef } from "react";
import "./sections.css";
import SectionHeading from "../../components/SectionHeading.js";

function ActionPlanInfo() {
  const [entries, setEntries] = useState(0);
  const [prizes, setPrizes] = useState(0);
  const [mentors, setMentors] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); 
  const statsRef = useRef(null);

  const startCountingAnimation = () => {
    if (!hasAnimated) {
      setHasAnimated(true);

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

      const targetPrizes = 7.5; 
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
        threshold: 0.5, 
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section className="action-plan-info bg-primary text-white py-16 font-montserrat">
      <div className="container mx-auto text-center px-4 md:px-0">
        <div className="relative bg-white text-black py-12 md:py-16 content font-montserrat">
          <div className="container mx-auto flex flex-col justify-center items-center my-8">
            <SectionHeading
              back_heading="ACTION PLAN"
              main_heading="What is Action Plan?"
              light={true}
            />
            <p
              className="mb-8 max-w-3xl mx-auto text-[#311B92] font-semibold text-base md:text-lg lg:text-xl"
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
              className="stats flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-12 mb-8"
              ref={statsRef}
            >
              <div className="stat">
                <div className="text-4xl font-bold text-heading mb-2">
                  {Math.floor(entries)}+
                </div>
                <div className="text-[#5ED2FF] font-extrabold text-[16px] md:text-[20px]">
                  ENTRIES
                </div>
              </div>
              <div className="stat">
                <div className="text-4xl font-bold text-heading mb-2">
                  INR {prizes.toFixed(1)} Mn+
                </div>
                <div className="text-[#5ED2FF] font-extrabold text-[16px] md:text-[20px]">
                  PRIZES WORTH
                </div>
              </div>
              <div className="stat">
                <div className="text-4xl font-bold text-heading mb-2">
                  {Math.floor(mentors)}+
                </div>
                <div className="text-[#5ED2FF] font-extrabold text-[16px] md:text-[20px]">
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
