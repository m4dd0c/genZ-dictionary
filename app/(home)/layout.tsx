import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import "../globals.css";
import React from "react";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/hooks/useTheme";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "GenZ Dictionary",
  description: "A Dictionary for genZ generation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
