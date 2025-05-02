'use client';

import { useState, useEffect, useRef } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

export function useIntersectionObserver(
  options: IntersectionObserverOptions = {}
): [React.RefObject<HTMLDivElement>, boolean] {
  const { root = null, rootMargin = '0px', threshold = 0.1, triggerOnce = true } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce && targetRef.current) {
            observer.unobserve(targetRef.current);
          }
        } else if (!triggerOnce) {
           setIsIntersecting(false);
        }
      },
      { root, rootMargin, threshold }
    );

    const currentRef = targetRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [root, rootMargin, threshold, triggerOnce]); // Only re-run if options change

  return [targetRef, isIntersecting];
}
