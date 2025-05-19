
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
    threshold: 0.1,
    triggerOnce: false, // Ensures animation can re-trigger on re-scroll
  });

  // Effect to reset animation states based on intersection
  useEffect(() => {
    if (isIntersecting) {
      // When section becomes visible, reset states to allow re-animation.
      setDisplayedPrimaryName('');
      setIsPrimaryTypingComplete(false);
    } else {
      // When section is not visible, ensure states are reset.
      setDisplayedPrimaryName('');
      setIsPrimaryTypingComplete(false);
    }
  }, [isIntersecting, primaryName]); // primaryName dependency to re-init if it somehow changes.

  // Effect for the typing animation itself
  useEffect(() => {
    let typingTimeoutId: NodeJS.Timeout | undefined;

    if (isIntersecting && !isPrimaryTypingComplete && primaryName && displayedPrimaryName.length < primaryName.length) {
      // If intersecting, not yet complete, and there's more of the name to type
      typingTimeoutId = setTimeout(() => {
        setDisplayedPrimaryName(primaryName.substring(0, displayedPrimaryName.length + 1));
      }, 200); // Adjusted typing speed to be slower
    } else if (isIntersecting && primaryName && displayedPrimaryName.length === primaryName.length && !isPrimaryTypingComplete) {
      // If intersecting, name is fully typed, and not yet marked as complete
      setIsPrimaryTypingComplete(true);
    }

    return () => {
      if (typingTimeoutId) clearTimeout(typingTimeoutId); // Cleanup timeout on unmount or re-run
    };
  }, [isIntersecting, displayedPrimaryName, primaryName, isPrimaryTypingComplete]); // Dependencies that control the typing flow

  return (
    <section
      ref={sectionRef}
      id="home"
      className={cn(
        "min-h-screen flex items-center justify-center text-center bg-gradient-to-b from-background via-background to-background", // Changed to-secondary to to-background
        'transition-opacity duration-700 ease-out', // Section fade effect
        isIntersecting ? 'opacity-100' : 'opacity-0',
        isIntersecting ? 'in-view' : '' // For child .animate-scroll elements
      )}
    >
      <div className="space-y-6">
        <h1 className={cn(
          "text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground",
           isIntersecting ? "animate-scroll" : "" // H1 scroll animation
        )} style={{ animationDelay: '0ms' }}>
          Hi, I'm{' '}
          <span className="text-accent"> {/* Changed from text-primary to text-accent */}
            {displayedPrimaryName}
            {/* Typing cursor */}
            {isIntersecting && !isPrimaryTypingComplete && primaryName && displayedPrimaryName.length < primaryName.length && (
              <span className="typing-cursor" />
            )}
          </span>
          {/* Secondary name, fades in after primary name typing is complete */}
          {isPrimaryTypingComplete && secondaryNameDisplay && (
            <span className={cn("text-2xl text-muted-foreground ml-2", isIntersecting ? "animate-fade-in-delayed" : "opacity-0")}>
              {secondaryNameDisplay}
            </span>
          )}
        </h1>
        <p className={cn("mx-auto max-w-[700px] text-muted-foreground md:text-xl", isIntersecting ? "animate-scroll" : "")} style={{ animationDelay: '100ms' }}>
          {heroData.title}
        </p>
         <p className={cn("mx-auto max-w-[600px] text-lg text-secondary-foreground", isIntersecting ? "animate-scroll" : "")} style={{ animationDelay: '200ms' }}>
          {heroData.subtitle}
        </p>
        <div className={cn(isIntersecting ? "animate-scroll" : "")} style={{ animationDelay: '300ms' }}>
          <Button asChild size="lg" className="c-btn h-btn">
            <Link href={heroData.ctaLink}>{heroData.ctaText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
