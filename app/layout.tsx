import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youtube Analyzer",
  description:
    "A tool to analyze Youtube channels and videos using the Youtube Data API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialised`}
    >
      <body className="min-h-full flex flex-col">
        <Link href="/" className="fixed top-8 left-2 sm:top-7 sm:left-4">
          <HomeIcon className="w-5 h-5 sm:w-10 sm:h-10 text-white" />
        </Link>
        <div className=" bg-linear-to-r from-purple-900 to-pink-900 text-white py-6 px-4 md:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-center w-full">
            Youtube Analyzer
          </h1>
        </div>
        <Toaster />
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
