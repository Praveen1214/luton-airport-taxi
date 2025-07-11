import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "Luton Airport Taxi",
  description:
    "Traveling to and from Luton Airport is simple and affordable with Luton Airport Taxi. As the UK’s leading private taxi hire service, we provide reliable airport transfer at competitive prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        <Header />
        <main className="w-full lg:px-8 lg:max-w-screen-xl lg:mx-auto">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
