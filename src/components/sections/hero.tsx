'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { heroData } from '@/lib/data';
import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const primaryName = heroData.preferredName || heroData.name;
  const secondaryNameDisplay = heroData.preferredName && heroData.preferredName !== heroData.name ? ` (${heroData.name})` : '';

  const [displayedPrimaryName, setDisplayedPrimaryName] = useState('');
  const [isPrimaryTypingComplete, setIsPrimaryTypingComplete] = useState(false);

  const [sectionRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.1, // When 10% of the section is visible
    triggerOnce: false, // Important: re-trigger animation on each intersection
  });

  // Effect to reset animation states when intersection status changes
  useEffect(() => {
    if (isIntersecting) {
      // Reset animation when section comes into view
      setDisplayedPrimaryName('');
      setIsPrimaryTypingComplete(false);
    } else {
      // Clear the name and reset completion status when out of view
      // to ensure a clean state for the next intersection.
      setDisplayedPrimaryName('');
      setIsPrimaryTypingComplete(false);
    }
  }, [isIntersecting, primaryName]); // Depend on isIntersecting and primaryName

  // Typing effect for primary name
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isIntersecting && !isPrimaryTypingComplete && displayedPrimaryName.length < primaryName.length) {
      timeoutId = setTimeout(() => {
        setDisplayedPrimaryName(primaryName.substring(0, displayedPrimaryName.length + 1));
      }, 200); // Typing speed
    } else if (isIntersecting && displayedPrimaryName.length === primaryName.length && displayedPrimaryName.length > 0) {
      // Only set complete if it actually typed something and is intersecting
      setIsPrimaryTypingComplete(true);
    }

    return () => clearTimeout(timeoutId);
  }, [displayedPrimaryName, primaryName, isPrimaryTypingComplete, isIntersecting]);


  return (
    <section
      ref={sectionRef} // Assign ref for intersection observer
      id="home"
      className={cn(
        "min-h-screen flex items-center justify-center text-center bg-gradient-to-b from-background via-background to-secondary",
        // Base transition styles for the section itself
        'transition-opacity duration-700 ease-out',
        // Control the section's opacity based on intersection
        isIntersecting ? 'opacity-100' : 'opacity-0',
        // Add 'in-view' class when intersecting for children with '.animate-scroll'
        isIntersecting ? 'in-view' : ''
      )}
    >
      {/* This inner div will now rely on the parent section's 'in-view' class for its children's animations */}
      <div className="space-y-6">
        <h1 className={cn(
          "text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground",
          "animate-scroll" // Ensures the h1 block itself animates in
        )} style={{ animationDelay: '0ms' }}> {/* Adjust delay as needed or remove if typing provides enough intro */}
          Hi, I'm{' '}
          <span className="text-primary">
            {displayedPrimaryName}
            {isIntersecting && !isPrimaryTypingComplete && displayedPrimaryName.length < primaryName.length && (
              <span className="typing-cursor" />
            )}
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
    </section>
  );
}
