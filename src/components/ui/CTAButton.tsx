import React from 'react';
import { motion } from 'framer-motion';

interface CTAButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart' | 'style'> {
  className?: string;
  children: React.ReactNode;
}

const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ children, className, ...props }, ref) => (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`rounded-lg py-2 px-4 font-semibold bg-purple-600 hover:bg-purple-700 transition-colors ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </motion.button>
  )
);

export default CTAButton;
