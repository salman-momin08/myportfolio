
'use client';

import Link from 'next/link';
import { learningData } from '@/lib/data';
import type { AchievementItem } from '@/lib/data';
import { AnimatedSection } from '@/components/animated-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export function LearningSection() {
  const { title, description, achievementsSubtitle, achievements, icon: SectionIcon } = learningData;
  const [sectionRef, isIntersecting] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <AnimatedSection
      id="learning"
      className="bg-background py-16 md:py-24 lg:py-32"
      ref={sectionRef}
      isIntersecting={isIntersecting}
    >
      <div className="container mx-auto">
        <div className="heading text-center mb-12 animate-scroll">
          {SectionIcon && (
            <div className="flex justify-center mb-4">
              <SectionIcon className="h-12 w-12 text-primary" />
            </div>
          )}
          <h2 className="text-3xl font-bold tracking-normal sm:text-4xl md:text-5xl hero-gradient-text pb-2 px-1">
            {title}
          </h2>
        </div>

        <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mb-12 animate-scroll tracking-wide" style={{ animationDelay: '100ms' }}>
          {description}
        </p>

        {achievements && achievements.length > 0 && (
          <div className="animate-scroll" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-semibold tracking-normal text-center mb-8 text-foreground">
              {achievementsSubtitle}
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {achievements.map((item: AchievementItem, index) => (
                <Card
                  key={index}
                  className="animate-scroll bg-card shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out flex flex-col text-center"
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  <CardHeader className="pb-4">
                    {item.icon && <item.icon className="w-10 h-10 text-primary mx-auto mb-3" />}
                    <CardTitle className="text-lg font-semibold hero-gradient-text">{item.name}</CardTitle>
                    {item.issuer && (
                      <CardDescription className="text-sm text-muted-foreground">
                        Issued by: {item.issuer}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <Button asChild size="sm" variant="outline" className="c-btn-card w-full transition-all duration-300">
                      <Link href={item.href} target="_blank" rel="noopener noreferrer">
                        View Here
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
