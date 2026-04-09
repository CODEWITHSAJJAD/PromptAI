import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ClientLayoutWrapper } from "@/components/layout/ClientLayoutWrapper";
import { cn } from "@/lib/utils";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { NAVBAR_QUERY } from "@/sanity/lib/queries";
import { AdminProvider } from "@/app/admin/context/AdminContext";

async function getNavbar() {
  if (!isSanityConfigured || !client) return [];
  try {
    const data = await client.fetch(NAVBAR_QUERY);
    return data?.items?.map((item: { label: string; href: string }) => ({
      name: item.label,
      href: item.href,
    })) || [];
  } catch (error) {
    console.error("Error fetching navbar:", error);
    return [];
  }
}

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = await getNavbar();

  return (
    <html lang="en" className="lenis">
      <body className={cn(safiro.className, safiro.variable, "bg-brandBackground text-brandText")}>
        <AdminProvider>
          <SmoothScroll>
            <ClientLayoutWrapper links={links}>
              {children}
            </ClientLayoutWrapper>
          </SmoothScroll>
        </AdminProvider>
      </body>
    </html>
  );
}
