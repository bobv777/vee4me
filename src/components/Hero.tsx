import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { Vector2 } from 'three';
import { Sparkles, ArrowRight, Rocket, Calendar } from 'lucide-react';
import { NeuralNetwork } from './three/NeuralNetwork';
import { HolographicInterface } from './three/HolographicInterface';
import { AIAvatar } from './three/AIAvatar';
import { BookDemoModal } from './ui/BookDemoModal';
import { ContactModal } from './ui/ContactModal';
import { sections } from '../constants/sections';
interface HeroProps {
  onGetStarted: () => void;
  onBookDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted, onBookDemo }) => {
  const [isDemoModalOpen, setIsDemoModalOpen] = React.useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  const handleGetStarted = () => {
    const servicesSection = document.getElementById(sections.services);
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookDemo = () => {
    setIsDemoModalOpen(true);
    onBookDemo();
  };

  return (
    <>
      <section className="min-h-screen relative overflow-hidden">
        {/* Neural Network Canvas */}
        <div className="absolute inset-0">
          <Canvas dpr={[1, 2]}>
            <PerspectiveCamera makeDefault position={[0, 0, 15]} />
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            
            <color attach="background" args={['#000']} />
            <fog attach="fog" args={['#000', 5, 30]} />
            
            <Suspense fallback={null}>
              <NeuralNetwork />
              <HolographicInterface />
              <AIAvatar />
              
              <EffectComposer>
                <Bloom 
                  intensity={1.2}
                  luminanceThreshold={0.7}
                  luminanceSmoothing={0.9}
                />
               <ChromaticAberration offset={{ x: 0.002, y: 0.002 }} />
              </EffectComposer>
            </Suspense>
          </Canvas>
        </div>

        {/* Subtle gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />

        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
          <div className="max-w-4xl">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.h1 
                className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="block text-white bg-gradient-to-r from-blue-500 to-purple-500 backdrop-blur-md rounded-lg px-6 py-3 inline-block shadow-[0_0_40px_rgba(0,0,0,0.9)] text-3xl font-extrabold tracking-widest [text-shadow:_0_4px_10px_rgba(255,255,255,0.9)] animate-pulse">
                  Tomorrow's AI
                </div>
                <span className="block text-[#003BC5] [text-shadow:_0_4px_20px_rgba(0,59,197,0.5),_0_4px_40px_rgba(0,59,197,0.3)]">
                  Advantage
                </span>
              </motion.h1>

              <motion.p 
                className="text-lg sm:text-xl text-indigo-100 max-w-xl [text-shadow:_0_2px_10px_rgba(0,0,0,0.8)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Transform your business with cutting-edge AI solutions that deliver 
                unprecedented insights and automation.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <motion.button 
                  className="enhanced-cta-button w-full sm:w-auto group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGetStarted}
                >
                  <span className="relative z-10">Get Started</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    <Rocket className="w-5 h-5" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>

                <motion.button 
                  className="enhanced-secondary-button w-full sm:w-auto group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBookDemo}
                >
                  <span className="relative z-10">Book Demo</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Calendar className="w-5 h-5" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <BookDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};