'use client';

import React, { type ElementType, type HTMLAttributes, type ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

// Define more specific types for observer options based on IntersectionObserverInit
type ObserverOptions = Omit<IntersectionObserverInit, 'root'> & {
  triggerOnce?: boolean;
};

interface AnimatedSectionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  id?: string;
  children: ReactNode;
  observerOptions?: ObserverOptions; // Allow passing observer options
}

export function AnimatedSection({
  as: Component = 'section',
  id,
  children,
  className,
  // Provide default observer options, setting triggerOnce to false
  observerOptions = { threshold: 0.1, triggerOnce: false },
  ...props
}: AnimatedSectionProps) {
  // Destructure triggerOnce for the hook, pass the rest
  const { triggerOnce, ...restObserverOptions } = observerOptions;
  const [ref, isIntersecting] = useIntersectionObserver({
     ...restObserverOptions,
     triggerOnce,
  });

  return (
    <Component
      ref={ref}
      id={id}
      className={cn(
        // Base transition styles for the section itself
        'transition-opacity duration-500 ease-out',
        // Control the section's opacity based on intersection
        isIntersecting ? 'opacity-100' : 'opacity-0',
        // Add 'in-view' class when intersecting. Inner elements with '.animate-scroll'
        // rely on this class on the parent section to trigger their animation.
        isIntersecting ? 'in-view' : '',
        className
      )}
      {...props}
    >
      {/* Render children directly without mapping or cloning */}
      {children}
    </Component>
  );
}
