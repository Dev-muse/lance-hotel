import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
import Footer from "@/app/_components/Footer";

import Header from "./_components/Header";

const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: {
    template: "%s - Lance Cabins",
    default: "Welcome to Lance Cabins",
  },
  description:
    "Luxurious cabin hotel located in the heart of the italian dolomites, surrounded by beautiful mountains and dark forests.",
};
const date = new Date();
const year = date.getFullYear;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} relative  antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
