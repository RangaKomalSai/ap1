// pages/Home.js
import React from "react";
import ActionPlanInfo from "./HomeSections/ActionPlanInfo";
import Benefits from "./HomeSections/Benefits";
import Testimonials from "./HomeSections/Testimonials";
import ContactUs from "./HomeSections/ContactUs";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home">
      <ActionPlanInfo />
      <Benefits />
      <Testimonials />
      <ContactUs />
      <Footer/>
    </div>
  );
}

export default Home;
