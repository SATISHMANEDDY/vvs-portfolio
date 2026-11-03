import { useRef } from 'react';
import { useInView } from 'framer-motion';

export function useReveal(once = true, margin = '-80px') {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: margin as `${number}px` });
  return { ref, isInView };
}
