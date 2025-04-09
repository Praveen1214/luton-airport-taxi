"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { CreditCard, Edit } from "lucide-react";
import paymentMethodsData from "./paymentMethodCharges.json";

interface PaymentMethod {
  name: string;
  description: string;
  paymentCharge: string;
  isActive: boolean;
  icon?: string;
}

export default function PaymentMethodsPage() {
  const [methods, setMethods] = useState<PaymentMethod[]>(paymentMethodsData);
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);

  const handleSave = (updatedMethod: PaymentMethod) => {
    setMethods((prev) =>
      prev.map((method) =>
        method.name === updatedMethod.name ? updatedMethod : method
      )
    );
    setSelectedMethod(null);
  };

  return (
    <div className="flex flex-col flex-grow h-screen overflow-y-auto bg-gray-50">
      <header className="px-4 py-4 sm:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Payment Methods</h1>
        </div>
        <p className="text-sm text-gray-500">
          Manage your payment method charges and status
        </p>
      </header>
      <div className="p-4 m-2 bg-white shadow-sm rounded-lg sm:p-6 sm:m-4 mt-5">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[70px]">Method</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:table-cell">Description</TableHead>
                <TableHead>Charge</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {methods.map((method, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-gray-600" />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{method.name}</TableCell>
                  <TableCell className="hidden md:table-cell max-w-xs truncate">
                    {method.description}
                  </TableCell>
                  <TableCell className="font-mono">{method.paymentCharge}</TableCell>
                  <TableCell>
                    <Badge
                      variant={method.isActive ? "outline" : "secondary"}
                      className={
                        method.isActive
                          ? "bg-green-50 text-green-700 border-green-200"
                          : "bg-gray-100 text-gray-500"
                      }
                    >
                      {method.isActive ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setSelectedMethod(method)}
                        >
                          <Edit className="w-4 h-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Payment Method</DialogTitle>
                          <DialogDescription>
                            Update the charge percentage and active status.
                          </DialogDescription>
                        </DialogHeader>
                        {selectedMethod && (
                          <EditForm
                            method={selectedMethod}
                            onSave={handleSave}
                            onCancel={() => setSelectedMethod(null)}
                          />
                        )}
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

interface EditFormProps {
  method: PaymentMethod;
  onSave: (updatedMethod: PaymentMethod) => void;
  onCancel: () => void;
}

function EditForm({ method, onSave, onCancel }: EditFormProps) {
  const [formData, setFormData] = useState<PaymentMethod>({ ...method });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, isActive: checked }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4 mt-4">
      {/* Payment Charge Field */}
      <div className="space-y-2">
        <label
          htmlFor="paymentCharge"
          className="block text-sm font-medium text-gray-700"
        >
          Payment Charge
        </label>
        <Input
          id="paymentCharge"
          name="paymentCharge"
          placeholder="e.g., 2.9% + $0.30"
          value={formData.paymentCharge}
          onChange={handleChange}
        />
      </div>
  
      {/* Active Status Toggle */}
      <div className="flex items-center justify-between">
        <div>
          <label
            htmlFor="active-status"
            className="block text-sm font-medium text-gray-700"
          >
            Active Status
          </label>
          <p className="text-sm text-gray-500">
            Toggle availability for this payment method.
          </p>
        </div>
        <Switch
          id="active-status"
          checked={formData.isActive}
          onCheckedChange={handleToggle}
        />
      </div>
  
      <DialogFooter className="mt-6">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={() => onSave(formData)}>Save Changes</Button>
      </DialogFooter>
    </div>
  );
  
}
