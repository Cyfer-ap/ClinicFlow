import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClinicFlow Token",
  description:
    "Smart clinic queue, token, appointment, and follow-up management system for small clinics."
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

