
import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google'; // Changed fonts
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";
import { heroData } from '@/lib/data';
import { ThemeProvider } from '@/components/theme-provider';
import { AnimatedBackground } from '@/components/animated-background';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Variable for Inter
  weight: ['400', '500', '600', '700']
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins', // Variable for Poppins
  weight: ['400', '500', '600', '700', '800']
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
          'min-h-screen bg-background font-inter antialiased', // Use Inter as base
          inter.variable, // Apply Inter variable
          poppins.variable // Apply Poppins variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedBackground />
          <div className="relative z-10">
            {children}
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
