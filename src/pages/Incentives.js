import React from "react";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";
import "./IncentivesSections/sections.css";
import Path from "../components/Path";

function Incentives() {
  return (
    <section className="action-plan-info bg-primary text-white py-16 font-montserrat">
      <div className="container mx-auto">
        <div className="mb-32">
          <SectionHeading back_heading="TIMELINE" main_heading="Timeline" />
          {/* <div className="grid grid-cols-4 gap-4 w-[80%] mx-auto">
            <div className="flex flex-col items-start">
              <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                <p className="incen-number">01</p>
              </div>
              <p className="text-white mt-2 text-start font-extrabold text-sm ">
                <p className="border-b-2 mb-2 pb-2">
                  Registrations start
                  <br />
                  Questionnaire Submission
                  <br />
                </p>
                28 Sept
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-white mt-2 text-start font-extrabold text-sm ">
                <p className="border-b-2 mb-2 pb-2">
                  Registrations start
                  <br />
                  Questionnaire Submission
                  <br />
                </p>
                28 Sept
              </p>
              <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                <p className="incen-number">02</p>
              </div>
              <p className="text-gray-600 mt-2 text-center font-extrabold text-sm">
                Workshops
                <br />
                30 Sept - 21 Oct
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                <p className="incen-number">03</p>
              </div>
              <p className="text-gray-600 mt-2 text-center font-extrabold text-sm">
                Registration Deadline
                <br />
                20 Oct
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                <p className="incen-number">04</p>
              </div>
              <p className="text-gray-600 mt-2 text-center font-extrabold text-sm">
                Round 1<br />
                Submission Deadline
                <br />4 Nov
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                <p className="incen-number">08</p>
              </div>
              <p className="text-gray-600 mt-2 text-center font-extrabold text-sm">
                Round 2<br />
                Submission Deadline
                <br />
                24 Dec
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                <p className="incen-number">07</p>
              </div>
              <p className="text-gray-600 mt-2 text-center font-extrabold text-sm">
                Advanced Workshop
                <br />
                15 Nov - 20 Dec
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                <p className="incen-number">06</p>
              </div>
              <p className="text-gray-600 mt-2 text-center font-extrabold text-sm">
                Mentor Allotment
                <br />
                15 Nov
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                <p className="incen-number">05</p>
              </div>
              <p className="text-gray-600 mt-2 text-center font-extrabold text-sm">
                Round 1 Results
                <br />
                11 Nov
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                <p className="incen-number">09</p>
              </div>
              <p className="text-gray-600 mt-2 text-center font-extrabold text-sm">
                Round 2 Results
                <br />
                31 Dec
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                <p className="incen-number">10</p>
              </div>
              <p className="text-gray-600 mt-2 text-center font-extrabold text-sm">
                Final Round
                <br />
                Submission
                <br />
                15 Jan
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                <p className="incen-number">11</p>
              </div>
              <p className="text-gray-600 mt-2 text-center font-extrabold text-sm">
                Final Closed Room
                <br />
                Pitching (Social Fest)
                <br />
                Jan 2024
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                <p className="incen-number">12</p>
              </div>
              <p className="text-gray-600 mt-2 text-center font-extrabold text-sm">
                Results
                <br />
                Feb 2024
              </p>
            </div>
          </div> */}

          {/* <div className=" p-8 w-[80%] h-screen flex flex-col justify-center mx-auto">
            <div className="flex flex-wrap justify-center">
              {timelineData.slice(0, 4).map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
            </div>
            <div className="flex flex-wrap justify-center">
              {timelineData.slice(4, 8).map((item, index) => (
                <TimelineItem key={index + 4} {...item} />
              ))}
            </div>
            <div className="flex flex-wrap justify-center">
              {timelineData.slice(8).map((item, index) => (
                <TimelineItem key={index + 8} {...item} />
              ))}
            </div>
          </div> */}

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
              width="1020"
              height="520"
              viewBox="0 0 1020 520"
              className="absolute top-14 left-0 w-full z-0"
            >
              <path
                d="M10 10 H1010 V510 H10"
                fill="none"
                stroke="#e0e0e0"
                strokeWidth="4"
              />
              <path
                d="M10 10 H1010 V510 H10"
                fill="none"
                stroke="#3498db"
                strokeWidth="4"
                className="animated-path"
              />
            </svg>
            {/* <svg
              className="absolute top-14 left-0 w-full h-2 z-0"
            >
              <line
                x1="0%"
                y1="50%"
                x2="150%"
                y2="50%"
                stroke="white"
                strokeWidth="4"
              />
              <path d="M 0, 50 L 100, 50 L 100, 150 L 200, 150" stroke="white" strokeWidth="4" />
            </svg> */}
            {/* <div class="glow-light"></div> */}
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
          <div className="w-[80%] mx-auto mt-4 flex justify-between items-start">
            <div className=" w-[20%]">
              <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                <p className="incen-number">08</p>
              </div>
            </div>
            <div className=" w-[20%]">
              <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                <p className="incen-number">07</p>
              </div>
            </div>
            <div className=" w-[20%]">
              <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                <p className="incen-number">06</p>
              </div>
            </div>
            <div className=" w-[20%]">
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
          <div className="w-[80%] mx-auto mt-4 flex justify-between items-start">
            <div className=" w-[20%]">
              <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                <p className="incen-number">09</p>
              </div>
            </div>
            <div className=" w-[20%]">
              <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                <p className="incen-number">10</p>
              </div>
            </div>
            <div className=" w-[20%]">
              <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                <p className="incen-number">11</p>
              </div>
            </div>
            <div className=" w-[20%]">
              <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
                <p className="incen-number">12</p>
              </div>
            </div>
          </div>
          <div className="w-[80%] mx-auto flex justify-between items-start">
            <div className="w-[20%]">
              <p className="text-white mt-2 text-start font-extrabold text-sm ">
                <p className="border-b-2 mb-2 pb-2 w-[60%]">Round 2 Results</p>
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
        <div>
          <SectionHeading
            back_heading="RULES"
            main_heading="Rules and Regulations"
          />
          <div className="w-[80%] mx-auto border-white rounded-xl border-4 p-4">
            <h2 className="text-center text-3xl mb-8 mt-4">
              Social Entrepreneurship Track
            </h2>
            <ol className="list-decimal list-outside w-[98%] pl-12">
              <li className="mb-4">
                Only registered startups will be allowed to participate in the
                Social Entrepreneurship Track.
              </li>
              <li className="mb-4">
                Any startup incorporated before 4 years of the conclusion of the
                competition i.e before January 2018 will not be allowed to
                participate.
              </li>
              <li className="mb-4">
                The startup should solve a critical social problem in an
                innovative as well as transformational manner and should have
                some quantifiable social return.
              </li>
              <li className="mb-4">
                There is no age restriction on any individual to participate.
                Anyone, from students to working professionals across the
                nation, can participate.
              </li>
              <li className="mb-4">
                Action Plan aims to promote startups that require assistance in
                funding, mentoring, etc. Therefore startups who have raised
                external funding i.e. funding from angel investors, venture
                capitalists, etc. cannot participate.
              </li>
              <li className="mb-4">
                Teams can have a maximum of 4 members including the Team leader.
                More than 4 is not allowed.
              </li>
              <li className="mb-4">
                The Team leader will be the point of contact and his/her email
                address will be used for future correspondence.
              </li>
              <li className="mb-4">
                The team must abide by timely instructions, guidelines and
                ethics provided by Abhyuday with general business ethics.
              </li>
              <li className="mb-4">
                Only the team leader has to register on the portal. He/She can
                later add his/her team members in the Questionnaire Submission
                form.
              </li>
              <li className="mb-4">
                Teams will be asked for proofs regarding any information
                provided by them. Failure to do so will lead to
                disqualification.
              </li>
              <li className="mb-4">
                You can participate in more than 1 track with different business
                ideas. One idea has to be registered in only one track. If you
                have a startup register for the 'Social Entrepreneurship Track'
                and if you only have an idea that can solve a social problem
                then don't register for this track and register for the 'Social
                Innovation Track'
              </li>
            </ol>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default Incentives;
