'use client';

import Link from 'next/link';
import { contactData } from '@/lib/data';
import type { ContactLink } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import { Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export function ContactSection() {
  const [sectionRef, isIntersecting] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <AnimatedSection
      id="contact"
      className="bg-background text-center"
      ref={sectionRef}
      isIntersecting={isIntersecting}
    >
      <div className="container mx-auto max-w-xl">
        <div className="heading animate-scroll">
          <small>Contact</small>
          <h3 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4 text-primary">
             {contactData.title}
          </h3>
        </div>
        <p className="text-muted-foreground md:text-lg mb-8 animate-scroll leading-relaxed tracking-wide" style={{ animationDelay: '100ms' }}>
          {contactData.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-scroll" style={{ animationDelay: '200ms' }}>
            <Button asChild size="lg" className="c-btn w-full sm:w-auto">
                <Link href={`mailto:${contactData.email}`} className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" /> Email Me
                </Link>
            </Button>
            <div className="flex gap-4">
             {contactData.socialLinks.map((link: ContactLink) => (
                <Button key={link.name} asChild variant="outline" size="icon" className="rounded-full">
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
