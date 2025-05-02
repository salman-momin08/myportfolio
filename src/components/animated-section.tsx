'use client';

import React from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  id?: string;
  children: React.ReactNode;
}

export function AnimatedSection({
  as: Component = 'section',
  id,
  children,
  className,
  ...props
}: AnimatedSectionProps) {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });

  // Wrap children to apply animation class individually if needed, or apply to section
  const animatedChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement, {
        className: cn(
          (child.props.className || ''),
          'animate-scroll',
          // Apply stagger delay based on index if desired
          // `transition-delay-${index * 100}ms`
        ),
      });
    }
    return child;
  });

  return (
    <Component
      ref={ref}
      id={id}
      className={cn(
        'transition-opacity duration-500 ease-out',
         isIntersecting ? 'in-view opacity-100' : 'opacity-0', // Control overall section visibility
        className
      )}
      {...props}
    >
      {animatedChildren}
    </Component>
  );
}
