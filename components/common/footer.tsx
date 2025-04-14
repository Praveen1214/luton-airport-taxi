// src/components/common/Footer.js
import Link from "next/link";
import Image from "next/image";
import bookingGuide from "@/app/pages/Airport-Transfer/Taxi-From-Luton/page";
import { LogoWhite, NV1, NV2 } from "../../assets";

export default function Footer() {
  return (
    <footer className="bg-[#1D263D] text-white px-6 py-10">
      <div className="grid grid-cols-1 gap-10 mx-auto max-w-7xl md:grid-cols-5">
        {/* Logo + Brands */}
        <div>
          <Link href="/">
            <Image src={LogoWhite} alt="LAT Logo" width={220} height={40} />
          </Link>
          <p className="mt-5 text-base">Hassle Free Luton Airport Taxi</p>
          <div className="mt-5 space-y-4">
            <div className="flex items-center">
              <Image src={NV1} alt="Trustpilot" width={30} height={30} />
              &nbsp;&nbsp;<span className="font-semibold">Trustpilot</span>
            </div>
            <div className="flex items-center">
              <Image src={NV2} alt="Tripadvisor" width={30} height={30} />
              &nbsp;&nbsp;<span className="font-semibold">Tripadvisor</span>
            </div>
          </div>
        </div>

        {/* Popular Routes */}
        <div>
          <h4 className="mb-4 text-lg font-bold">Popular Routes</h4>
          <div className="space-y-2">
            {[
              {
                city: "Milton Keynes",
                path: "/pages/Popular-Routes/milton-keynes",
              },
              { city: "Watford", path: "/pages/Popular-Routes/wat-ford" },
              {
                city: "St Albans",
                path: "/pages/Popular-Routes/st-albans",
              },
              {
                city: "Stevenage",
                path: "/pages/Popular-Routes/stevenage",
              },
              { city: "London", path: "/pages/Popular-Routes/london" },
              {
                city: "Ayelscbury",
                path: "/pages/Popular-Routes/ayelscbury",
              },
              { city: "Bedford", path: "/pages/Popular-Routes/bedford" },
              { city: "Luton", path: "/pages/Popular-Routes/luton" },
            ].map(({ city, path }) => (
              <Link
                key={city}
                href={path}
                className="block hover:text-blue-400"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>

        {/* Help & Information */}
        <div>
          <h4 className="mb-4 text-lg font-bold">Help & Information</h4>
          <div className="space-y-2">
            {[
              { label: "About Us", path: "/about" },
              { label: "Contact Us", path: "/contact" },
              {
                label: "Booking a Taxi Guide",
                path: "/pages/Help-Information/Guide",
              },
              { label: "Join as a Driver", path: "/join" },
            ].map(({ label, path }) => (
              <Link
                key={label}
                href={path}
                className="block hover:text-blue-400"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Airport Transfers */}
        <div>
          <h4 className="mb-4 text-lg font-bold">Airport Transfers</h4>
          <div className="space-y-2">
            {[
              {
                label: "Taxi From Luton Airport",
                path: "/pages/Airport-Transfer/Taxi-From-Luton",
              },
              {
                label: "Taxi to Luton Luton Airport",
                path: "/pages/Airport-Transfer/Taxi-to-Luton",
              },
              {
                label: "Flight monitoring",
                path: "/pages/services/flight-monitoring",
              },
              {
                label: "Business travel",
                path: "/pages/services/businessTravel",
              },
              {
                label: "Assisted Travel",
                path: "/pages/services/assisted-travel",
              },
              { label: "Baby Seat", path: "/pages/services/baby-seat" },
              {
                label: "Airport Transfer",
                path: "/pages/services/airport-transfer",
              },
              { label: "Meet & Greet", path: "/pages/services/meet-and-greet" },
            ].map(({ label, path }) => (
              <Link
                key={label}
                href={path}
                className="block hover:text-blue-400"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="mb-4 text-lg font-bold">Follow Us</h4>
          <div className="space-y-2">
            {[
              {
                platform: "LinkedIn",
                path: "https://www.linkedin.com/company/lutonairporttaxi",
              },
              {
                platform: "Twitter",
                path: "https://twitter.com/lutonairporttaxi",
              },
              {
                platform: "Instagram",
                path: "https://www.instagram.com/lutonairporttaxi",
              },
              {
                platform: "Facebook",
                path: "https://www.facebook.com/lutonairporttaxi",
              },
            ].map(({ platform, path }) => (
              <Link
                key={platform}
                href={path}
                className="block hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                {platform}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col justify-between pt-6 mt-10 text-sm border-t border-gray-700 md:flex-row">
        <div className="flex flex-wrap gap-6 mb-3 md:mb-0">
          <Link href="/privacy-policy" className="hover:text-blue-400">
            Privacy Policy
          </Link>
          <span className="text-gray-500">|</span>
          <Link href="/terms-and-conditions" className="hover:text-blue-400">
            Terms & Conditions
          </Link>
          <span className="text-gray-500">|</span>
          <Link href="/cookie-policy" className="hover:text-blue-400">
            Cookie Policy
          </Link>
        </div>
        <span className="text-gray-400">© LutonAirportTaxi 2023</span>
      </div>
    </footer>
  );
}
