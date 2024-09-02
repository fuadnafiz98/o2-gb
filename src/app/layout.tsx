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
  openGraph: {
    title: "Project Oxygen - Give Bangladesh",
    description:
      "Join Project Oxygen in supporting Give Bangladesh and contribute towards a better future.",
    siteName: "Project Oxygen",
    images: [
      {
        url: "https://o2-mdmuhtasim-fuads-projects.vercel.app/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Project Oxygen - Give Bangladesh",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Oxygen - Give Bangladesh",
    description: "Join Project Oxygen in supporting Give Bangladesh.",
    images: [
      {
        url: "https://o2-mdmuhtasim-fuads-projects.vercel.app/hero.jpeg",
        alt: "Project Oxygen - Give Bangladesh",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
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
