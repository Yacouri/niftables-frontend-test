import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Creon",
  description:
    "The world's first platform for tokenizing AI blockchain projects.",
  keywords: [
    "Ai",
    "NFT",
    "Crypto",
    "Blockchain",
    "Tokenizing",
    // Add more keywords here
  ],
  applicationName: "Creon",
  authors: {
    name: "Zouhir Yacouri",
    url: "https://yacouri.com",
  },
  category: "NFT",
  creator: "Zouhir Yacouri",
};

// Loading custom fonts
const Satoshi = localFont({
  src: [
    {
      path: "../assets/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

const MonumentExtended = localFont({
  src: [
    {
      path: "../assets/fonts/MonumentExtended-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${MonumentExtended.className} ${Satoshi.className}`}>
        {children}
      </body>
    </html>
  );
}
