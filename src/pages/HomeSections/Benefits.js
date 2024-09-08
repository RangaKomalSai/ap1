// components/Benefits.js
import React from "react";
import SectionHeading from "../../components/SectionHeading";

function Benefits() {
  return (
    <section className="benefits bg-primary font-montserrat text-white py-16">
      <div className="container mx-auto">
        <SectionHeading
          back_heading="DEVELOP"
          main_heading="What's in it for you?"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="benefit-item p-6 bg-indigo-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Upto Rs. Cash Prizes, Private Equity
            </h3>
            <p>
              A chance to win hefty cash prizes and exciting incentives that
              drive your social innovation forward
            </p>
          </div>
          <div className="benefit-item p-6 bg-indigo-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Networking Opportunities
            </h3>
            <p>
              Opportunity to network with Action Plan's eminent partner base
              spread across the globe
            </p>
          </div>
          <div className="benefit-item p-6 bg-indigo-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Mentoring Support</h3>
            <p>
              Gain personalized guidance from seasoned mentors to nurture your
              social entrepreneurship journey
            </p>
          </div>
          <div className="benefit-item p-6 bg-indigo-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Exclusive Workshops</h3>
            <p>
              Series of exclusive and interesting workshops in both Round 1 and
              Round 2 by leading masters of the field
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
