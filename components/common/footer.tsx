// src/components/common/Footer.js
import Link from "next/link";
import Image from "next/image";
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
              "Milton Keynes",
              "Watford",
              "St Albans",
              "Stevenage",
              "London",
              "Ayelscbury",
              "Bedford",
              "Luton",
            ].map((city) => (
              <Link key={city} href="#" className="block hover:text-blue-400">
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
              "About Us",
              "Contact Us",
              "Booking a Taxi Guide",
              "Join as a Driver",
            ].map((item) => (
              <Link key={item} href="#" className="block hover:text-blue-400">
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Airport Transfers */}
        <div>
          <h4 className="mb-4 text-lg font-bold">Airport Transfers</h4>
          <div className="space-y-2">
            {[
              "Taxi From Luton Airport",
              "Taxi to Luton Luton Airport",
              "Flight monitoring",
              "Business travel",
              "Assisted Travel",
              "Baby Seat",
              "Airport Transfer",
              "Meet & Greet",
            ].map((item) => (
              <Link key={item} href="#" className="block hover:text-blue-400">
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="mb-4 text-lg font-bold">Follow Us</h4>
          <div className="space-y-2">
            {["LinkedIn", "Twitter", "Instagram", "Facebook"].map(
              (platform) => (
                <Link
                  key={platform}
                  href="#"
                  className="block hover:text-blue-400"
                >
                  {platform}
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col justify-between pt-6 mt-10 text-sm border-t border-gray-700 md:flex-row">
        <div className="flex flex-wrap gap-6 mb-3 md:mb-0">
          <Link href="#" className="hover:text-blue-400">
            Privacy Policy
          </Link>
          <span className="text-gray-500">|</span>
          <Link href="#" className="hover:text-blue-400">
            Terms & Conditions
          </Link>
          <span className="text-gray-500">|</span>
          <Link href="#" className="hover:text-blue-400">
            Cookie Policy
          </Link>
        </div>
        <span className="text-gray-400">© LutonAirportTaxi 2023</span>
      </div>
    </footer>
  );
}
