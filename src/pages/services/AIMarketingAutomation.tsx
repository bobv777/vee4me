import React from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  Share2, 
  Image as ImageIcon, 
  Layout,
  ArrowRight,
  CheckCircle,
  BarChart,
  Users,
  MessageSquare,
  Globe,
  Award
} from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { CTAButton } from '../../components/ui/CTAButton';

const benefits = [
  {
    title: 'Increased ROI',
    description: 'Achieve up to 300% increase in marketing ROI through AI-driven optimization',
    icon: BarChart
  },
  {
    title: 'Time Savings',
    description: 'Reduce campaign setup and management time by 75% with automation',
    icon: Share2
  },
  {
    title: 'Better Engagement',
    description: 'Improve customer engagement rates with personalized content',
    icon: Users
  },
  {
    title: 'Global Reach',
    description: 'Expand your market presence with AI-powered localization',
    icon: Globe
  }
];

const caseStudies = [
  {
    client: 'Global E-commerce Brand',
    challenge: 'Struggling with manual content creation and campaign management',
    solution: 'Implemented AI-powered content generation and automated campaign optimization',
    results: [
      '250% increase in social engagement',
      '45% reduction in marketing costs',
      '3x improvement in campaign performance'
    ]
  },
  {
    client: 'Tech Startup',
    challenge: 'Limited marketing resources and inconsistent brand messaging',
    solution: 'Deployed AI marketing automation suite with brand voice training',
    results: [
      '180% increase in content output',
      '60% higher engagement rates',
      'Consistent brand messaging across channels'
    ]
  }
];

const AIMarketingAutomation: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onNavigate={scrollToSection} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
                AI-Powered Marketing Automation
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform your marketing with intelligent automation and data-driven insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton onClick={() => scrollToSection('contact')}>
                  Get Started Today
                </CTAButton>
                <CTAButton 
                  variant="secondary"
                  onClick={() => scrollToSection('case-studies')}
                >
                  View Case Studies
                </CTAButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
            <p className="text-gray-300">Experience the power of AI-driven marketing automation</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors h-full">
                  <benefit.icon className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-300">Real results from real clients</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-8 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                  <Award className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">{study.client}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Challenge</h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Solution</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Results</h4>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Marketing?</h2>
              <p className="text-gray-300 mb-8">
                Get started with AI-powered marketing automation today and experience the difference.
              </p>
              <CTAButton onClick={() => scrollToSection('contact')}>
                Schedule a Demo
              </CTAButton>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer onNavigate={scrollToSection} />
    </div>
  );
};

export default AIMarketingAutomation;