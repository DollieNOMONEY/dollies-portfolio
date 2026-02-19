import type { Metadata } from "next";
import "./globals.css";
import '../lib/fontawesome'
import localFont from 'next/font/local';
import { Viewport } from "next";

const melodrama = localFont({
  src: [
    {
      path: '../fonts/Melodrama-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-melodrama',
});

const satoshi = localFont({
  src: [
    {
      path: '../fonts/Satoshi-Regular.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-satoshi',
});

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
      <body
        className={`max-w-full overflow-x-hidden ${melodrama.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
