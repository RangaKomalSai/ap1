import React from "react";

function Incentives() {
  return (
    <section>
      <svg viewBox="0 0 1320 300" className="thissvg">
        <text x="50%" y="50%" dy=".25em" text-anchor="middle">
          COMING SOON
        </text>
      </svg>
      <style jsx="true">{`
        .thissvg {
          font-family: "Plante", sans-serif;
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .thissvg text {
          text-transform: uppercase;
          animation: stroke 5s infinite alternate;
          stroke-width: 1;
          stroke: #d3d3d3;
          font-size: clamp(6rem, 10vw, 10rem);
        }

        @keyframes stroke {
          0% {
            fill: #f3f3f300;
            stroke: #fcfcfc;
            stroke-dashoffset: 25%;
            stroke-dasharray: 0 50%;
            stroke-width: 1;
          }
          70% {
            fill: #fcfcfc00;
            stroke: #fcfcfc;
          }
          80% {
            fill: #fcfcfc00;
            stroke: #fcfcfc;
            stroke-width: 2;
          }

          100% {
            stroke-dashoffset: -25%;
            stroke-dasharray: 50% 0;
            stroke-width: 2;
          }
        }
      `}</style>
    </section>
  );
}

export default Incentives;
