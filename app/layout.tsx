import type { Metadata } from "next";
import "./globals.css";
import FixedBranding from "@/components/FixedBranding";

export const metadata: Metadata = {
  title: "Jettakarn Khamwai Portfolio",
  description: "A developer portfolio built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cascadia+Code:ital,wght@0,200..700;1,200..700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <FixedBranding />
        {children}
      </body>
    </html>
  );
}