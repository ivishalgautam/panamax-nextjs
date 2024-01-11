import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/store/Provider";
import Navbar from "@/components/Navbar";

// swiper css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Panamax | India's biggest tape manufacturer",
  description:
    "Panamax: India's Premier Tape Manufacturer Offering a Wide Range of High-Quality Tapes. From Adhesive to Specialty Tapes, Explore Our Extensive Tape Collection. Enhance Your Projects with Panamax Tapes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
