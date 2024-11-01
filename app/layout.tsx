import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Raleway } from 'next/font/google';
import { Bruno_Ace } from "next/font/google";

export const metadata: Metadata = {
  title: "Formula 1 REACT App",
  description: "Generated by create next app",
};

// Define the fonts
const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  weight: ['400', '700'],
});

const bruno = Bruno_Ace({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bruno',
  weight: ['400'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${bruno.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="XA-UA-Compatible" content="ie=edge" />
      </head>
      <body className="flex flex-col min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
      </body>
    </html>
  );
}
