import Link from 'next/link';
import { projectsData } from '@/lib/data';
import type { ProjectItem } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { cn } from '@/lib/utils';

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="bg-card"> {/* Section background is white */}
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary animate-scroll">
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project: ProjectItem, index) => (
            <Card key={index} className="flex flex-col animate-scroll h-full bg-card shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ animationDelay: `${index * 150}ms` }}> {/* Individual cards are white */}
              <CardHeader>
                 <div className="flex items-center gap-3 mb-2">
                    <project.icon className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl font-semibold text-foreground">{project.title}</CardTitle>
                 </div>
                <CardDescription className="text-muted-foreground flex-grow">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between flex-grow">
                 <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                {project.link && (
                    <Button asChild variant="outline" size="sm" className="mt-auto self-start">
                         <Link href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                           <Github className="mr-2 h-4 w-4" />
                           View Code
                         </Link>
                    </Button>
                )}

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
