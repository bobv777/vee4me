import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Search,
  Globe,
  BarChart2,
  TrendingUp,
  Link2,
  FileSearch,
  Smartphone,
  Share2,
  Zap,
  Target,
  LineChart,
  ArrowUpRight,
  Hash,
  FileText,
  Code,
  ExternalLink,
  CheckCircle,
  Network,
  BarChart,
  Award,
  Sparkles,
  ChevronRight,
  PieChart,
  Layers,
  ArrowRight,
  Shield,
  Timer,
  Lock,
  Cloud,
  Settings,
  XCircle,
  Mail,
  Loader2
} from 'lucide-react';
import { BackgroundParticles } from './BackgroundParticles';
import { SectionHeader } from './ui/SectionHeader';
import CTAButton from './ui/CTAButton';

const performanceMetrics = [
  {
    category: 'Core Web Vitals',
    gradient: 'from-violet-500 to-fuchsia-500',
    metrics: [
      { 
        name: 'LCP', 
        value: '1.2s', 
        target: '2.5s', 
        score: 98, 
        icon: Timer,
        status: 'excellent',
        description: 'Largest Contentful Paint measures loading performance',
        gradient: 'from-emerald-500 to-teal-400'
      },
      { 
        name: 'FID', 
        value: '12ms', 
        target: '100ms', 
        score: 99, 
        icon: Zap,
        status: 'excellent',
        description: 'First Input Delay measures interactivity',
        gradient: 'from-blue-500 to-cyan-400'
      },
      { 
        name: 'CLS', 
        value: '0.05', 
        target: '0.1', 
        score: 97, 
        icon: Smartphone,
        status: 'excellent',
        description: 'Cumulative Layout Shift measures visual stability',
        gradient: 'from-purple-500 to-pink-400'
      }
    ]
  },
  {
    category: 'Technical Metrics',
    gradient: 'from-rose-500 to-orange-500',
    metrics: [
      { 
        name: 'Server Response', 
        value: '180ms', 
        target: '200ms', 
        score: 95, 
        icon: Cloud,
        status: 'excellent',
        description: 'Time to First Byte (TTFB) measures server responsiveness',
        gradient: 'from-amber-500 to-yellow-400'
      },
      { 
        name: 'Cache Hit Ratio', 
        value: '98.5%', 
        target: '95%', 
        score: 96, 
        icon: Network,
        status: 'excellent',
        description: 'Percentage of requests served from cache',
        gradient: 'from-indigo-500 to-violet-400'
      },
      { 
        name: 'Resource Load', 
        value: '0.8s', 
        target: '1s', 
        score: 94, 
        icon: FileSearch,
        status: 'excellent',
        description: 'Time to load all critical resources',
        gradient: 'from-rose-500 to-pink-400'
      }
    ]
  }
];

const mobileOptimizations = [
  {
    title: 'Responsive Design',
    description: 'Fluid layouts that adapt seamlessly to any screen size',
    icon: Layers,
    metrics: {
      'Viewport Coverage': '100%',
      'Breakpoint Support': 'All Devices',
      'Touch Optimization': 'Enhanced'
    },
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Mobile-First Approach',
    description: 'Optimized experience prioritizing mobile users',
    icon: Smartphone,
    metrics: {
      'Mobile Score': '98/100',
      'Load Time': '< 2s',
      'Interaction Rate': '+45%'
    },
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Progressive Enhancement',
    description: 'Advanced features that scale with device capabilities',
    icon: TrendingUp,
    metrics: {
      'Feature Support': '100%',
      'Fallback Coverage': 'Complete',
      'Performance Impact': 'Minimal'
    },
    gradient: 'from-amber-500 to-red-500'
  }
];

const optimizationFeatures = [
  {
    title: 'Performance Optimization',
    description: 'Maximize speed and efficiency through advanced optimization techniques',
    icon: Zap,
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      'Asset Compression & Minification',
      'Lazy Loading Implementation',
      'Critical CSS Extraction',
      'Resource Prioritization'
    ],
    benefits: [
      'Improved User Experience',
      'Higher Conversion Rates',
      'Better Search Rankings',
      'Reduced Bounce Rates'
    ]
  },
  {
    title: 'Mobile Experience',
    description: 'Deliver exceptional mobile-first experiences across all devices',
    icon: Smartphone,
    gradient: 'from-purple-500 to-pink-500',
    features: [
      'Responsive Design Architecture',
      'Touch-Optimized Interface',
      'Mobile Performance Metrics',
      'Progressive Enhancement'
    ],
    benefits: [
      'Mobile-First Indexing',
      'Enhanced User Engagement',
      'Wider Audience Reach',
      'Improved Accessibility'
    ]
  },
  {
    title: 'Infrastructure',
    description: 'Build on a robust, scalable, and reliable technical foundation',
    icon: Cloud,
    gradient: 'from-emerald-500 to-teal-500',
    features: [
      'Global CDN Distribution',
      'Edge Computing Integration',
      'Load Balancing',
      'Auto-scaling Architecture'
    ],
    benefits: [
      'Global Reach',
      'High Availability',
      'Scalable Performance',
      'Cost Efficiency'
    ]
  },
  {
    title: 'Security & Compliance',
    description: 'Protect your data and maintain regulatory compliance',
    icon: Shield,
    gradient: 'from-rose-500 to-orange-500',
    features: [
      'SSL/TLS Implementation',
      'DDoS Protection',
      'Regular Security Audits',
      'GDPR Compliance'
    ],
    benefits: [
      'Data Protection',
      'Trust Building',
      'Risk Mitigation',
      'Regulatory Compliance'
    ]
  }
];

const TechnicalPerformance: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 relative overflow-hidden" id="core-web-vitals" ref={ref}>
      <BackgroundParticles />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Technical Excellence"
          description="Delivering exceptional performance through cutting-edge optimization and industry-leading technical standards"
        />

        {/* Performance Metrics */}
        <div className="mb-20">
          {performanceMetrics.map((category, categoryIndex) => (
            <div key={category.category} className="mb-12">
              <motion.h3 
                className="text-2xl font-semibold text-white mb-8 flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: categoryIndex * 0.2 }}
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.gradient} p-0.5`}>
                  <div className="w-full h-full rounded-lg bg-black/50 flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>
                {category.category}
              </motion.h3>

              <div className="grid md:grid-cols-3 gap-6">
                {category.metrics.map((metric, index) => (
                  <motion.div
                    key={metric.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: (categoryIndex * 3 + index) * 0.1 }}
                    className="relative group"
                  >
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${metric.gradient} p-0.5`}>
                          <div className="w-full h-full rounded-lg bg-black/50 flex items-center justify-center">
                            <metric.icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium
                          ${metric.status === 'excellent' 
                            ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/30' 
                            : 'bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-300 border border-yellow-500/30'}
                          shadow-lg backdrop-blur-sm`}
                        >
                          {metric.status}
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
                          {metric.value}
                          <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">{metric.name}</span>
                          <span className="text-sm text-gray-400">Target: {metric.target}</span>
                        </div>
                      </div>

                      <div className="relative h-2.5 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
                        <motion.div
                          className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${metric.gradient}`}
                          initial={{ width: '0%' }}
                          animate={inView ? { width: `${metric.score}%` } : {}}
                          transition={{ duration: 1, delay: (categoryIndex * 3 + index) * 0.1 }}
                          style={{
                            boxShadow: `0 0 20px rgba(var(--${metric.gradient}-glow), 0.5)`
                          }}
                        />
                      </div>

                      <div className="mt-2 text-right">
                        <span className={`text-sm font-medium bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent`}>
                          Score: {metric.score}/100
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Optimization Section */}
        <div className="mb-20">
          <motion.h3 
            className="text-2xl font-semibold text-white mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
              <div className="w-full h-full rounded-lg bg-black/50 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
            </div>
            Mobile Optimization
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {mobileOptimizations.map((opt, index) => (
              <motion.div
                key={opt.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="relative group"
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${opt.gradient} p-0.5 mb-6`}>
                    <div className="w-full h-full rounded-lg bg-black/50 flex items-center justify-center">
                      <opt.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-white mb-2">{opt.title}</h4>
                  <p className="text-gray-400 mb-6">{opt.description}</p>

                  <div className="space-y-3">
                    {Object.entries(opt.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">{key}</span>
                        <span className="text-sm font-medium text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Website Optimization Features */}
        <div className="mb-20">
          <motion.h3 
            className="text-2xl font-semibold text-white mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 p-0.5">
              <div className="w-full h-full rounded-lg bg-black/50 flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
            </div>
            Website Optimization Features
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {optimizationFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="relative group"
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-0.5 mb-6`}>
                    <div className="w-full h-full rounded-lg bg-black/50 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-400 mb-6">{feature.description}</p>

                  <div className="space-y-6">
                    <div>
                      <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                        <Settings className="w-4 h-4 text-purple-400" />
                        Features
                      </h5>
                      <ul className="space-y-2">
                        {feature.features.map((item) => (
                          <li key={item} className="flex items-center text-sm text-gray-300">
                            <ChevronRight className="w-4 h-4 text-purple-400 mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-purple-400" />
                        Benefits
                      </h5>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalPerformance;