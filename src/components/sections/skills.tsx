
'use client';

import { skillsData } from '@/lib/data';
import type { SkillCategory } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/animated-section';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export function SkillsSection() {
  const [sectionRef, isIntersecting] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <AnimatedSection
      id="skills"
      className="bg-background"
      ref={sectionRef}
      isIntersecting={isIntersecting}
    >
      <div className="container mx-auto">
        <div className="heading text-center mb-12 animate-scroll">
          <small>My Abilities</small>
          <h3 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4 hero-gradient-text pb-2">Skills</h3>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((category: SkillCategory, index) => (
            <Card
              key={index}
              className="animate-scroll bg-card shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <category.icon className="w-6 h-6 text-primary" />
                <CardTitle className="text-lg font-semibold text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
