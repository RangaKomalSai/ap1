// pages/Home.js
import React, { useEffect } from "react";
import ActionPlanInfo from "./HomeSections/ActionPlanInfo";
import Benefits from "./HomeSections/Benefits";
import Testimonials from "./HomeSections/Testimonials";
import ContactUs from "./HomeSections/ContactUs";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();

  useEffect(() => {
    // Check if the URL has the #contact hash
    if (location.hash === "#contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        // Smoothly scroll to the #contact section
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="home">
      <ActionPlanInfo />
      <Benefits />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
