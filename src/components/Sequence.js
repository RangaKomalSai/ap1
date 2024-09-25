import React, { useState, useEffect } from "react";

export default function Component() {
  const [activeLineIndex, setActiveLineIndex] = useState(-1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLineIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000); // Change line every 2 seconds

    return () => clearInterval(timer);
  }, []);

  const numbers = ["01", "02", "03", "04"];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="relative flex justify-between items-center w-full max-w-4xl">
        {numbers.map((number, index) => (
          <div key={index} className="w-[20%] z-10 relative">
            <div className="bg-white rounded-md font-bold text-[64px] p-2 h-[110px] w-[110px] text-center incen-cont">
              <p className="incen-number">{number}</p>
            </div>
          </div>
        ))}
        <svg
          className="absolute top-1/2 left-0 w-full h-1"
          style={{ transform: "translateY(-50%)" }}
        >
          {[0, 1, 2].map((index) => (
            <line
              key={index}
              x1={`${0 + index * 25}%`}
              y1="50%"
              x2={`${50 + index * 25}%`}
              y2="50%"
              stroke="#e0e0e0"
              strokeWidth="4"
            />
          ))}
          {[0, 1, 2].map((index) => (
            <line
              key={`glow-${index}`}
              x1={`${25 + index * 25}%`}
              y1="50%"
              x2={`${50 + index * 25}%`}
              y2="50%"
              stroke="#3498db"
              strokeWidth="4"
              className={`glow-line ${
                activeLineIndex === index ? "active" : ""
              }`}
            />
          ))}
        </svg>
      </div>
      <style jsx>{`
        @keyframes glowAnimation {
          0% {
            stroke-dashoffset: 100%;
            opacity: 0;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
        .glow-line {
          stroke-dasharray: 100%;
          stroke-dashoffset: 100%;
          opacity: 0;
        }
        .glow-line.active {
          animation: glowAnimation 2s linear forwards;
        }
      `}</style>
    </div>
  );
}
