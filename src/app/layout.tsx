import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const callingCode = localFont({
  src: "../fonts/CallingCode.woff2",
});

export const metadata: Metadata = {
  title: "Tokitoki",
  description:
    "A minimalist chat app where language ain't a hinderence in communication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${callingCode.className} bg-neutral-900 leading-tight text-neutral-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
