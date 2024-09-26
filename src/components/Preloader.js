// src/components/Preloader.js
import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/preloader.json"; // Replace with the actual path to your Lottie JSON

const Preloader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex items-center justify-center h-screen" style={{ pointerEvents: 'none' }}>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Preloader;
