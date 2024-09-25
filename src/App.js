// App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import Register from "./pages/Register.js";
import Incentives from "./pages/Incentives.js";
import ThreeJSScene from "./components/Globe.js";
import Faqs from "./pages/Faqs.js";
import ContactUs from "./pages/ContactUs.js";
// import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: false,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
    AOS.refresh();
  }, []);
  return (
    <Router>
      <div className="App bg-primary text-white min-h-screen">
        <Header /> {/* This remains static */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/incentives" element={<Incentives />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/globe" element={<ThreeJSScene />} />
        </Routes>
        {/* <Footer /> This also remains static */}
      </div>
    </Router>
  );
}

export default App;
