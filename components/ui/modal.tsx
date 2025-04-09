// components/ui/modal.tsx
import React from "react";

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={() => onOpenChange(false)}
      />
      <div className="relative bg-white rounded shadow-lg p-4">
        {children}
      </div>
    </div>
  );
};

export const ModalContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>{children}</div>
);

export const ModalHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-lg font-bold mb-4">{children}</div>
);

export const ModalBody: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mb-4">{children}</div>
);

export const ModalFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex justify-end">{children}</div>
);

export const ModalCloseButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
  >
    X
  </button>
);
