
'use client';

import Link from 'next/link';
import { projectsData } from '@/lib/data';
import type { ProjectItem } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export function ProjectsSection() {
  const [sectionRef, isIntersecting] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <AnimatedSection
      id="projects"
      className="bg-card"
      ref={sectionRef}
      isIntersecting={isIntersecting}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-normal sm:text-4xl md:text-5xl text-center mb-12 hero-gradient-text animate-scroll pb-2 px-1">
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project: ProjectItem, index) => (
            <Card key={index} className="flex flex-col animate-scroll h-full bg-card shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader>
                 <div className="flex items-center gap-3 mb-2">
                    <project.icon className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl font-semibold hero-gradient-text">{project.title}</CardTitle>
                 </div>
                <CardDescription className="text-muted-foreground flex-grow leading-relaxed tracking-wide break-words">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between flex-grow">
                 <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                <div className="flex flex-wrap gap-2 mt-auto self-start">
                  {project.link && (
                      <Button asChild size="sm" variant="outline" className="c-btn-card transition-all duration-300">
                           <Link href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                             <Github className="mr-2 h-4 w-4" />
                             View Code
                           </Link>
                      </Button>
                  )}
                  {project.webLink && (
                    <Button asChild size="sm" variant="outline" className="c-btn-card transition-all duration-300">
                      <Link href={project.webLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
