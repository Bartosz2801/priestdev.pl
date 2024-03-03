import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PriestDEV Innowacyjna parafia",
  description: "Aplikacje mobilne i strony internetowe dla parafii",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
        </body>
    </html>
  );
}
