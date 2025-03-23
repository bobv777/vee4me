import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  onClick
}) => {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={hover ? { y: -5 } : {}}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
        {children}
      </div>
    </motion.div>
  );
};