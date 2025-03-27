import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { sections } from '../constants/sections';
import { FileText, Building, Award, ArrowRight, CheckCircle } from 'lucide-react';
import CTAButton from '../components/ui/CTAButton';

const caseStudies = [
  {
    title: 'Global E-commerce Platform Transformation',
    client: 'Leading Online Retailer',
    industry: 'E-commerce',
    challenge: 'Needed to improve customer engagement and automate marketing processes',
    solution: 'Implemented AI-driven personalization and marketing automation',
    results: [
      '250% increase in customer engagement',
      '45% reduction in marketing costs',
      '3x improvement in conversion rates'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000'
  },
  {
    title: 'Healthcare Analytics Enhancement',
    client: 'Regional Medical Center',
    industry: 'Healthcare',
    challenge: 'Required better patient data analysis and prediction capabilities',
    solution: 'Deployed custom AI analytics solution with predictive modeling',
    results: [
      '98% accuracy in patient outcome predictions',
      '35% reduction in administrative time',
      'Improved resource allocation by 40%'
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000'
  }
];

const CaseStudies: React.FC = () => {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300">
              Explore how we've helped businesses transform with AI-powered solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <Building className="w-5 h-5 text-purple-400" />
                      <span className="text-sm text-purple-400">{study.industry}</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-2">{study.title}</h2>
                    <p className="text-gray-300 mb-4">{study.client}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Challenge</h3>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Solution</h3>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton onClick={() => scrollToSection('contact')}>
              Start Your Success Story
              <ArrowRight className="w-5 h-5" />
            </CTAButton>
          </div>
        </div>
      </main>
      <Footer onNavigate={scrollToSection} />
    </div>
  );
};

export default CaseStudies;