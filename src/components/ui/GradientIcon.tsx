import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface GradientIconProps {
  icon: LucideIcon;
  gradient: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const GradientIcon: React.FC<GradientIconProps> = ({
  icon: Icon,
  gradient,
  size = 'md',
  className = ''
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className={`${sizes[size]} rounded-lg bg-gradient-to-r ${gradient} p-0.5 ${className}`}>
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center justify-center">
        <Icon className={`${iconSizes[size]} text-white`} />
      </div>
    </div>
  );
};