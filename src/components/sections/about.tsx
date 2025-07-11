
'use client';

import { aboutData } from '@/lib/data';
import { AnimatedSection } from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export function AboutSection() {
  const [sectionRef, isIntersecting] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <AnimatedSection
      id="about"
      className="bg-card"
      ref={sectionRef}
      isIntersecting={isIntersecting}
    >
      <div className="container mx-auto grid gap-12 md:grid-cols-2 items-center">
        <div className="space-y-4 animate-scroll">
           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl hero-gradient-text pb-2 px-1">
             {aboutData.title}
           </h2>
          {aboutData.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed tracking-wide">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex justify-center animate-scroll" style={{ animationDelay: '200ms' }}>
           <Image
              src="/images/aboutpic.jpg"
              alt="About Me Image - Replace with your portrait"
              width={400}
              height={500}
              className="rounded-full shadow-lg object-cover aspect-square animate-floatVertical"
              data-ai-hint="professional portrait developer headshot"
              priority
            />
        </div>
      </div>
    </AnimatedSection>
  );
}
