import Link from 'next/link';
import { contactData } from '@/lib/data';
import type { ContactLink } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import { Mail } from 'lucide-react';

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="bg-muted/30 text-center">
      <div className="container mx-auto max-w-xl">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-primary animate-scroll">
          {contactData.title}
        </h2>
        <p className="text-muted-foreground md:text-lg mb-8 animate-scroll" style={{ animationDelay: '100ms' }}>
          {contactData.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-scroll" style={{ animationDelay: '200ms' }}>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
                <Link href={`mailto:${contactData.email}`}>
                 <Mail className="mr-2 h-5 w-5" /> Email Me
                </Link>
            </Button>
            <div className="flex gap-4">
             {contactData.socialLinks.map((link: ContactLink) => (
                <Button key={link.name} asChild variant="outline" size="icon" className="rounded-full">
                    <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                        <link.icon className="h-5 w-5 text-primary" />
                    </Link>
                </Button>
             ))}
            </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
