import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "../components/ui/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Data Curator",
  description: "theatrical plays curation project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex h-screen`}
      >
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white flex flex-col">
          <Sidebar />
        </aside>
        {/* Main content */}
        <main className="flex-1 overflow-auto">{children}</main>
      </body>
    </html>
  );
}
