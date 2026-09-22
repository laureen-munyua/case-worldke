import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "Case World KE",
  description: "Premium phone cases in Kenya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geist.className + " bg-white text-black"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
