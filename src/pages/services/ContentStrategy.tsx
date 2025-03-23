import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import ContentStrategy from '../../components/ContentStrategy';
import { sections } from '../../constants/sections';

const ContentStrategyPage: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onNavigate={scrollToSection} />
      <main className="pt-20">
        <ContentStrategy />
      </main>
      <Footer onNavigate={scrollToSection} />
    </div>
  );
};

export default ContentStrategyPage;