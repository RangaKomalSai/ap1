// import React from "react";

// function Incentives() {
//   return (
//     <section>
//       <svg viewBox="0 0 1320 300" className="thissvg">
//         <text x="50%" y="50%" dy=".25em" text-anchor="middle">
//           COMING SOON
//         </text>
//       </svg>
//       <style jsx="true">{`
//         .thissvg {
//           font-family: "Plante", sans-serif;
//           position: absolute;
//           width: 100%;
//           height: 100%;
//         }

//         .thissvg text {
//           text-transform: uppercase;
//           animation: stroke 5s infinite alternate;
//           stroke-width: 1;
//           stroke: #d3d3d3;
//           font-size: clamp(6rem, 10vw, 10rem);
//         }

//         @keyframes stroke {
//           0% {
//             fill: #f3f3f300;
//             stroke: #fcfcfc;
//             stroke-dashoffset: 25%;
//             stroke-dasharray: 0 50%;
//             stroke-width: 1;
//           }
//           70% {
//             fill: #fcfcfc00;
//             stroke: #fcfcfc;
//           }
//           80% {
//             fill: #fcfcfc00;
//             stroke: #fcfcfc;
//             stroke-width: 2;
//           }

//           100% {
//             stroke-dashoffset: -25%;
//             stroke-dasharray: 50% 0;
//             stroke-width: 2;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// export default Incentives;

import aws from "../assets/incentives/aws.jpg";
import github from "../assets/incentives/Github.png";
// import bgImage from "../assets/incentives/bg.png";
import pay from "../assets/incentives/Paytm.png";
import notio from "../assets/incentives/Notion.png";
import raz from "../assets/incentives/Razorpay.png";
import shot from "../assets/incentives/shorter loop.png";
import msg from "../assets/incentives/msg91.jpeg";
import fresh from "../assets/incentives/Freshworks.png";
import twilo from "../assets/incentives/Twilio-Logo.png";
import hubs from "../assets/incentives/HubSpot.png";
import { PinContainer } from "./IncentivesSections/Pin.js";
import SectionHeading from "../components/SectionHeading.js";
import Footer from "../components/Footer.js";
// Projects Data
export const projects = [
  {
    id: 1,
    title: "AWS",
    des: "Access to exclusive credits and comprehensive support worth over 5,000 USD each to all the finalists",
    img: aws,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://www.abhyudayiitb.org/",
  },
  {
    id: 2,
    title: " GITHUB",
    des: " 20 seats of GitHub Enterprise free for 1st year, 50% off for the second year.",
    img: github,
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://www.abhyudayiitb.org/",
  },
  {
    id: 3,
    title: " Paytm",
    des: " Over INR 1 Lakh Payment Gateway credits to top startups",
    img: pay,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://www.abhyudayiitb.org/",
  },
  {
    id: 4,
    title: " Notion",
    des: " 1000 USD Credits each for the Enterprise plan to top finalists",
    img: notio,
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://www.abhyudayiitb.org/",
  },

  {
    id: 5,
    title: " Razorpay",
    des: "Per year credits worth 1 Lakh on Payment Gateway to top startups",
    img: raz,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "",
  },
  {
    id: 6,
    title: " MSG91",
    des: " Credits worth INR 25000 for messaging/email solutions",
    img: msg,
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://www.abhyudayiitb.org/",
  },
  {
    id: 7,
    title: " Freshworks",
    des: " 4000 USD Credits of Freshworks CRM to top startups ",
    img: fresh,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://www.abhyudayiitb.org/",
  },
  {
    id: 8,
    title: "  Twilio-segment",
    des: " 1000 USD Credits each for the Enterprise plan to top finalists",
    img: twilo,
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://www.abhyudayiitb.org/",
  },

  {
    id: 9,
    title: " Shorterloop",
    des: " 4 month free trial for all the round 1 qualifiers and additional 50% discount to the winners worth USD 3000",
    img: shot,
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://www.abhyudayiitb.org/",
  },
  {
    id: 10,
    title: " Hubspot",
    des: " 4 month free trial for all the round 1 qualifiers and additional 50% discount to the winners worth USD 3000",
    img: hubs,
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://www.abhyudayiitb.org/",
  },
];

const RecentProjects = () => {
  return (
    <section className="bg-primary text-white py-16 font-montserrat pt-[20vh] text-center">
      <SectionHeading back_heading="INCENTIVES" main_heading="Incentives" />
      <div className="pb-20 font-montserrat">
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {projects.map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
            >
              <PinContainer title={item.title} href={item.link} className="hover:line-clamp-3">
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 bg-white lg:rounded-3xl">
                  {/* <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <img src={bgImage} alt="Background Image" />
                </div> */}
                  <div className="w-full h-full z-10 absolute flex justify-center items-center img-container">
                    <img
                      src={item.img}
                      alt={`${item.title} cover`}
                      className=""
                    />
                  </div>
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 hover:line-clamp-3"
                  style={{ color: "#BEC1DD", margin: "1vh 0" }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3"></div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default RecentProjects;

// PinContainer Component (Assumed it's in the same directory)
