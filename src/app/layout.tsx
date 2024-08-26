import type { Metadata } from "next";
import { Inter, Noto_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sarif",
});

export const metadata: Metadata = {
  title: "Project Oxygen - Give Bangladesh",
  description: "Project Oxygen of Give Bangladesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${notoSerifDisplay.variable}`}>
        {children}
      </body>
    </html>
  );
}
