
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
        <h2 className="text-3xl font-bold tracking-normal sm:text-4xl md:text-5xl text-center mb-12 hero-gradient-text animate-scroll pb-2 px-1">
          Journey
        </h2>
        <div className={cn(
          "items-start md:grid md:gap-x-12",
          isSingleItem ? "md:grid-cols-[1fr_2fr]" : "md:grid-cols-2"
        )}>
          {/* Image Column */}
          <div className={cn(
            "hidden md:col-span-1 md:flex flex-col items-center justify-center space-y-8 sticky top-24 self-start animate-scroll"
            )} style={{ animationDelay: '100ms' }}>
            <Image
              src="/images/imageone.jpg"
              alt="Journey Image 1"
              width={200}
              height={200}
              className="rounded-lg shadow-xl object-cover animate-floatRight"
              data-ai-hint="coding journey"
            />
            <Image
              src="/images/imagetwo.jpg"
              alt="Journey Image 2"
              width={200}
              height={200}
              className="rounded-lg shadow-xl object-cover animate-floatLeft"
              data-ai-hint="career growth"
            />
          </div>

          {/* Timeline/Cards Column */}
          <div className={cn(
             isSingleItem ? "md:col-span-2" : "md:col-span-1 md:pr-8 lg:pr-12"
          )}>
            {experienceData.length > 0 ? (
              <div className={cn(
                "relative space-y-12",
                // Mobile: timeline on the left
                "before:absolute before:inset-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary before:to-transparent",
                "before:ml-5",
                // Desktop: timeline depends on item count
                isSingleItem ? "md:before:mx-auto md:before:ml-0" : "md:before:ml-0"
                )}>
                {experienceData.map((item: ExperienceItem, index) => (
                  <div
                    key={index}
                    className="relative animate-scroll"
                    style={{ animationDelay: `${(index * 150) + 200}ms` }}
                  >
                    {/* Icon Container: Visible only on mobile */}
                    <div className="absolute top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center rounded-full shadow-md z-10 bg-primary left-5 -ml-px md:hidden">
                      <item.icon className="w-4 h-4 text-primary-foreground" />
                    </div>

                    <Card className={cn(
                      "relative bg-card shadow-lg max-w-lg",
                      // Mobile positioning
                      "ml-14",
                      // Desktop positioning
                      isSingleItem
                         ? "md:mx-auto" // Single item: card centered under centered timeline
                         : "md:ml-4"   // Multiple items: card to the right of left-aligned timeline
                    )}>
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold hero-gradient-text">{item.role}</CardTitle>
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
