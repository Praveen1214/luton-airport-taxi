// src/components/common/Header.js
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full border-b bg-white px-6 py-4 flex justify-between items-center shadow-sm">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.svg" alt="LAT Logo" width={40} height={40} />
        <span className="text-lg font-semibold text-gray-800">LUTON AIRPORT TAXI</span>
      </Link>
      <nav className="space-x-6 text-sm text-gray-700 font-medium hidden md:flex">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
    </header>
  );
}
