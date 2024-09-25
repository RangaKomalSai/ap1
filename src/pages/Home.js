// pages/Home.js
import React from "react";
import ActionPlanInfo from "./HomeSections/ActionPlanInfo.js";
import Benefits from "./HomeSections/Benefits.js";
import Testimonials from "./HomeSections/Testimonials.js";
import ContactUs from "./HomeSections/ContactUs.js";
import Footer from "../components/Footer.js";

function Home() {
  return (
    <div className="home">
      <ActionPlanInfo />
      <Benefits />
      {/* <Testimonials /> */}
      <ContactUs />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
