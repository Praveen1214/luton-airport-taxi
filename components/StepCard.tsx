import Image from "next/image";
import React from "react";

interface StepCardProps {
  stepNumber: number;
  title: React.ReactNode;
  src: string;
  imageAlt?: string;
}

const StepCard: React.FC<StepCardProps> = ({ stepNumber, title, src, imageAlt }) => {
  return (
    <div className="space-y-6 text-gray-800 text-base md:text-lg max-w-4xl mr-auto">
      <div>
        <p className="font-medium">
          {stepNumber}. {title}
        </p>
        <div className="mt-4 rounded-2xl overflow-hidden mt-5">
          <Image
            src={src}
            alt={imageAlt || `Step ${stepNumber} image`}
            width={800}
            height={450}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default StepCard;
