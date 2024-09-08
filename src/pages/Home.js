// pages/Home.js
import React from "react";
import ActionPlanInfo from "./HomeSections/ActionPlanInfo";
import Benefits from "./HomeSections/Benefits";
import Testimonials from "./HomeSections/Testimonials";
import ContactUs from "./HomeSections/ContactUs";

function Home() {
  return (
    <div className="home">
      <ActionPlanInfo />
      <Benefits />
      <Testimonials />
      <ContactUs />
    </div>
  );
}

export default Home;
