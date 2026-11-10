import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], style: ["normal", "italic"], variable: "--font-serif" });
const sans = Jost({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Lavish Nailery | Luxury Nail Studio in Pune",
  description:
    "Gel, acrylic and nail art at Kalyani Nagar and FC Road, Pune. Book on WhatsApp in seconds. Nail academy enquiries open.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable} antialiased`}>{children}</body>
    </html>
  );
}
