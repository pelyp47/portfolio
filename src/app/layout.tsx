import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";

import "./globals.css";
import { InitialPreloader } from "src/page/initial-preloader/InitialPreloader";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sora",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-manrope",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Dmytro Pelyp",
  description: "Professional Portfolio"
};

export default function RootLayout() {
// {
// children
// }: Readonly<{
// children: React.ReactNode;
// }>
  return (
    <html lang="en">
      <body className={`${sora.variable} ${manrope.variable}`}>
        <InitialPreloader />
        {/* {children} */}
      </body>
    </html>
  );
}
