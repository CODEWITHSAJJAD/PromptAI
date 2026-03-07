import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { cn } from "@/lib/utils";

const safiro = localFont({
  src: [
    {
      path: "../assets/Safiro-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/Safiro-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/Safiro-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-safiro",
});

export const metadata: Metadata = {
  title: "AI CONSULT | AI Consulting & Solutions",
  description: "Next-generation AI consulting for modern businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lenis">
      <body className={cn(safiro.className, safiro.variable, "bg-brandBackground text-brandText")}>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
