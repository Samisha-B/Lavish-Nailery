import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lavish Nailery | Luxury Nail Studio in Pune",
  description:
    "Gel, acrylic and nail art at Kalyani Nagar and FC Road, Pune. Book on WhatsApp in seconds. Nail academy enquiries open.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
