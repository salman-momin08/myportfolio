import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter for a clean look
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster" // Import Toaster
import { heroData } from '@/lib/data'; // Import heroData

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

// Use preferred name for title if available
const displayName = heroData.preferredName || heroData.name;

export const metadata: Metadata = {
  title: `${displayName} - Portfolio`, // Use display name in title
  description: `Personal portfolio website for ${displayName} showcasing skills and experience.`, // Updated description
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
          'min-h-screen bg-background font-sans antialiased dark', // Apply dark theme by default
          inter.variable
        )}
      >
        {children}
        <Toaster /> {/* Add Toaster component */}
      </body>
    </html>
  );
}