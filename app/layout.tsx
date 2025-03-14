import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";



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
    <html suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
