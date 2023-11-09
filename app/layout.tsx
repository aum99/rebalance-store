import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";

import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import ModalProvider from "@/providers/ModalProvider";
import ToastProvider from "@/providers/ToastProvider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rebalance Store",
  description: "A clothing apparel to explore the latest fashion trends.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
