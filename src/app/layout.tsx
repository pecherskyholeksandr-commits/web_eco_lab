import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Eco Monitoring App",
    description: "Ecological data monitoring system",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({
    children,
}: RootLayoutProps) {
    return (
        <html lang="uk">
            <body
                className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
        `}
            >
                <header className="bg-green-700 text-white shadow-md">
                    <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
                        <h1 className="text-2xl font-bold">
                            Eco Monitoring System
                        </h1>

                        <ul className="flex gap-6 text-lg">
                            <li>
                                <Link href="/">Home</Link>
                            </li>

                            <li>
                                <Link href="/about">About</Link>
                            </li>

                            <li>
                                <Link href="/pollutants">Pollutants</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <main className="max-w-6xl mx-auto p-6 min-h-screen">
                    {children}
                </main>

                <footer className="bg-gray-200 text-center p-4">
                    © 2026 Eco Monitoring App
                </footer>
            </body>
        </html>
    );
}