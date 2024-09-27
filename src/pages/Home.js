// pages/Home.js
import React, { useState,useEffect } from "react";
import ActionPlanInfo from "./HomeSections/ActionPlanInfo.js";
import Benefits from "./HomeSections/Benefits.js";
import Testimonials from "./HomeSections/Testimonials.js";
import ContactUs from "./HomeSections/ContactUs.js";
import Footer from "../components/Footer.js";
import Hero from "./HomeSections/Hero.js";
import Preloader from "../components/Preloader.js";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating loading of 3D assets or other heavy content
    const loadAssets = async () => {
      // Simulate a delay for loading assets like 3D elements
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated load time, replace with actual asset loading
      setIsLoading(false); // Set loading to false when assets are loaded
    };

    loadAssets();
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="home">
      <Hero />
      <ActionPlanInfo />
      <Benefits />
      {/* <Testimonials /> */}
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
