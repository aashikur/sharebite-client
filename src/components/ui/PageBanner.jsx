"use client";

import React, { useState, useEffect } from "react";
const GridBackground = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const handleMouseMove = event => {
      const {
        clientX,
        clientY
      } = event;
      const x = clientX - window.innerWidth / 2;
      const y = clientY - window.innerHeight / 2;
      setMousePosition({
        x,
        y
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return <div className="absolute inset-0 w-full h-full overflow-hidden transition-transform duration-300 ease-out" style={{
    backgroundImage: `
          linear-gradient(to right, rgba(255, 0, 255, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 0, 255, 0.08) 1px, transparent 1px)
        `,
    backgroundSize: "40px 40px",
    animation: "moveGrid 20s linear infinite",
    transform: `translate(${mousePosition.x / 30}px, ${mousePosition.y / 30}px)`
  }}>
      {}
      <div className="absolute top-1/2 left-1/2 w-[60vmin] h-[60vmin] bg-cyan-500/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      {}
      <style>
        {`
          @keyframes moveGrid {
            0% { background-position: 0 0; }
            100% { background-position: 80px 80px; }
          }
        `}
      </style>
    </div>;
};
export default function GridBackgroundView() {
  return <div className="relative w-full py-20  overflow-hidden bg-gradient-to-br from-orange-100 to-pink-100 dark:from-[#393053] dark:to-[#18122B]
  
  ">
      <GridBackground />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4">
          <h1 className="text-4xl bg-clip-text bg-gradient-to-r animate-text from-orange-500 via-pink-500 to-yellow-500 text-transparent  font-bold  md:text-6xl lg:text-8xl bg-[length:200%_200%] animate-text">
            Contact US
          </h1>
          <p className="mt-4 text-lg opacity-70 md:text-xl">
           Share with us your amizing ideas. we love to learn form you.
          </p>
        </div>
      </div>
    </div>;
}