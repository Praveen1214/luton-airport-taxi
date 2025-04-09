import React from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Assuming you have a Skeleton component

const Loader: React.FC = () => (
  <div className="h-screen w-full space-y-6 animate-pulse">
   

    {/* Table Placeholder */}
    <div className="space-y-4">
      <Skeleton className="h-12 w-full bg-gray-50 rounded" /> {/* Table Header */}
      {[...Array(6)].map((_, index) => (
        <div key={index} className="flex space-x-4 animate-pulse">
          <Skeleton className="h-12 w-1/12 bg-gray-50 rounded" />
          <Skeleton className="h-12 w-2/12 bg-gray-50 rounded" />
          <Skeleton className="h-12 w-2/12 bg-gray-50 rounded" />
          <Skeleton className="h-12 w-3/12 bg-gray-50 rounded" />
          <Skeleton className="h-12 w-2/12 bg-gray-50 rounded" />
          <Skeleton className="h-12 w-1/12 bg-gray-50 rounded" />
        </div>
      ))} {/* Table Rows */}
    </div>

    {/* Pagination Placeholder */}
    <div className="flex justify-center space-x-4 animate-pulse">
      <Skeleton className="h-10 w-20 bg-gray-50 rounded" />
      <Skeleton className="h-10 w-10 bg-gray-50 rounded" />
      <Skeleton className="h-10 w-20 bg-gray-50 rounded" />
    </div>
  </div>
);

export default Loader;
