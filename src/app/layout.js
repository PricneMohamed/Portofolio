"use client";
import { Salsa } from "next/font/google";
import "./globals.css";
import Navbar from "./__components/Navbar/Navbar";
import Footer from "./__components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./rtk/store";
import Breadcrumb from "./__components/Breadcrumb/Breadcrumb";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const salsa = Salsa({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={`${salsa.className}`}>
          <Navbar />
          <Breadcrumb />
          {children}
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </Provider>
  );
}
