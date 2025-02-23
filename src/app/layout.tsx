import type { Metadata } from "next";
import { Bayon, Darker_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const bayon = Bayon({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bayon",
});

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-darker-grotesque",
});

export const metadata: Metadata = {
  title: "PLAYSTATION 6 ",
  description: "With Power and Precision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bayon.variable} ${darkerGrotesque.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
