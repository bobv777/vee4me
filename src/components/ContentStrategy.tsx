import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, FileText, Video, BookOpen, PenTool, Brain, Target, Users, BarChart as ChartBar, FileCheck, Bot, Eye, Clock, ArrowRight, CheckCircle, Sparkles, BarChart, Award } from 'lucide-react';
import { BackgroundParticles } from './BackgroundParticles';
import { SectionHeader } from './ui/SectionHeader';

const contentTypes = [
  {
    icon: FileText,
    title: 'Whitepapers',
    description: 'In-depth analysis and research-backed insights',
    benefits: ['Thought Leadership', 'Lead Generation', 'Industry Authority'],
    gradient: 'from-emerald-500/20 to-teal-500/20',
    borderGradient: 'from-emerald-500/30 to-teal-500/30',
    iconGradient: 'from-emerald-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: Video,
    title: 'Video Content',
    description: 'Engaging visual storytelling and demonstrations',
    benefits: ['Higher Engagement', 'Brand Personality', 'Complex Explanations'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
    borderGradient: 'from-blue-500/30 to-cyan-500/30',
    iconGradient: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: BookOpen,
    title: 'Case Studies',
    description: 'Real-world success stories and implementations',
    benefits: ['Social Proof', 'Conversion Tool', 'Trust Building'],
    gradient: 'from-purple-500/20 to-pink-500/20',
    borderGradient: 'from-purple-500/30 to-pink-500/30',
    iconGradient: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: PenTool,
    title: 'Blog Articles',
    description: 'Regular insights and industry updates',
    benefits: ['SEO Value', 'Regular Engagement', 'Knowledge Sharing'],
    gradient: 'from-rose-500/20 to-orange-500/20',
    borderGradient: 'from-rose-500/30 to-orange-500/30',
    iconGradient: 'from-rose-500 to-orange-500',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800'
  }
];

const ContentStrategy: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 relative overflow-hidden" id="content-strategy" ref={ref}>
      <BackgroundParticles />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Strategic Content Creation"
          description="Elevate your brand with our comprehensive content strategy, combining AI innovation with human expertise to deliver exceptional value"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contentTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="relative group transform-gpu"
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden rounded-xl h-[420px] bg-black/40 backdrop-blur-sm">
                {/* Subtle border gradient */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br border border-white/10" />
                
                {/* Background image with overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={type.image} 
                    alt={type.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-300 will-change-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} mix-blend-overlay opacity-60 transition-opacity duration-300 group-hover:opacity-75`} />
                </div>
                
                <div className="relative h-full p-6 flex flex-col">
                  {/* Icon with gradient background */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${type.iconGradient} p-0.5`}>
                    <div className="w-full h-full rounded-lg bg-black/50 flex items-center justify-center">
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mt-4 mb-3">{type.title}</h3>
                  <p className="text-lg text-gray-100 mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                    <ul className="space-y-3">
                      {type.benefits.map((benefit, i) => (
                        <motion.li
                          key={benefit}
                          className="flex items-center text-base text-white/90"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <CheckCircle className={`w-5 h-5 mr-2 bg-gradient-to-r ${type.iconGradient} bg-clip-text text-transparent`} />
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`absolute inset-0 bg-gradient-to-br ${type.borderGradient} opacity-20`} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentStrategy;