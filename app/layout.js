import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/store/Provider";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  keywords:
    "Masking Tape,  Pre-Masking Tape, THB Acrylic Nano-Sil Tape, Mirror Mounting Tape, PMX 5000 Electrical Insulation Tape, Dry Wall Joint Tape, PTFE Thread Seal Tape, Plate Mounting Tape, PTFE Fiber Tape, Structural Glazing Tape, Multi Stick Tape, Anti-Slip Tape, Shuttering Tape, Laminate Fixing Tape, Edge Banding Tape, Roof Repair Tape, Leak Stopper Tape, Surface Protection Tape, Craft Paper Tape, BOPP Packaging Tape, Floor Protection Tape, Wood Guard Tape, Floor Marking Tape, Spacer & Eva Cloth Duct Tape, Red Polyster Tape, adhesive tape, mask tape, tape manufacture, self adhesive tape",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <Navbar />
          {children}
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
