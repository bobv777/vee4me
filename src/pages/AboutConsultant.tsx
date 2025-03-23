import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { sections } from '../constants/sections';
import { Brain, Award, BookOpen, Users, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import { CTAButton } from '../components/ui/CTAButton';

const AboutConsultant: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onNavigate={scrollToSection} />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
              Dr. Sarah Anderson
            </h1>
            <p className="text-xl text-gray-300">
              AI Strategy Consultant & Digital Transformation Expert
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">Professional Background</h2>
                <p className="text-gray-300">
                  With over 15 years of experience in AI and digital transformation, 
                  Dr. Anderson has helped numerous Fortune 500 companies implement 
                  successful AI strategies and solutions.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <GraduationCap className="w-6 h-6 text-purple-400 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Ph.D. in Artificial Intelligence</h3>
                      <p className="text-gray-300">Stanford University</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <GraduationCap className="w-6 h-6 text-purple-400 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">M.S. in Computer Science</h3>
                      <p className="text-gray-300">MIT</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">Areas of Expertise</h2>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300">
                    <Brain className="w-5 h-5 text-purple-400" />
                    AI Strategy Development
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <Users className="w-5 h-5 text-purple-400" />
                    Digital Transformation
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <Briefcase className="w-5 h-5 text-purple-400" />
                    Enterprise AI Solutions
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">Recognition</h2>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300">
                    <Award className="w-5 h-5 text-purple-400" />
                    AI Innovation Award 2024
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                    Published Author: "AI Transformation Blueprint"
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <CTAButton onClick={() => scrollToSection('contact')}>
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </CTAButton>
          </div>
        </div>
      </main>
      <Footer onNavigate={scrollToSection} />
    </div>
  );
};

export default AboutConsultant;