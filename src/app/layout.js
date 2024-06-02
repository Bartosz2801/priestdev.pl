import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oremus",
  description: "Módlmy się wspólnie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={inter.className}>
        <div className="w-screen h-screen bg-gradient-to-b from-white to-gray-200">
          <div className="h-32">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-8rem)]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
