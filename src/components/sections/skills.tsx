import { skillsData } from '@/lib/data';
import type { SkillCategory } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/animated-section';

export function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="bg-secondary"> {/* Changed to bg-secondary */}
      <div className="container mx-auto">
        <div className="heading text-center mb-12 animate-scroll">
          <small>My Abilities</small>
          <h3>Skills</h3>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((category: SkillCategory, index) => (
            <Card
              key={index}
              className="animate-scroll bg-card shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <category.icon className="w-6 h-6 text-primary" />
                <CardTitle className="text-lg font-semibold text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm border-primary text-primary">{skill}</Badge>
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
