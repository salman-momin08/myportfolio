
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { heroData } from '@/lib/data';
import { AnimatedSection } from '@/components/animated-section';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const primaryName = heroData.preferredName || heroData.name;
  const secondaryNameDisplay = heroData.preferredName && heroData.preferredName !== heroData.name ? ` (${heroData.name})` : '';

  const [displayedPrimaryName, setDisplayedPrimaryName] = useState('');
  const [isPrimaryTypingComplete, setIsPrimaryTypingComplete] = useState(false);

  useEffect(() => {
    if (displayedPrimaryName.length < primaryName.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedPrimaryName(primaryName.substring(0, displayedPrimaryName.length + 1));
      }, 120); // Typing speed in milliseconds
      return () => clearTimeout(timeoutId);
    } else {
      setIsPrimaryTypingComplete(true);
    }
  }, [displayedPrimaryName, primaryName]);

  return (
    <AnimatedSection id="home" className="min-h-screen flex items-center justify-center text-center bg-gradient-to-b from-background via-background to-secondary">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground animate-scroll">
          Hi, I'm{' '}
          <span className="text-primary">
            {displayedPrimaryName}
            {!isPrimaryTypingComplete && <span className="typing-cursor" />}
          </span>
          {isPrimaryTypingComplete && secondaryNameDisplay && (
            <span className="text-2xl text-muted-foreground ml-2 animate-fade-in-delayed">
              {secondaryNameDisplay}
            </span>
          )}
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl animate-scroll" style={{ animationDelay: '100ms' }}>
          {heroData.title}
        </p>
         <p className="mx-auto max-w-[600px] text-lg text-secondary-foreground animate-scroll" style={{ animationDelay: '200ms' }}>
          {heroData.subtitle}
        </p>
        <div className="animate-scroll" style={{ animationDelay: '300ms' }}>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href={heroData.ctaLink}>{heroData.ctaText}</Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
