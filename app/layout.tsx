import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Richard's blog",
  description: "Made with love by richardscull",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
