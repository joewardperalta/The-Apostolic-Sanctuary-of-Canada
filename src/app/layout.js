import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Welcome to the sanctuary online",
  description:
    "We are glad you have shown interest in us. Please view our Online Services through our YouTube channel were we host our livestream, please tap or click the link below.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/church Logo Solid.jpg" sizes="any" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
