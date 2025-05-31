
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
          <div className={cn(
            "hidden md:col-span-1 md:flex flex-col items-center justify-center space-y-8 sticky top-24 self-start animate-scroll",
            isSingleItem && "md:col-span-1" // For single item, image column takes half
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
            "md:col-span-1",
             isSingleItem ? "" : "md:col-span-1 lg:col-span-1",
            !isSingleItem && "md:pr-8 lg:pr-12"
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
                      "absolute top-1/2 -translate-y-1/2 -ml-1 h-6 w-6 flex items-center justify-center rounded-full shadow-md",
                      "bg-red-500 border-4 border-green-500", // Diagnostic: Hardcoded background and border
                      "left-5",
                      "md:left-1/2 md:-translate-x-1/2"
                    )}>
                      <item.icon className="w-4 h-4 text-black" /> {/* Diagnostic: Hardcoded icon color */}
                    </div>

                    <Card className={cn(
                      "relative w-full max-w-lg bg-card shadow-lg",
                      "ml-12",
                      "md:mx-auto" // Center card in its column on desktop
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
