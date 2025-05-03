import Link from 'next/link';
import { contactData } from '@/lib/data';
import type { ContactLink } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import { Mail } from 'lucide-react';
import { cn } from '@/lib/utils'; // Import cn

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="bg-secondary text-center"> {/* Changed background to secondary */}
      <div className="container mx-auto max-w-xl">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-primary animate-scroll">
          {contactData.title}
        </h2>
        <p className="text-muted-foreground md:text-lg mb-8 animate-scroll" style={{ animationDelay: '100ms' }}>
          {contactData.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-scroll" style={{ animationDelay: '200ms' }}>
            {/* Email Button */}
            <Button asChild size="lg" variant="default" className="w-full sm:w-auto">
                <Link href={`mailto:${contactData.email}`} className="flex items-center"> {/* Added flex items-center here */}
                  <Mail className="mr-2 h-5 w-5" /> Email Me
                </Link>
            </Button>
            {/* Social Links */}
            <div className="flex gap-4">
             {contactData.socialLinks.map((link: ContactLink) => (
                <Button key={link.name} asChild variant="outline" size="icon" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    {/* Added flex centering classes to the Link to ensure proper rendering with size="icon" and asChild */}
                    <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="flex items-center justify-center">
                        <link.icon className="h-5 w-5" />
                    </Link>
                </Button>
             ))}
            </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
