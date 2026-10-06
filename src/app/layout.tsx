import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/_sidebar/AppSidebar";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Synapse Dashboard",
  description: "A dashboard for managing your AI agents usage and performance.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        <SidebarProvider
          style={
            {
              "--sidebar-width": "260px",
              "--sidebar-width-mobile": "260px",
            } as CSSProperties
          }
        >
          <AppSidebar />
          <main className="flex min-h-svh w-full min-w-0 flex-col bg-neutral-900">
            <Navbar />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}