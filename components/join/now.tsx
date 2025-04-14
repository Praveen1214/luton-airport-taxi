import React from "react";
import {LogoWhite} from '../../assets'
import Image from "next/image";

const JoinUsCard = () => {
  return (
    <div className="w-full max-w-6xl p-4 mx-auto mb-20">
      <div className="overflow-hidden text-white shadow-xl rounded-xl bg-gradient-to-r from-gray-900 to-indigo-950">
        <div className="flex flex-col items-center justify-between p-6 md:p-8 md:flex-row">
          <div className="w-full md:w-3/4">
            <h1 className="mb-4 text-4xl font-semibold md:text-4xl">
              {" "}
              Join Us Now!{" "}
            </h1>
            <p className="text-sm md:text-base">
              Join our team of professional drivers and become a part of our
              commitment to providing top - notch airport transfer services.Work
              with a dynamic and supportive team, all while enjoying the freedom
              and flexibility of being your own boss.
            </p>
          </div>
          <div className="flex justify-center w-full mt-6 md:w-1/4 md:justify-end md:mt-0">
            {/* Logo image placeholder */}
            <div className="flex items-center justify-center">
              <Image
                src={LogoWhite}
                alt="Luton Airport Taxi Logo"
                className="object-contain w-40 h-40"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsCard;
