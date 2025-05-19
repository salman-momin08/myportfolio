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
    triggerOnce: false, // Ensure animation re-triggers on re-scroll
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isIntersecting) {
      // Reset animation state if section re-enters viewport
      setDisplayedPrimaryName('');
      setIsPrimaryTypingComplete(false);

      if (displayedPrimaryName.length < primaryName.length) {
        timeoutId = setTimeout(() => {
          setDisplayedPrimaryName(primaryName.substring(0, displayedPrimaryName.length + 1));
        }, 150); // Slower typing speed
      } else if (displayedPrimaryName.length === primaryName.length && displayedPrimaryName.length > 0) {
        setIsPrimaryTypingComplete(true);
      }
    } else {
      // Optionally reset when not intersecting if you want animation to always restart from scratch
      // setDisplayedPrimaryName('');
      // setIsPrimaryTypingComplete(false);
    }
    return () => clearTimeout(timeoutId);
  }, [displayedPrimaryName, primaryName, isPrimaryTypingComplete, isIntersecting]);


  return (
    <section
      ref={sectionRef}
      id="home"
      className={cn(
        "min-h-screen flex items-center justify-center text-center bg-gradient-to-b from-background via-background to-background", // Changed to-secondary to to-background
        'transition-opacity duration-700 ease-out',
        isIntersecting ? 'opacity-100' : 'opacity-0',
        isIntersecting ? 'in-view' : '' // This class is used by globals.css for animate-scroll
      )}
    >
      <div className="space-y-6">
        <h1 className={cn(
          "text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground",
           isIntersecting ? "animate-scroll" : "" // Apply animation only when intersecting
        )} style={{ animationDelay: '0ms' }}>
          Hi, I'm{' '}
          <span className="text-primary">
            {displayedPrimaryName}
            {isIntersecting && !isPrimaryTypingComplete && displayedPrimaryName.length < primaryName.length && (
              <span className="typing-cursor" />
            )}
          </span>
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
