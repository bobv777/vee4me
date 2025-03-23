import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  icon = <ArrowRight className="w-5 h-5" />,
  className = '',
  ...props
}) => {
  const baseStyles = "px-8 py-4 rounded-xl font-semibold flex items-center gap-3 relative overflow-hidden transition-all duration-300";
  
  const variants = {
    primary: `bg-gradient-to-r from-rose-500 to-purple-600 text-white 
              shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40
              hover:translate-y-[-2px]`,
    secondary: `bg-white/5 text-white border border-white/10 
                hover:bg-white/10 hover:border-purple-500/30
                hover:translate-y-[-2px]`
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        {icon}
      </motion.div>
    </motion.button>
  );
};