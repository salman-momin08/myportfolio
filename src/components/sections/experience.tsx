
'use client';

import { experienceData } from '@/lib/data';
import type { ExperienceItem } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '@/components/animated-section';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

export function ExperienceSection() {
  const [sectionRef, isIntersecting] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const isSingleItem = experienceData.length === 1;

  return (
    <AnimatedSection
      id="experience"
      className="bg-background py-16 md:py-24 lg:py-32"
      ref={sectionRef}
      isIntersecting={isIntersecting}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-normal sm:text-4xl md:text-5xl text-center mb-12 text-primary animate-scroll">
          Journey So Far
        </h2>
        <div className={cn(
          "md:grid items-start",
          isSingleItem
            ? "md:grid-cols-2 md:gap-8"
            : "md:grid-cols-[1fr_2fr] md:gap-12 lg:grid-cols-[1fr_2fr]"
        )}>
          {/* Image Column */}
          <div className="hidden md:col-span-1 md:flex flex-col items-center justify-center space-y-8 sticky top-24 self-start animate-scroll" style={{ animationDelay: '100ms' }}>
            <Image
              src="https://placehold.co/200x300.png"
              alt="Journey Image 1"
              width={200}
              height={300}
              className="rounded-lg shadow-xl object-cover animate-floatRight"
              data-ai-hint="coding journey"
            />
            <Image
              src="https://placehold.co/200x300.png"
              alt="Journey Image 2"
              width={200}
              height={300}
              className="rounded-lg shadow-xl object-cover animate-floatLeft"
              data-ai-hint="career growth"
            />
          </div>

          {/* Timeline Column */}
          <div className={cn(
            "md:col-span-1",
            !isSingleItem && "md:pr-8 lg:pr-12" // Added right padding for multiple items
          )}>
            {experienceData.length > 0 ? (
              <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary before:to-transparent md:before:mx-auto md:before:ml-0 before:bg-border">
                {experienceData.map((item: ExperienceItem, index) => (
                  <div
                    key={index}
                    className={cn(
                      "relative animate-scroll"
                    )}
                    style={{ animationDelay: `${(index * 150) + 200}ms` }}
                  >
                    <div className={cn(
                      "absolute top-1/2 -translate-y-1/2 -ml-1 h-6 w-6 flex items-center justify-center rounded-full bg-primary shadow-md",
                      "left-5", // Mobile: icon on the left with padding
                      "md:left-1/2 md:-translate-x-1/2" // Desktop: icon centered on the blue line
                    )}>
                      <item.icon className="w-4 h-4 text-primary-foreground" />
                    </div>

                    <Card className={cn(
                      "relative w-full max-w-lg bg-card shadow-lg", // Card can take full width up to max-w-lg
                      "ml-12", // Mobile: card shifted right of icon
                      "md:mx-auto" // Desktop: card centered in its column for both single and multiple items
                    )}>
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold text-foreground">{item.role}</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">
                          {item.company} | {item.period}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 leading-relaxed tracking-wide">
                          {item.description.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground animate-scroll">Details coming soon...</p>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
