// src/components/common/Header.js
import Link from "next/link";
import Image from "next/image";
import { Logo } from "../../assets";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full px-6 py-4 bg-white border-b shadow-sm">
      <Link href="/" className="flex items-center space-x-2">
        <Image src={Logo} alt="LAT Logo" width={140} height={140} />
      </Link>
      <nav className="hidden space-x-6 text-sm font-medium text-gray-700 md:flex">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <Link href="/services" className="hover:text-primary">
          Services
        </Link>
        <Link href="/contact" className="hover:text-primary">
          Contact Us
        </Link>
      </nav>
    </header>
  );
}
