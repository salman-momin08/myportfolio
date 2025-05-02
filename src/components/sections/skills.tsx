import { skillsData } from '@/lib/data';
import type { SkillCategory } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/animated-section';

export function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary animate-scroll">
          Skills
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((category: SkillCategory, index) => (
            <Card key={index} className="animate-scroll" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <category.icon className="w-6 h-6 text-primary" />
                <CardTitle className="text-lg font-semibold text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm">{skill}</Badge>
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
