"use client";
import { Salsa, Kalam } from "next/font/google";
import "./globals.css";
import Navbar from "./__components/Navbar/Navbar";
import Footer from "./__components/Footer/Footer";
const kalam = Kalam({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kalam.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
