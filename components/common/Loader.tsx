import React, { useEffect, useState } from "react";
import { Car } from "lucide-react";
import { LutonLoader } from "../../assets";
import Image from "next/image";

const TaxiLoader = () => {
  const [position, setPosition] = useState(-50);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(function animate() {
      setPosition((prevPosition) => {
        // Reset position when car moves off screen
        if (prevPosition > window.innerWidth) {
          return -50;
        }
        // Move car right by 3px each frame
        return prevPosition + 2;
      });
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-50">
      {/* Main loader container */}
      <div className="flex flex-col items-center justify-center">
        {/* Animated taxi icon with road effect */}
        <div className="relative w-full h-16 max-w-md overflow-hidden">
          {/* The moving car - position controlled by state */}
          <div style={{ transform: `translateX(${position}px)` }}>
            {/* <Car size={48} className="text-primary" /> */}
            <Image
              src={LutonLoader}
              alt="Loading...."
              className="object-contain h-14 w-14"
            />
          </div>

          {/* Road dash animation */}
          <div className="relative w-full h-2 mt-4 overflow-hidden bg-gray-200 rounded-full">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute w-1/2 h-full bg-gray-400 animate-pulse">
                {" "}
              </div>
              <div
                className="absolute w-1/3 h-full bg-gray-400 animate-pulse"
                style={{ left: "60%" }}
              >
                {" "}
              </div>
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="mt-6 font-medium text-gray-700">
          <p className="text-center"> Your ride is on the way...</p>
        </div>
      </div>
    </div>
  );
};

export default TaxiLoader;
