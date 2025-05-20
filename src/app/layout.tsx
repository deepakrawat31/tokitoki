import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const league = localFont({
  src: "../fonts/LeagueMono.woff2",
  style: "normal",
});

export const metadata: Metadata = {
  title: "tokitoki",
  description:
    "toki meaning time in Japanese - this app is about spending time together even if you are apart.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${league.className} bg-neutral-900 text-neutral-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
