import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const breado = localFont({
  src: "../fonts/Breado-Sans.woff2",
  variable: "--font-breado",
});

const breadoScript = localFont({
  src: "../fonts/Breado-Script.woff2",
  variable: "--font-breado-script",
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
        className={`${breado.variable} ${breadoScript.variable} font-breado bg-neutral-900 leading-normal text-neutral-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
