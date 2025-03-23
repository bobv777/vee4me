import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { 
  Menu,
  X,
  Phone,
  Linkedin,
  ChevronDown,
  Brain,
  FileText,
  Users,
  MessageSquare,
  ExternalLink,
  PenTool,
  Gauge,
  Cpu,
  Settings,
  BookOpen,
  Mail,
  Bot,
  Eye,
  Clock,
  Target,
  Award,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Loader2
} from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: 'AI Consulting',
    description: 'Expert guidance for implementing AI solutions that drive business growth.',
    features: [
      { icon: Brain, text: 'AI Strategy Development' },
      { icon: Target, text: 'Implementation Planning' },
      { icon: Users, text: 'Team Training' },
      { icon: Award, text: 'Best Practices' }
    ],
    benefits: [
      'Customized AI roadmap',
      'Risk mitigation strategies',
      'Competitive advantage',
      'ROI optimization'
    ],
    caseStudy: {
      client: 'Enterprise Tech Company',
      result: '200% increase in efficiency',
      timeframe: '6 months'
    },
    gradient: 'gradient-consulting',
    hoverEffect: 'hover-effect-consulting',
    stats: { projects: '50+', satisfaction: '98%', roi: '3x' },
    href: '/services/ai-consulting'
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    description: 'Data-driven content optimization for maximum impact and engagement.',
    features: [
      { icon: PenTool, text: 'Content Creation' },
      { icon: Target, text: 'Audience Analysis' },
      { icon: Eye, text: 'Performance Tracking' },
      { icon: Award, text: 'SEO Optimization' }
    ],
    benefits: [
      'Higher engagement rates',
      'Improved conversion',
      'Better SEO rankings',
      'Content automation'
    ],
    caseStudy: {
      client: 'Digital Marketing Agency',
      result: '150% increase in traffic',
      timeframe: '3 months'
    },
    gradient: 'gradient-content',
    hoverEffect: 'hover-effect-content',
    stats: { content: '1000+', engagement: '+150%', traffic: '3x' },
    href: '/services/content-strategy'
  },
  {
    icon: Gauge,
    title: 'Technical Performance',
    description: 'Optimize your technical infrastructure for peak performance.',
    features: [
      { icon: Bot, text: 'Performance Analysis' },
      { icon: Target, text: 'Speed Optimization' },
      { icon: Eye, text: 'Security Audits' },
      { icon: Award, text: 'Best Practices' }
    ],
    benefits: [
      'Faster load times',
      'Better user experience',
      'Improved security',
      'Higher conversion rates'
    ],
    caseStudy: {
      client: 'E-commerce Platform',
      result: '40% faster load times',
      timeframe: '2 months'
    },
    gradient: 'gradient-technical',
    hoverEffect: 'hover-effect-technical',
    stats: { speed: '+40%', uptime: '99.9%', security: '100%' },
    href: '/services/performance'
  },
  {
    icon: Settings,
    title: 'Technical SEO',
    description: 'Comprehensive technical SEO solutions for better visibility.',
    features: [
      { icon: Bot, text: 'Site Architecture' },
      { icon: Target, text: 'Performance Optimization' },
      { icon: Eye, text: 'Mobile Optimization' },
      { icon: Award, text: 'Schema Markup' }
    ],
    benefits: [
      'Better rankings',
      'Increased visibility',
      'Mobile optimization',
      'Technical excellence'
    ],
    caseStudy: {
      client: 'SaaS Company',
      result: '80% more organic traffic',
      timeframe: '4 months'
    },
    gradient: 'gradient-seo',
    hoverEffect: 'hover-effect-seo',
    stats: { traffic: '+80%', rankings: 'Top 3', visibility: '2x' },
    href: '/services/technical-seo'
  }
];

export const Services: React.FC = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [loadingService, setLoadingService] = useState<string | null>(null);

  const handleLearnMore = async (href: string) => {
    setLoadingService(href);
    try {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate loading
      navigate(href);
    } finally {
      setLoadingService(null);
    }
  };

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/20 to-black" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leverage our expertise in AI to transform your business operations, enhance efficiency, and drive innovation
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ scale: 1.02, translateY: -5 }}
              className={`service-card group ${service.hoverEffect}`}
            >
              <div className="relative p-6 h-full flex flex-col">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} p-0.5 mb-6`}>
                  <div className="w-full h-full rounded-lg bg-black/50 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white section-icon" />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>

                <div className="flex-grow">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature.text}
                        custom={i}
                        variants={featureVariants}
                        className="flex items-center gap-3 text-sm text-gray-300"
                      >
                        <feature.icon className="w-4 h-4 text-gray-400" />
                        {feature.text}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-purple-400" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <motion.li
                          key={benefit}
                          custom={i}
                          variants={featureVariants}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <CheckCircle className="w-4 h-4 text-purple-400" />
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-400" />
                      Success Story
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-300">{service.caseStudy.client}</p>
                      <p className="text-purple-400 font-semibold">{service.caseStudy.result}</p>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock className="w-4 h-4" />
                        {service.caseStudy.timeframe}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 mt-4">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(service.stats).map(([key, value]) => (
                      <div key={key} className="group-hover:transform group-hover:scale-105 transition-transform">
                        <div className="text-lg font-semibold text-white">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleLearnMore(service.href)}
                  disabled={loadingService === service.href}
                  className="inline-flex items-center text-white group-hover:text-white/90 transition-colors mt-6 disabled:opacity-50"
                >
                  {loadingService === service.href ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Loading...
                    </>
                  ) : (
                    <>
                      Learn more
                      <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <div className="absolute top-4 right-4">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-purple-400"
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1 + 0.3,
      duration: 0.3,
    },
  }),
};