import type { Metadata } from "next";
import { Fugaz_One, Play } from "next/font/google";
import "./globals.css";

const ZenDots = Fugaz_One({
  weight: "400",
  subsets: ["latin"],
});

const PlayFont = Play({
  weight: "400",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ZenDots.className} ${PlayFont.className}` }>
        {children}
      </body>
    </html>
  );
}