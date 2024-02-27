import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PriestDEV Innowacyjna parafia",
  description: "Aplikacje mobilne i strony internetowe dla parafii",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen bg-gradient-to-b from-sky-950 to-gray-900">
          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)]">
          {children}
          </div>
        </div>
        </body>
    </html>
  );
}
