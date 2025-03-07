import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import  Sidebar  from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dono-App",
  description: "Give back to the community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <ClerkProvider signUpForceRedirectUrl={'/onboarding'}>
      
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <Sidebar/>
      <MobileNav/> 
      <div className="bg-gray-50">
        {children}
        <Toaster />
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
