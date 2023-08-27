import Navbar from "@/components/Navbar";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import AnimatePage from "../components/AnimatePage/AnimatePage";

const poppins = Poppins({ subsets: ["latin"], weight: "400", display: "swap" });

export const metadata = {
  title: "Aplus Multi Kreasi",
  description:
    "Aplus Multi Kreasi are a creative agency in the marketing spehere that focuses on Event, Production and Branding.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <ToastContainer theme="dark" />
        <AnimatePage>
          <Navbar />
          {children}
          <Footer />
        </AnimatePage>
      </body>
    </html>
  );
}
