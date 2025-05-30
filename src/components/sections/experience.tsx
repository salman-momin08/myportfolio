import { experienceData } from '@/lib/data';
import type { ExperienceItem } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '@/components/animated-section';
import Image from 'next/image';

export function ExperienceSection() {
  return (
    <AnimatedSection id="experience" className="bg-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-normal sm:text-4xl md:text-5xl text-center mb-12 text-accent animate-scroll">
          Journey So Far
        </h2>
        <div className="md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-12 items-start">
          {/* Image Column (Left) - hidden on small, takes 1/3 or 1/4 on larger */}
          <div className="hidden md:col-span-1 lg:col-span-1 md:flex flex-col items-center justify-center space-y-8 sticky top-24 self-start animate-scroll" style={{ animationDelay: '100ms' }}>
            <Image
              src="https://placehold.co/200x300.png"
              alt="Journey Image 1"
              width={200}
              height={300}
              className="rounded-lg shadow-xl object-cover animate-floatRight"
              data-ai-hint="coding journey"
            />
            <Image
              src="https://placehold.co/200x300.png"
              alt="Journey Image 2"
              width={200}
              height={300}
              className="rounded-lg shadow-xl object-cover animate-floatLeft"
              data-ai-hint="career growth"
            />
          </div>

          {/* Timeline Column (Right or Full Width) - takes 2/3 or 3/4 on larger */}
          <div className="md:col-span-2 lg:col-span-3">
            {experienceData.length > 0 ? (
              <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary before:to-transparent md:before:mx-auto md:before:ml-0 before:bg-border">
                {experienceData.map((item: ExperienceItem, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center md:justify-normal md:odd:flex-row-reverse ${
                      experienceData.length === 1 ? 'md:justify-center' : (index % 2 === 0 ? 'md:justify-start' : 'md:justify-end')
                    } animate-scroll`}
                    style={{ animationDelay: `${(index * 150) + 200}ms` }} // Offset timeline animation start
                  >
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 -ml-1 h-6 w-6 flex items-center justify-center rounded-full bg-primary shadow-md md:left-1/2 md:-translate-x-1/2">
                      <item.icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <Card className={`relative w-full max-w-md ml-12 md:ml-0 ${experienceData.length === 1 ? '' : 'md:odd:mr-10 md:even:ml-10'} bg-card shadow-lg`}>
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold text-foreground">{item.role}</CardTitle>
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
