import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { sections } from '../../constants/sections';
import { Settings, CheckCircle, ArrowRight } from 'lucide-react';
import CTAButton from '../../components/ui/CTAButton';

const Service6Page: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onNavigate={scrollToSection} />
      <main className="pt-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
              Service 6
            </h1>
            <p className="text-xl text-gray-300">
              Description of Service 6
            </p>
          </motion.div>

          <div className="text-center mb-12">
            <CTAButton onClick={() => scrollToSection('contact')}>
              Get Started
              <ArrowRight className="w-5 h-5" />
            </CTAButton>
          </div>
        </div>
      </main>
      <Footer onNavigate={scrollToSection} />
    </div>
  );
};

export default Service6Page;