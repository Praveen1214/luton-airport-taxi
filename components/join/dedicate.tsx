import Image from "next/image";
import React from "react";
import { Dedi } from '../../assets'

const Dedicate = () => {
  return (
    <div className="relative w-full py-20 overflow-hidden">
 
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-col items-center md:flex-row">
          {/* Left content */}
          <div className="z-10 w-full mb-10 md:w-1/2 md:mb-0">
            <p className="mb-3 font-medium text-blue-600">
              {" "}
              Join our driver community for greatness{" "}
            </p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              {" "}
              Dedicated to drivers{" "}
            </h2>
            <p className="max-w-md text-gray-600">
              Our driver support team is here to help you 24 / 7 with any
              questions or concerns you might have.Looking for a flexible and
              rewarding driving opportunity ? Join with us.
            </p>
          </div>

          {/* Right content */}
          <div className="relative w-full md:w-1/2">
            {/* Main image */}
            <div className="relative z-10 max-w-md mx-auto md:ml-auto md:mr-0">
              <Image
                src={Dedi}
                alt="Driver behind wheel"
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dedicate;
