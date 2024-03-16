import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HypeTribe ",
  description: "ETHGlobalLondon Hackathon Project 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed top-0 left-0 w-full z-10">
          <header className="flex justify-between items-center py-4 text-white bg-opacity-90 bg-blue-500">
            <nav className="flex space-x-4 container mx-auto px-4">
              <a href="/creators" className="hover:underline text-white">
                Creators
              </a>
              <a href="/create-campaign" className="hover:underline text-white">
                Create a Campaign
              </a>
              <a href="/profile" className="hover:underline text-white">
                Profile
              </a>
            </nav>
          </header>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
