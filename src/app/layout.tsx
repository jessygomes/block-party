import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Toast from "./components/Toast/Toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlockParty Festival",
  description: "Festival de musique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        {/* <div className="fixed top-0 z-30 w-full flex justify-center">
          <Navbar />
        </div> */}
        <div>
          <Toast />
        </div>
      </body>
      {/* <div className="mt-[3rem]">
        <Footer />
      </div> */}
    </html>
  );
}
