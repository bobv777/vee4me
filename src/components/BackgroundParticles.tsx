import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundParticles: React.FC = () => {
  // Create three layers of particles for depth
  const particleLayers = [
    { count: 50, scale: [1, 1.5, 1], opacity: [0.2, 0.6, 0.2], duration: 4 }, // Background layer
    { count: 30, scale: [1.2, 1.8, 1.2], opacity: [0.3, 0.8, 0.3], duration: 5 }, // Middle layer
    { count: 20, scale: [1.4, 2, 1.4], opacity: [0.4, 1, 0.4], duration: 6 }  // Foreground layer
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-indigo-900/20 to-black opacity-70" />
      
      {/* Glowing orbs */}
      {particleLayers.map((layer, layerIndex) => (
        <React.Fragment key={layerIndex}>
          {Array.from({ length: layer.count }).map((_, i) => (
            <motion.div
              key={`${layerIndex}-${i}`}
              className={`absolute rounded-full bg-gradient-to-r 
                ${i % 3 === 0 ? 'from-purple-500 to-pink-500' : 
                  i % 3 === 1 ? 'from-blue-500 to-cyan-500' : 
                  'from-indigo-500 to-violet-500'}
                blur-sm`}
              style={{
                width: (i % 3 + 1) * 4 + 'px',
                height: (i % 3 + 1) * 4 + 'px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: `blur(${(i % 3 + 1) * 2}px)`,
              }}
              animate={{
                scale: layer.scale,
                opacity: layer.opacity,
                y: [0, -30 - (layerIndex * 10), 0],
              }}
              transition={{
                duration: layer.duration + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </React.Fragment>
      ))}

      {/* Enhanced grid lines */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`grid-${i}`}
          className="absolute h-px grid-line"
          style={{
            top: `${Math.random() * 100}%`,
            left: 0,
            right: 0,
          }}
          animate={{
            opacity: [0, 0.3, 0],
            scaleX: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Bright accent particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`accent-${i}`}
          className="absolute w-1 h-1 rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8)',
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 1, 0.5],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};