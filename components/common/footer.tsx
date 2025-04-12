// src/components/common/Footer.js
import Link from 'next/link';
import Image from 'next/image';
import bookingGuide from '@/app/pages/Airport-Transfer/Taxi-From-Luton/page'

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
            {[
              { city: 'Milton Keynes', path: '/routes/milton-keynes' },
              { city: 'Watford', path: '/routes/watford' },
              { city: 'St Albans', path: '/routes/st-albans' },
              { city: 'Stevenage', path: '/routes/stevenage' },
              { city: 'London', path: '/routes/london' },
              { city: 'Ayelscbury', path: '/routes/ayelsbury' },
              { city: 'Bedford', path: '/routes/bedford' },
              { city: 'Luton', path: '/routes/luton' },
            ].map(({ city, path }) => (
              <Link key={city} href={path} className="block hover:text-blue-400">
                {city}
              </Link>
            ))}
          </div>
        </div>

        {/* Help & Information */}
        <div>
          <h4 className="font-bold text-lg mb-4">Help & Information</h4>
          <div className="space-y-2">
            {[
              { label: 'About Us', path: '/about' },
              { label: 'Contact Us', path: '/contact' },
              { label: 'Booking a Taxi Guide', path: '/pages/Help-Information/Guide' },
              { label: 'Join as a Driver', path: '/driver/join' },
            ].map(({ label, path }) => (
              <Link key={label} href={path} className="block hover:text-blue-400">
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Airport Transfers */}
        <div>
          <h4 className="font-bold text-lg mb-4">Airport Transfers</h4>
          <div className="space-y-2">
            {[
              { label: 'Taxi From Luton Airport', path: '/pages/Airport-Transfer/Taxi-From-Luton' },
              { label: 'Taxi to Luton Luton Airport', path: '/pages/Airport-Transfer/Taxi-to-Luton' },
              { label: 'Flight monitoring', path: '/services/flight-monitoring' },
              { label: 'Business travel', path: '/services/business-travel' },
              { label: 'Assisted Travel', path: '/services/assisted-travel' },
              { label: 'Baby Seat', path: '/services/baby-seat' },
              { label: 'Airport Transfer', path: '/services/airport-transfer' },
              { label: 'Meet & Greet', path: '/services/meet-and-greet' },
            ].map(({ label, path }) => (
              <Link key={label} href={path} className="block hover:text-blue-400">
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-bold text-lg mb-4">Follow Us</h4>
          <div className="space-y-2">
            {[
              { platform: 'LinkedIn', path: 'https://www.linkedin.com/company/lutonairporttaxi' },
              { platform: 'Twitter', path: 'https://twitter.com/lutonairporttaxi' },
              { platform: 'Instagram', path: 'https://www.instagram.com/lutonairporttaxi' },
              { platform: 'Facebook', path: 'https://www.facebook.com/lutonairporttaxi' },
            ].map(({ platform, path }) => (
              <Link key={platform} href={path} className="block hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                {platform}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm flex flex-col md:flex-row justify-between">
        <div className="flex flex-wrap gap-6 mb-3 md:mb-0">
          <Link href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link>
          <span className="text-gray-500">|</span>
          <Link href="/terms-and-conditions" className="hover:text-blue-400">Terms & Conditions</Link>
          <span className="text-gray-500">|</span>
          <Link href="/cookie-policy" className="hover:text-blue-400">Cookie Policy</Link>
        </div>
        <span className="text-gray-400">© LutonAirportTaxi 2023</span>
      </div>
    </footer>
  );
}
