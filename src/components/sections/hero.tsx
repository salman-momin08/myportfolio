
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { heroData } from '@/lib/data';
import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';
import { AnimatedSection } from '@/components/animated-section';

export function HeroSection() {
  const primaryName = heroData.preferredName || heroData.name;
  const secondaryNameDisplay = heroData.preferredName && heroData.preferredName !== heroData.name ? ` (${heroData.name})` : '';

  const [displayedPrimaryName, setDisplayedPrimaryName] = useState('');
  const [isPrimaryTypingComplete, setIsPrimaryTypingComplete] = useState(false);

  // This observer is for the HeroSection itself (specifically the AnimatedSection root)
  const [sectionRef, isHeroIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (isHeroIntersecting) {
      setDisplayedPrimaryName('');
      setIsPrimaryTypingComplete(false);
    } else {
      setDisplayedPrimaryName('');
      setIsPrimaryTypingComplete(false);
    }
  }, [isHeroIntersecting, primaryName]);

  useEffect(() => {
    let typingTimeoutId: NodeJS.Timeout | undefined;

    if (isHeroIntersecting && !isPrimaryTypingComplete && primaryName && displayedPrimaryName.length < primaryName.length) {
      typingTimeoutId = setTimeout(() => {
        setDisplayedPrimaryName(primaryName.substring(0, displayedPrimaryName.length + 1));
      }, 200);
    } else if (isHeroIntersecting && primaryName && displayedPrimaryName.length === primaryName.length && !isPrimaryTypingComplete) {
      setIsPrimaryTypingComplete(true);
    }

    return () => {
      if (typingTimeoutId) clearTimeout(typingTimeoutId);
    };
  }, [isHeroIntersecting, displayedPrimaryName, primaryName, isPrimaryTypingComplete]);

  return (
    <AnimatedSection
      id="home"
      ref={sectionRef} // This ref is now correctly passed to the AnimatedSection's root element
      isIntersecting={isHeroIntersecting} // Pass the intersection state to AnimatedSection
      className="min-h-screen flex items-center justify-center text-center bg-gradient-to-b from-background via-background to-background"
    >
      <div className="space-y-6">
        <h1 className={cn(
          "text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl text-foreground tracking-tight",
           isHeroIntersecting ? "animate-scroll" : ""
        )} style={{ animationDelay: '0ms' }}>
          Hi, I'm{' '}
          <span className="text-accent">
            {displayedPrimaryName}
            {isHeroIntersecting && !isPrimaryTypingComplete && primaryName && displayedPrimaryName.length < primaryName.length && (
              <span className="typing-cursor" />
            )}
          </span>
          {isPrimaryTypingComplete && secondaryNameDisplay && (
            <span className={cn("text-2xl text-muted-foreground ml-2", isHeroIntersecting ? "animate-fade-in-delayed" : "opacity-0")}>
              {secondaryNameDisplay}
            </span>
          )}
        </h1>
        <p className={cn("mx-auto max-w-[700px] text-foreground md:text-xl leading-relaxed tracking-wide", isHeroIntersecting ? "animate-scroll" : "")} style={{ animationDelay: '100ms' }}>
          {heroData.title}
        </p>
         <p className={cn("mx-auto max-w-[600px] text-gray-600 text-lg leading-relaxed tracking-wide", isHeroIntersecting ? "animate-scroll" : "")} style={{ animationDelay: '200ms' }}>
          {heroData.subtitle}
        </p>
        <div className={cn(isHeroIntersecting ? "animate-scroll" : "")} style={{ animationDelay: '300ms' }}>
          <Button asChild size="lg" className="c-btn h-btn">
            <Link href={heroData.ctaLink}>{heroData.ctaText}</Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
