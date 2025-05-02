import { experienceData } from '@/lib/data';
import type { ExperienceItem } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '@/components/animated-section';

export function ExperienceSection() {
  return (
    <AnimatedSection id="experience" className="bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary animate-scroll">
          Experience
        </h2>
        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary before:to-transparent md:before:mx-auto md:before:ml-0">
          {experienceData.map((item: ExperienceItem, index) => (
            <div
              key={index}
              className={`relative flex items-center md:justify-normal md:odd:flex-row-reverse ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              } animate-scroll`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Dot */}
              <div className="absolute left-5 top-1/2 -translate-y-1/2 -ml-1 h-6 w-6 flex items-center justify-center rounded-full bg-primary shadow-md md:left-1/2 md:-translate-x-1/2">
                 <item.icon className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Card */}
              <Card className="relative w-full max-w-md ml-12 md:ml-0 md:odd:mr-10 md:even:ml-10">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">{item.role}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {item.company} | {item.period}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      {item.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
