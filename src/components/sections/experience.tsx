
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
          Journey
        </h2>
        <div className={cn(
          "md:grid items-start",
          isSingleItem
            ? "md:grid-cols-2 md:gap-8" // For single item: 50/50 split
            : "md:grid-cols-2 md:gap-x-12" // For multiple items: balanced two-column
        )}>
          {/* Image Column */}
          <div className={cn(
            "hidden md:col-span-1 md:flex flex-col items-center justify-center space-y-8 sticky top-24 self-start animate-scroll"
            )} style={{ animationDelay: '100ms' }}>
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
             "md:col-span-1", // This column takes the second half in a 2-col grid
             !isSingleItem && "md:pr-8 lg:pr-12" // Padding for multiple items to prevent touching edge
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
                    {/* Icon Container: Visible on mobile, hidden on desktop */}
                    <div className={cn(
                      "absolute top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center rounded-full shadow-md z-10",
                      "bg-primary",
                      "left-5 -ml-px", // Mobile: Icon on the left
                      "md:hidden" // Hide on desktop and larger
                    )}>
                      <item.icon className="w-4 h-4 text-primary-foreground" />
                    </div>

                    <Card className={cn(
                      "relative bg-card shadow-lg max-w-lg",
                      isSingleItem
                         ? "ml-14 md:mx-auto" // Mobile: space for icon. Desktop (single): centered.
                         : "ml-14 md:ml-[calc(50%_+_1rem)]" // Mobile: space for icon. Desktop (multiple): 1rem right of center timeline.
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
