import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import BlakeHeader from "@/components/blake_header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Blake Montgomery",
  description:
    "Blake Montgomery is a Chicago-based theater artist whose career spans acting and directing, written works and devised theater, contemporary naturalism and physical theater styles. He is the Producing Artistic Director of Clownshow.",
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
        className={`${inter.variable} antialiased overflow-hidden w-screen h-screen`}
      >
        <BlakeHeader />
        <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-6rem)]">
          {children}
        </div>
      </body>
    </html>
  );
}
