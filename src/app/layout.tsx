import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter for a clean look
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster" // Import Toaster

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'AnimatedFolio - Portfolio',
  description: 'An animated portfolio showcasing skills and experience.',
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
