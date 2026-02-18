import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const euclidCircularB = localFont({
  src: [
    { path: "../fonts/EuclidCircularB-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/EuclidCircularB-Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/EuclidCircularB-Semibold.otf", weight: "600", style: "normal" },
    { path: "../fonts/EuclidCircularB-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-euclid",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Integra Brand Guide",
  description:
    "Official brand guidelines, logos, color palette, typography, and visual identity for the Integralayer ecosystem.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={euclidCircularB.variable}>
      <body>{children}</body>
    </html>
  );
}
