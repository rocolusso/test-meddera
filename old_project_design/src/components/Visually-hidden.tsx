import React from 'react';
import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
/*eslint-disable*/
export interface VisuallyHiddenProps extends
    HTMLAttributes<HTMLSpanElement> {}

const VisuallyHidden = forwardRef<HTMLSpanElement, VisuallyHiddenProps>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      'absolute h-px w-px overflow-hidden whitespace-nowrap border-0 p-0',
      'clip-[rect(0,0,0,0)]',
      className,
    )}
    {...props}
  />
));
VisuallyHidden.displayName = 'VisuallyHidden';

export { VisuallyHidden };
