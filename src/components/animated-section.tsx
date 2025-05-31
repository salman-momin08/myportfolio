
'use client';

import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import React, { forwardRef } from 'react'; // Import forwardRef
import { cn } from '@/lib/utils';

// Define more specific types for observer options based on IntersectionObserverInit
// No longer needed here as observer is in parent
// type ObserverOptions = Omit<IntersectionObserverInit, 'root'> & {
//   triggerOnce?: boolean;
// };

interface AnimatedSectionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  id?: string;
  children: ReactNode;
  isIntersecting: boolean; // Added prop to control visibility from parent
  // observerOptions?: ObserverOptions; // Removed, parent controls observation
}

export const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  ({ as: Component = 'section', id, children, className, isIntersecting, ...props }, ref) => {
    // Removed internal useIntersectionObserver call
    // const { triggerOnce, ...restObserverOptions } = observerOptions;
    // const [ref, isIntersecting] = useIntersectionObserver({
    //    ...restObserverOptions,
    //    triggerOnce,
    // });

    return (
      <Component
        ref={ref} // Use the forwarded ref
        id={id}
        className={cn(
          'transition-opacity duration-500 ease-out',
          isIntersecting ? 'opacity-100' : 'opacity-0',
          isIntersecting ? 'in-view' : '',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

AnimatedSection.displayName = 'AnimatedSection'; // Set display name for DevTools
