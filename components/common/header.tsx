"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Logo } from "../../assets";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b shadow-sm z-50 relative">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={Logo} alt="LAT Logo" width={120} height={120} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href="/services" className="hover:text-primary">
            Services
          </Link>
          <Link href="/pages/Help-Information/contact" className="hover:text-primary">
            Contact Us
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Slide-in mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white border-l shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="text-lg font-semibold text-gray-800">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-700 focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menu links */}
        <nav className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/services" className="hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
            Services
          </Link>
          <Link href="/pages/Help-Information/contact" className="hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Optional backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
