import type { Metadata } from "next";
import { Poppins } from '@next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/custom/NavBar";
import React from "react";
import { Dock } from "@/components/ui/dock";
import { DockDemo } from "@/components/custom/Dock";

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900', '300'], // Choose the weights you need
  style: ['normal', 'italic'], // Choose the styles you need
  subsets: ['latin'],  // Add other subsets if necessary (e.g., 'cyrillic')
  display: 'swap',  // Optional: Adjust font display behavior

});

export const metadata: Metadata = {
  title: "Collge",
  description: "Collge is the ultimate social networking app for university students. Connect with classmates, join study groups, plan campus events, and enhance your college experience with our exclusive student-only platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={poppins.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* <Navbar /> */}
            {children}

            {/* <DockDemo /> */}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
