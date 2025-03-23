import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Brain, 
  Database, 
  Cpu, 
  Network, 
  LineChart, 
  Workflow,
  Sparkles,
  RefreshCw,
  FileText,
  Image,
  Video as VideoIcon,
  FileJson,
  ArrowRight,
  Zap,
  Bot,
  ChevronRight,
  AlertCircle,
  Lightbulb
} from 'lucide-react';
import { BackgroundParticles } from './BackgroundParticles';
import { SectionHeader } from './ui/SectionHeader';

const aiProcessStages = [
  {
    id: 'input',
    title: 'Data Input',
    icon: Database,
    description: 'Ingestion of various data types including text, images, video, and metadata',
    types: [
      { icon: FileText, label: 'Text' },
      { icon: Image, label: 'Images' },
      { icon: VideoIcon, label: 'Video' },
      { icon: FileJson, label: 'Metadata' }
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'processing',
    title: 'AI Processing',
    icon: Brain,
    description: 'Advanced neural networks process and analyze data using state-of-the-art algorithms',
    features: [
      'Natural Language Processing',
      'Computer Vision',
      'Pattern Recognition',
      'Semantic Analysis'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'optimization',
    title: 'Optimization',
    icon: Cpu,
    description: 'Continuous model refinement and performance optimization',
    metrics: [
      { label: 'Accuracy', value: '99.8%' },
      { label: 'Speed', value: '50ms' },
      { label: 'Efficiency', value: '95%' }
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'output',
    title: 'Intelligent Output',
    icon: Sparkles,
    description: 'Delivery of actionable insights and automated solutions',
    results: [
      'Predictive Analytics',
      'Automated Decisions',
      'Real-time Insights',
      'Strategic Recommendations'
    ],
    color: 'from-green-500 to-emerald-500'
  }
];

const AIExpertise: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % aiProcessStages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden" id="ai-innovation-feed" ref={ref}>
      <BackgroundParticles />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="AI Process Excellence"
          description="Experience our advanced AI workflow, combining cutting-edge technology with practical business applications"
        />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative p-8 rounded-xl bg-white/5 border border-white/10">
            <h3 className="flex items-center gap-3 text-2xl font-bold mb-8">
              <Workflow className="w-7 h-7 text-sky-400" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                AI Workflow Visualization
              </span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {aiProcessStages.map((stage, index) => (
                <motion.div
                  key={stage.id}
                  className={`relative p-6 rounded-xl transition-all duration-300
                    ${index === activeStage ? 'bg-white/10 border-purple-500/30' : 'bg-white/5 border-white/10'}
                    border hover:border-purple-500/30`}
                  animate={{
                    scale: index === activeStage ? 1.02 : 1,
                    opacity: index === activeStage ? 1 : 0.7,
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stage.color} p-0.5`}>
                      <div className="w-full h-full rounded-lg bg-black/50 flex items-center justify-center">
                        <stage.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">{stage.title}</h4>
                      <p className="text-sm text-gray-400">{stage.description}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    {stage.types && (
                      <div className="grid grid-cols-4 gap-4">
                        {stage.types.map((type) => (
                          <div key={type.label} className="text-center">
                            <type.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                            <span className="text-sm text-gray-300">{type.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {stage.features && (
                      <ul className="space-y-2">
                        {stage.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-gray-300">
                            <Zap className="w-4 h-4 text-purple-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                    {stage.metrics && (
                      <div className="grid grid-cols-3 gap-4">
                        {stage.metrics.map((metric) => (
                          <div key={metric.label} className="text-center">
                            <div className="text-xl font-bold text-white mb-1">{metric.value}</div>
                            <div className="text-sm text-gray-400">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    {stage.results && (
                      <ul className="space-y-2">
                        {stage.results.map((result) => (
                          <li key={result} className="flex items-center text-sm text-gray-300">
                            <ChevronRight className="w-4 h-4 text-purple-400 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {index !== aiProcessStages.length - 1 && index % 2 === 0 && (
                    <motion.div
                      className="absolute h-0.5 w-8 bg-gradient-to-r from-purple-500 to-transparent
                        right-0 top-1/2 translate-x-full"
                      animate={{
                        opacity: index === activeStage ? 1 : 0.3,
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIExpertise;