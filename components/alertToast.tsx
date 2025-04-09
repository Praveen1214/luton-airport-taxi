import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  ExclamationTriangleIcon,
  CheckCircledIcon,
  CrossCircledIcon,
} from "@radix-ui/react-icons";
import { AlertDialogOverlay } from "@radix-ui/react-alert-dialog";

// Define the interface for component props
interface AlertToastProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  type: "warning" | "success" | "error";
  onConfirm?: () => void;
}

const AlertToast: React.FC<AlertToastProps> = ({
  open,
  onOpenChange,
  title,
  description,
  type,
  onConfirm,
}) => {
  // Create a handler function that works with button events
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    } else {
      onOpenChange(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogOverlay className="bg-[#000]/60 fixed inset-0" />
      <AlertDialogContent className="bg-white max-w-full sm:max-w-lg w-[95%] sm:w-full p-4 sm:p-6 rounded-lg mx-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl">
        <AlertDialogHeader className="space-y-2 sm:space-y-3">
          <AlertDialogTitle className="flex items-center text-lg sm:text-xl font-semibold">
            {type === "warning" && (
              <ExclamationTriangleIcon className="mr-2 h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 flex-shrink-0" />
            )}
            {type === "success" && (
              <CheckCircledIcon className="mr-2 h-5 w-5 sm:h-6 sm:w-6 text-green-500 flex-shrink-0" />
            )}
            {type === "error" && (
              <CrossCircledIcon className="mr-2 h-5 w-5 sm:h-6 sm:w-6 text-red-500 flex-shrink-0" />
            )}
            <span className="break-words">{title}</span>
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sm sm:text-base text-gray-600 break-words">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6">
          <AlertDialogCancel className="w-full sm:w-auto text-sm sm:text-base py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            className="w-full sm:w-auto text-sm sm:text-base py-2 px-4 bg-[#000] text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            OK
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertToast;