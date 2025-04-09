// src/components/common/Footer.js
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1D263D] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo + Brands */}
        <div>
          <Link href="/">
            <Image src="/logo-footer.svg" alt="LAT Logo" width={220} height={40} />
          </Link>
          <p className="mt-5 text-base">Hassle Free Luton Airport Taxi</p>
          <div className="mt-5 space-y-4">
            <div className="flex items-center">
              <Image src="/trustpilot.svg" alt="Trustpilot" width={160} height={30} />
            </div>
            <div className="flex items-center">
              <Image src="/tripadvisor.svg" alt="Tripadvisor" width={160} height={30} />
            </div>
          </div>
        </div>

        {/* Popular Routes */}
        <div>
          <h4 className="font-bold text-lg mb-4">Popular Routes</h4>
          <div className="space-y-2">
            {['Milton Keynes', 'Watford', 'St Albans', 'Stevenage', 'London', 'Ayelscbury', 'Bedford', 'Luton'].map((city) => (
              <Link key={city} href="#" className="block hover:text-blue-400">
                {city}
              </Link>
            ))}
          </div>
        </div>

        {/* Help & Information */}
        <div>
          <h4 className="font-bold text-lg mb-4">Help & Information</h4>
          <div className="space-y-2">
            {['About Us', 'Contact Us', 'Booking a Taxi Guide', 'Join as a Driver'].map((item) => (
              <Link key={item} href="#" className="block hover:text-blue-400">
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Airport Transfers */}
        <div>
          <h4 className="font-bold text-lg mb-4">Airport Transfers</h4>
          <div className="space-y-2">
            {[
              'Taxi From Luton Airport', 
              'Taxi to Luton Luton Airport', 
              'Flight monitoring', 
              'Business travel',
              'Assisted Travel', 
              'Baby Seat', 
              'Airport Transfer', 
              'Meet & Greet'
            ].map((item) => (
              <Link key={item} href="#" className="block hover:text-blue-400">
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-bold text-lg mb-4">Follow Us</h4>
          <div className="space-y-2">
            {['LinkedIn', 'Twitter', 'Instagram', 'Facebook'].map((platform) => (
              <Link key={platform} href="#" className="block hover:text-blue-400">
                {platform}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm flex flex-col md:flex-row justify-between">
        <div className="flex flex-wrap gap-6 mb-3 md:mb-0">
          <Link href="#" className="hover:text-blue-400">Privacy Policy</Link>
          <span className="text-gray-500">|</span>
          <Link href="#" className="hover:text-blue-400">Terms & Conditions</Link>
          <span className="text-gray-500">|</span>
          <Link href="#" className="hover:text-blue-400">Cookie Policy</Link>
        </div>
        <span className="text-gray-400">© LutonAirportTaxi 2023</span>
      </div>
    </footer>
  );
}