
'use client';

import { educationData } from '@/lib/data';
import type { EducationItem } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '@/components/animated-section';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export function EducationSection() {
  const [sectionRef, isIntersecting] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <AnimatedSection
      id="education"
      className="bg-card"
      ref={sectionRef}
      isIntersecting={isIntersecting}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-normal sm:text-4xl md:text-5xl text-center mb-12 text-secondary animate-scroll">
          Education
        </h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {educationData.map((item: EducationItem, index) => (
            <Card
              key={index}
              className="animate-scroll flex items-start gap-4 p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out bg-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
               <div className="bg-primary/10 p-3 rounded-full">
                 <item.icon className="w-6 h-6 text-primary" />
               </div>
              <div>
                <CardHeader className="p-0 pb-1">
                  <CardTitle className="text-lg font-semibold text-foreground">{item.degree}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground tracking-wide">
                    {item.institution}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm text-muted-foreground tracking-wide">{item.period}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
