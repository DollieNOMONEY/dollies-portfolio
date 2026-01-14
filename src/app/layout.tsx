import type { Metadata } from "next";
import { Gilda_Display } from "next/font/google";
import "./globals.css";
import '../lib/fontawesome'

const gildaDisplay = Gilda_Display({
  variable: "--font-gilda-display",
  weight: '400',
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
      // ${geistSans.variable} ${geistMono.variable}
        className={`max-w-full overflow-x-hidden ${gildaDisplay.className} antialiased`}
        // style={{backgroundColor: '#f2f2f2'}}
      >
        {children}
      </body>
    </html>
  );
}
