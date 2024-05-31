import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import local from "next/font/local";

const neueMontreal = local({
  src: [
    {
      path: "./fonts/PPNeueMontreal-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PPNeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
});
const bricolageGrotesque = localFont({
  src: "./fonts/BricolageGrotesque-Regular-BF648bd5781d794.otf",
  display: "swap",
  variable: "--font-bric",
});
const oldschoolGrotesk = localFont({
  src: "./fonts/OldschoolGrotesk-NormalMedium.otf",
  display: "swap",
  variable: "--font-oldschool",
});

export const metadata: Metadata = {
  title: "Zen",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neueMontreal.variable} ${bricolageGrotesque.variable} ${oldschoolGrotesk.variable} bg-clr-base-bg font-sans`}
      >
        {children}
      </body>
    </html>
  );
}