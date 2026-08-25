import type { Metadata } from "next";
import "./globals.css";
import '../lib/fontawesome'
import { anton } from '@/app/fonts'
import { Viewport } from "next";
import BrowserConfig from "@/components/BrowserConfig";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "MADE BY DOLLAR",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <BrowserConfig/>
      <body
        className={`max-w-full overflow-x-hidden ${anton.className} antialiased`}
      >
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
