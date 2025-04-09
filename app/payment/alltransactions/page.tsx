"use client";

import React, { useEffect, useState, useCallback } from "react";
import {
  CoinsIcon,
  FileTextIcon,
  SearchIcon,
  ArrowUpDown,
} from "lucide-react";
import RevenueChart from "@/components/RevenueChart";
import SummeryBox from "@/components/SummeryBox";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import EnhancedPagination from "@/components/EnhancedPagination";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

// Define TypeScript Interface for Payment Data
interface Payment {
  transactionID: string;
  amount: number;
  status: "Paid" | "Pending" | "Refunded";
  bookingId: string;
  customerEmail: string;
  paymentType: string;
  updatedAt: string;
}

// Reusable Table Header Component with Sorting
interface PaymentTableHeaderProps {
  onSort: (field: string) => void;
  sortField: string;
  sortDirection: "asc" | "desc";
}

const PaymentTableHeader: React.FC<PaymentTableHeaderProps> = ({
  onSort,
  sortField,
  sortDirection,
}) => {
  const renderSortIcon = (field: string) => {
    if (sortField === field) {
      return (
        <ArrowUpDown
          className={`h-4 w-4 ml-1 ${sortDirection === "asc" ? "rotate-180" : ""}`}
        />
      );
    }
    return <ArrowUpDown className="h-4 w-4 ml-1 opacity-30" />;
  };

  return (
    <TableHeader className="bg-white">
      <TableRow className="bg-gray-50 border-b">
        <TableCell
          className="font-medium text-gray-700 py-3 cursor-pointer hover:text-blue-600 transition-colors"
          onClick={() => onSort("transactionID")}
        >
          <div className="flex items-center">
            Pay No {renderSortIcon("transactionID")}
          </div>
        </TableCell>
        <TableCell
          className="font-medium text-gray-700 cursor-pointer hover:text-blue-600 transition-colors"
          onClick={() => onSort("amount")}
        >
          <div className="flex items-center">
            Amount (£) {renderSortIcon("amount")}
          </div>
        </TableCell>
        <TableCell
          className="font-medium text-gray-700 cursor-pointer hover:text-blue-600 transition-colors"
          onClick={() => onSort("status")}
        >
          <div className="flex items-center">
            Status {renderSortIcon("status")}
          </div>
        </TableCell>
        <TableCell className="font-medium text-gray-700">Booking ID</TableCell>
        <TableCell className="font-medium text-gray-700">Customer</TableCell>
        <TableCell className="font-medium text-gray-700">Pay. Method</TableCell>
        <TableCell
          className="font-medium text-gray-700 cursor-pointer hover:text-blue-600 transition-colors"
          onClick={() => onSort("updatedAt")}
        >
          <div className="flex items-center">
            Date {renderSortIcon("updatedAt")}
          </div>
        </TableCell>
      </TableRow>
    </TableHeader>
  );
};

// Reusable Table Row Component
interface PaymentTableRowProps {
  payment: Payment;
  index: number;
}

const PaymentTableRow: React.FC<PaymentTableRowProps> = ({ payment, index }) => {
  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-600 border-green-200";
      case "Pending":
        return "bg-blue-100 text-blue-600 border-blue-200";
      case "Refunded":
        return "bg-red-100 text-red-600 border-red-200";
      default:
        return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  return (
    <TableRow
      key={payment.transactionID}
      className={`${
        index % 2 === 0 ? "bg-white" : "bg-[#568AFF]/5"
      } hover:bg-gray-100 transition-colors duration-200 text-[#59556A] text-sm`}
    >
      <TableCell className="font-medium">{payment.transactionID}</TableCell>
      <TableCell className="font-medium">{payment.amount.toFixed(2)}</TableCell>
      <TableCell>
        <Badge
          variant="outline"
          className={`px-2 py-1 ${getStatusBadgeColor(payment.status)}`}
        >
          {payment.status}
        </Badge>
      </TableCell>
      <TableCell>{payment.bookingId}</TableCell>
      <TableCell className="max-w-[180px] truncate" title={payment.customerEmail}>
        {payment.customerEmail}
      </TableCell>
      <TableCell>{payment.paymentType}</TableCell>
      <TableCell>{payment.updatedAt}</TableCell>
    </TableRow>
  );
};

// Skeleton loader for table rows
const PaymentTableSkeleton: React.FC = () => (
  <>
    {[1, 2, 3, 4, 5].map((index) => (
      <TableRow key={index} className="animate-pulse">
        <TableCell>
          <Skeleton className="h-6 w-16" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-6 w-16" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-6 w-20" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-6 w-16" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-6 w-32" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-6 w-20" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-6 w-24" />
        </TableCell>
      </TableRow>
    ))}
  </>
);

// Main Dashboard Component
const DashboardPage: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [filteredPayments, setFilteredPayments] = useState<Payment[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortField, setSortField] = useState<string>("updatedAt");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [paymentTypeFilter, setPaymentTypeFilter] = useState<string>("all");

  // Fetch Payments Data from API
  useEffect(() => {
    const fetchPayments = async () => {
      setIsLoading(true);
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${apiUrl}/api/payments?page=${currentPage}&limit=10`);
        const data = await response.json();

        if (data.success && Array.isArray(data.payments)) {
          setPayments(data.payments);
          setTotalPages(data.totalPages || Math.ceil(data.payments.length / 10));
        } else {
          console.error("Failed to fetch payments:", data.message);
          setPayments([]);
        }
      } catch (error) {
        console.error("Error fetching payments:", error);
        setPayments([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPayments();
  }, [currentPage]);

  // Filter and sort payments when dependencies change
  useEffect(() => {
    let result = [...payments];

    // Filter by active tab status
    if (activeTab !== "all") {
      result = result.filter(
        (payment) => payment.status.toLowerCase() === activeTab.toLowerCase()
      );
    }

    // Filter by payment type (skip filtering if "all")
    if (paymentTypeFilter !== "all") {
      result = result.filter(
        (payment) => payment.paymentType === paymentTypeFilter
      );
    }

    // Apply search term filter
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      result = result.filter(
        (payment) =>
          payment.transactionID.toLowerCase().includes(search) ||
          payment.customerEmail.toLowerCase().includes(search) ||
          payment.bookingId.toLowerCase().includes(search)
      );
    }

    // Sort the results
    result.sort((a, b) => {
      const fieldA = a[sortField as keyof Payment];
      const fieldB = b[sortField as keyof Payment];

      if (typeof fieldA === "number" && typeof fieldB === "number") {
        return sortDirection === "asc" ? fieldA - fieldB : fieldB - fieldA;
      }

      const strA = String(fieldA).toLowerCase();
      const strB = String(fieldB).toLowerCase();

      return sortDirection === "asc" ? strA.localeCompare(strB) : strB.localeCompare(strA);
    });

    setFilteredPayments(result);
  }, [payments, activeTab, searchTerm, sortField, sortDirection, paymentTypeFilter]);

  // Optimized page change handler
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  // Handle sorting changes
  const handleSort = useCallback(
    (field: string) => {
      if (sortField === field) {
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
      } else {
        setSortField(field);
        setSortDirection("asc");
      }
    },
    [sortField, sortDirection]
  );

  // Calculate summary statistics
  const totalEarnings = payments.reduce(
    (sum, payment) => (payment.status !== "Refunded" ? sum + payment.amount : sum),
    0
  );
  const totalTransactions = payments.length;
  const refundedTransactions = payments.filter((payment) => payment.status === "Refunded").length;

  // Get unique payment types for filter dropdown
  const uniquePaymentTypes = Array.from(new Set(payments.map((payment) => payment.paymentType)));

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Summary Boxes and Revenue Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        <div className="lg:col-span-1 space-y-6">
          <SummeryBox
            title="Total Earning"
            amount={totalEarnings || 90689}
            percentage={8.5}
            iconComponent={<CoinsIcon className="w-5 h-5 text-orange-400" />}
            prefix="£"
            subtitle="Up from yesterday"
          />
          <SummeryBox
            title="Total Transactions"
            amount={totalTransactions || 148}
            percentage={8.5}
            iconComponent={<CoinsIcon className="w-5 h-5 text-blue-400" />}
            subtitle="Up from yesterday"
          />
          <SummeryBox
            title="Refunded Transactions"
            amount={refundedTransactions || 5}
            percentage={1.5}
            iconComponent={<CoinsIcon className="w-5 h-5 text-red-400" />}
            subtitle="Up from yesterday"
          />
        </div>
        <div className="lg:col-span-3">
          <Card>
            <CardContent >
              <RevenueChart />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Payments Section */}
      <Card>
        <CardContent className="p-6 bg-white">
          <div className="flex flex-col  md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h2 className="text-xl font-semibold">Payments</h2>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative flex-grow">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search transactions, bookings..."
                  className="pl-10 pr-4"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={paymentTypeFilter} onValueChange={setPaymentTypeFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Payment Method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Methods</SelectItem>
                  {uniquePaymentTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" className="flex items-center">
                <FileTextIcon className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Payments</TabsTrigger>
              <TabsTrigger value="paid">Paid</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="refunded">Refunded</TabsTrigger>
            </TabsList>

            {["all", "paid", "pending", "refunded"].map((tab) => (
              <TabsContent key={tab} value={tab} className="mt-0">
                <div className="rounded-md border">
                  <Table>
                    {filteredPayments.length === 0 && !isLoading && (
                      <TableCaption>
                        {tab === "all"
                          ? "No payments found matching your criteria."
                          : `No ${tab} payments found.`}
                      </TableCaption>
                    )}
                    <PaymentTableHeader
                      onSort={handleSort}
                      sortField={sortField}
                      sortDirection={sortDirection}
                    />
                    <TableBody>
                      {isLoading ? (
                        <PaymentTableSkeleton />
                      ) : (
                        filteredPayments.map((payment, index) => (
                          <PaymentTableRow
                            key={payment.transactionID}
                            payment={payment}
                            index={index}
                          />
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {filteredPayments.length > 0 && !isLoading && (
            <div className="mt-6">
              <EnhancedPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
