import type { Metadata } from "next";
import { Inter, Orbitron, Red_Hat_Text } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({
  weight: ["400", "700"],
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});
const redHatText = Red_Hat_Text({
  weight: ["400", "700"],
  variable: "--font-red_hat_text",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HackerHare",
  description: "HackerHare Security Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${orbitron.variable} ${redHatText.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
