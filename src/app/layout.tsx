import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dollie's Portfolio",
  description: "A portfolio made by Dollie to showcase his front-end, back-end, and full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`max-w-full overflow-x-hidden ${geistSans.variable} ${geistMono.variable} antialiased`}
        // style={{backgroundColor: '#f2f2f2'}}
      >
        {children}
      </body>
    </html>
  );
}
