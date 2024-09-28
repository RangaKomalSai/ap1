// // components/ActionPlanInfo.js
// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import ap from "../../assets/ap.svg";
// import "./sections.css";
// import SectionHeading from "../../components/SectionHeading.js";
// import Preloader from "../../components/Preloader.js";
// import GridGlobe from "../../components/Globe/GridGlobe.tsx";

// function ActionPlanInfo() {
//   const [entries, setEntries] = useState(0);
//   const [prizes, setPrizes] = useState(0);
//   const [mentors, setMentors] = useState(0);
//   const [hasAnimated, setHasAnimated] = useState(false); // Track whether animation has started
//   const statsRef = useRef(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulating loading of 3D assets or other heavy content
//     const loadAssets = async () => {
//       // Simulate a delay for loading assets like 3D elements
//       await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated load time, replace with actual asset loading
//       setIsLoading(false); // Set loading to false when assets are loaded
//     };

//     loadAssets();
//   }, []);

//   // Function to start the counting animation
//   const startCountingAnimation = () => {
//     if (!hasAnimated) {
//       setHasAnimated(true); // Ensure the animation runs only once

//       // Counting animation for entries
//       const targetEntries = 2000;
//       const incrementEntries = targetEntries / 100;
//       const countUpEntries = setInterval(() => {
//         setEntries((prev) => {
//           if (prev >= targetEntries) {
//             clearInterval(countUpEntries);
//             return targetEntries;
//           }
//           return prev + incrementEntries;
//         });
//       }, 30);

//       // Counting animation for prizes
//       const targetPrizes = 7.5; // 7.5 million INR
//       const incrementPrizes = targetPrizes / 100;
//       const countUpPrizes = setInterval(() => {
//         setPrizes((prev) => {
//           if (prev >= targetPrizes) {
//             clearInterval(countUpPrizes);
//             return targetPrizes;
//           }
//           return prev + incrementPrizes;
//         });
//       }, 40);

//       // Counting animation for mentors
//       const targetMentors = 100;
//       const incrementMentors = targetMentors / 100;
//       const countUpMentors = setInterval(() => {
//         setMentors((prev) => {
//           if (prev >= targetMentors) {
//             clearInterval(countUpMentors);
//             return targetMentors;
//           }
//           return prev + incrementMentors;
//         });
//       }, 20);
//     }
//   };

//   // Set up Intersection Observer to trigger the animation when the stats come into view
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             startCountingAnimation();
//           }
//         });
//       },
//       {
//         threshold: 0.6, // Trigger when 50% of the stats container is visible
//       }
//     );

//     if (statsRef.current) {
//       observer.observe(statsRef.current);
//     }

//     return () => {
//       if (statsRef.current) {
//         observer.unobserve(statsRef.current); // Cleanup the observer on component unmount
//       }
//     };
//   }, [hasAnimated]);

//   if (isLoading) {
//     return <Preloader />;
//   }

//   return (
//     <section className="action-plan-info bg-primary text-white py-16 font-montserrat pt-[20vh]">
//       <div className="container mx-auto text-center relative">
//         <div className="absolute inset-0 z-0 md:hidden opacity-80">
//           <GridGlobe />
//         </div>
//         <div className="hidden md:block absolute -top-48 right-0 z-0 md:right-10 lg:right-20 w-[60%]">
//           <GridGlobe />
//         </div>
//         <div className="container mx-auto text-center flex flex-wrap items-center justify-between h-[70vh] max-w-full px-4 relative z-10">
//           <div
//             className="flex flex-col justify-start items-center md:items-end w-full md:w-[60%] min-h-[40vh] md:h-[70vh]"
//             id="top"
//           >
//             <img
//               src={ap}
//               alt="Logo"
//               className="md:h-80 md:w-auto w-[90%] h-auto"
//               draggable="false"
//               data-aos="fade-right"
//             />
//             <div className="flex justify-center md:justify-end items-center w-full my-4 md:mr-32">
//               <Link to="/register">
//                 <button
//                   className="bg-[#41BDEE] hover:bg-blue-600 text-[20px] md:text-[24px] text-white font-extrabold py-2 px-4 mt-10 md:mt-0 rounded-full text-lg"
//                   data-aos="zoom-in-up"
//                 >
//                   REGISTER NOW
//                 </button>
//               </Link>
//             </div>
//           </div>
//           {/* 
//           <div className="hidden md:block w-full md:w-[50%] mt-2 md:mt-0">
//             <GridGlobe />
//           </div> */}
//         </div>

//         <div className="relative bg-white text-black py-16 content font-montserrat">
//           <div className="container mx-auto flex flex-col justify-center items-center mt-8 md:my-8">
//             <SectionHeading
//               back_heading="ACTION PLAN"
//               main_heading="What is Action Plan?"
//               light={true}
//             />
//             <p
//               className="mb-8 text-sm mx-6 md:max-w-3xl md:mx-auto text-[#311B92] font-semibold"
//               data-aos="fade-up"
//             >
//               Action Plan, the Flagship Social Entrepreneurship Competition of
//               Abhyuday, IIT Bombay, empowers young minds to tackle grass root
//               level problems and design a sustainable business model for them.
//               Teams progress through transformative stages, from ideation to
//               execution, guided by industry experts and investors. Since 2013,
//               Action Plan has driven growth and is poised to become Asia's
//               premier Social Entrepreneurship Platform.
//             </p>
//             <div
//               className="stats grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-8 mx-6 md:mx-auto"
//               ref={statsRef}
//             >
//               <div className="stat">
//                 <div className="text-2xl md:text-4xl font-bold text-heading md:mb-2">
//                   {Math.floor(entries)}+
//                 </div>
//                 <div className="text-[#5ED2FF] font-extrabold text-[20px]">
//                   ENTRIES
//                 </div>
//               </div>
//               <div className="stat">
//                 <div className="text-2xl md:text-4xl font-bold text-heading md:mb-2">
//                   INR {prizes.toFixed(1)} Mn+
//                 </div>
//                 <div className="text-[#5ED2FF] font-extrabold text-[20px]">
//                   PRIZES WORTH
//                 </div>
//               </div>
//               <div className="stat">
//                 <div className="text-2xl md:text-4xl font-bold text-heading md:mb-2">
//                   {Math.floor(mentors)}+
//                 </div>
//                 <div className="text-[#5ED2FF] font-extrabold text-[20px]">
//                   MENTORS
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ActionPlanInfo;

// components/ActionPlanInfo.js
import React, { useState, useEffect, useRef } from "react";
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
      const targetEntries = 3000;
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
        threshold: 0.6, // Trigger when 50% of the stats container is visible
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
        <div className="relative bg-white text-black py-16 content font-montserrat">
          <div className="container mx-auto flex flex-col justify-center items-center mt-8 md:my-8">
            <SectionHeading
              back_heading="ACTION PLAN"
              main_heading="What is Action Plan?"
              light={true}
            />
            <p
              className="mb-8 text-sm mx-6 md:max-w-3xl md:mx-auto text-[#311B92] font-semibold"
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
              className="stats grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-8 mx-6 md:mx-auto"
              ref={statsRef}
            >
              <div className="stat">
                <div className="text-2xl md:text-4xl font-bold text-heading md:mb-2">
                  {Math.floor(entries)}+
                </div>
                <div className="text-[#5ED2FF] font-extrabold text-[20px]">
                  ENTRIES
                </div>
              </div>
              <div className="stat">
                <div className="text-2xl md:text-4xl font-bold text-heading md:mb-2">
                  INR {prizes.toFixed(1)} Mn+
                </div>
                <div className="text-[#5ED2FF] font-extrabold text-[20px]">
                  PRIZES WORTH
                </div>
              </div>
              <div className="stat">
                <div className="text-2xl md:text-4xl font-bold text-heading md:mb-2">
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