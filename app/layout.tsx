import type { Metadata } from "next";
import { Inter as FontSans, Mukta_Malar, Rum_Raisin } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const rumRaisin = Rum_Raisin({
  subsets: ["latin"],
  variable: "--font-rum-raisin",
  weight: "400",
});

const muktaMalar = Mukta_Malar({
  subsets: ["latin"],
  variable: "--font-mukta-malar",
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Izabelle Luna",
  description: "Izabelle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          rumRaisin.variable,
          muktaMalar.variable,
          "from-slate-950 to-blue-950 bg-gradient-to-b text-white",
        )}
      >
        {children}
      </body>
    </html>
  );
}
