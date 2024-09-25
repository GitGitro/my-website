import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const openSans = localFont({
  src: "./fonts/OpenSans.ttf",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gitro",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="sunset">
      <body
        className={`${openSans} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
