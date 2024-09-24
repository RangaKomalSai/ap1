// pages/Home.js
import React,{useEffect} from "react";
import ActionPlanInfo from "./HomeSections/ActionPlanInfo";

import Testimonials from "./HomeSections/Testimonials";
import ContactUs from "./HomeSections/ContactUs";
import Footer from "../components/Footer";
import Component from "./HomeSections/sticky";
import ActionPlanSection from "./HomeSections/Ap";



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
       <ActionPlanSection/>
      <ActionPlanInfo />


 <Component/>
      <Testimonials />
      <ContactUs />
      <Footer/>
      <h1 className="bg-black text-center font-montserrat font-semibold">Made with ❤️ by RKS</h1>
    </div>
  );
}

export default Home;
