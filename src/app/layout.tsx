import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import UserNavbar from "@/components/UserNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space'
})

export const metadata: Metadata = {
  title: 'Rhodes Island Terminal // Operator Directory',
  description: 'Operator Directory Interface'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased flex flex-col overflow-x-hidden relative`}
      >
        <UserNavbar/>
        {children}
      </body>
    </html>
  );
}
