import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const VehicleManagementLoader: React.FC = () => (
  <div className="p-6 max-w-full bg-slate-50 min-h-screen">
    <Card className="shadow-md border-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 bg-white border-b">
        <CardTitle className="text-2xl font-bold flex items-center gap-2 text-slate-800">
          <Skeleton className="h-8 w-64 bg-gray-200 rounded" /> {/* Title Placeholder */}
        </CardTitle>
        <div className="flex gap-2">
          <Skeleton className="h-10 w-24 bg-gray-200 rounded" /> {/* Refresh Button */}
          <Skeleton className="h-10 w-32 bg-gray-200 rounded" /> {/* Add Vehicle Button */}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {/* Table Header Skeleton */}
        <Skeleton className="h-10 w-full bg-gray-200 rounded mb-4" />

        {/* Table Rows Skeleton */}
        <div className="space-y-3">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Skeleton className="h-12 w-1/12 bg-gray-200 rounded" /> {/* Image */}
              <Skeleton className="h-12 w-2/12 bg-gray-200 rounded" /> {/* Type */}
              <Skeleton className="h-12 w-2/12 bg-gray-200 rounded" /> {/* Seats */}
              <Skeleton className="h-12 w-2/12 bg-gray-200 rounded" /> {/* Luggage */}
              <Skeleton className="h-12 w-2/12 bg-gray-200 rounded" /> {/* Hand Luggage */}
              <Skeleton className="h-12 w-1/12 bg-gray-200 rounded" /> {/* Actions */}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default VehicleManagementLoader;
