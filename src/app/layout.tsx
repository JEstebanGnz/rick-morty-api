import type { Metadata } from "next";
import "./globals.css";
import { titleFont } from "@/config/fonts";
import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Rick-Morty-API",
  description: "Here to inspire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${titleFont.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
