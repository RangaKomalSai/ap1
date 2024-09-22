import React from "react";

export default function Path() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 f">
      <svg width="1020" height="520" viewBox="0 0 1020 520" className="absolute top-14 left-0 w-full z-0">
        <path
          d="M10 10 H1010 V510 H10"
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="4"
        />
        <path
          d="M10 10 H1010 V510 H10"
          fill="none"
          stroke="#3498db"
          strokeWidth="4"
          className="animated-path"
        />
      </svg>
    </div>
  );
}
