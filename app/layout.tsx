import type { Metadata } from "next";
import { Inter, Libre_Baskerville, Special_Elite } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
const specialElite = Special_Elite({
  subsets: ["latin"],
  variable: "--font-special-elite",
  weight: ["400"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "clownshow",
  description:
    "Award-winning, original live theater, solo performances. Featuring 'Charles Dickens Begrudgingly Performs 'A Christmas Carol' Again' this December.",
  icons: [
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/favicon.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${libreBaskerville.variable} ${specialElite.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
