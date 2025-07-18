import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      {/* Spinner matching the exact design */}
      <div className="w-12 h-12 border-4 border-blue-100 rounded-full border-t-blue-500 animate-spin"></div>

      {/* Text matching the exact design */}
      <p className="mt-6 text-lg font-normal text-gray-600">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
