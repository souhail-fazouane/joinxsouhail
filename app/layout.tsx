import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interview Twitch Clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-primary">{children}</body>
    </html>
  );
}
