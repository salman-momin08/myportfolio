import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google'; // Changed to Josefin Sans
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";
import { heroData } from '@/lib/data';

const josefinSans = Josefin_Sans({ // Changed font
  subsets: ['latin'],
  variable: '--font-josefin', // Changed variable name
  weight: ['400', '600', '700'] // Added weights if needed
});

const displayName = heroData.preferredName || heroData.name;

export const metadata: Metadata = {
  title: `${displayName} - Portfolio`,
  description: `Personal portfolio website for ${displayName} showcasing skills and experience.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-josefin antialiased', // Use new font variable
          josefinSans.variable // Apply new font variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
