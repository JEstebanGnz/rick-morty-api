import type { Metadata } from "next";
import "./globals.css";
import { titleFont } from "@/config/fonts";

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
        className={` ${titleFont.className} antialiased pt-5`}
      >
        {children}
      </body>
    </html>
  );
}
