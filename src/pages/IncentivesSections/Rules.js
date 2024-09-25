import React from "react";
import SectionHeading from "../../components/SectionHeading.js";

function Rules() {
  return (
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
            The startup should solve a critical social problem in an innovative
            as well as transformational manner and should have some quantifiable
            social return.
          </li>
          <li className="mb-4">
            There is no age restriction on any individual to participate.
            Anyone, from students to working professionals across the nation,
            can participate.
          </li>
          <li className="mb-4">
            Action Plan aims to promote startups that require assistance in
            funding, mentoring, etc. Therefore startups who have raised external
            funding i.e. funding from angel investors, venture capitalists, etc.
            cannot participate.
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
            The team must abide by timely instructions, guidelines and ethics
            provided by Abhyuday with general business ethics.
          </li>
          <li className="mb-4">
            Only the team leader has to register on the portal. He/She can later
            add his/her team members in the Questionnaire Submission form.
          </li>
          <li className="mb-4">
            Teams will be asked for proofs regarding any information provided by
            them. Failure to do so will lead to disqualification.
          </li>
          <li className="mb-4">
            You can participate in more than 1 track with different business
            ideas. One idea has to be registered in only one track. If you have
            a startup register for the 'Social Entrepreneurship Track' and if
            you only have an idea that can solve a social problem then don't
            register for this track and register for the 'Social Innovation
            Track'
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Rules;
