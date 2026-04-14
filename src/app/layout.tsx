import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cosmic Signature Quiz",
  description:
    "How well do you really know Cosmic Signature? Test your mastery of mechanics, strategies, prizes, and special roles.",
  openGraph: {
    title: "Cosmic Signature Quiz",
    description:
      "Test your Cosmic Signature knowledge — basic, medium, or hard.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-space-950 text-mist">{children}</body>
    </html>
  );
}
