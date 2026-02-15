import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
