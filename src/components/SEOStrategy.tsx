import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import {
  Brain,
  Award,
  BookOpen,
  Users,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Bot,
  Eye,
  Clock,
  ArrowUpRight,
  FileText,
  Lock,
  Cloud,
  Settings,
  Hash,
  Layers,
  Network,
  PieChart,
  Loader2,
  AlertCircle,
  ChevronRight,
  CheckCircle,
  Target
} from 'lucide-react';
import { BackgroundParticles } from './BackgroundParticles';
import { SectionHeader } from './ui/SectionHeader';

const keywordGroups = [
  {
    title: 'Primary Keywords',
    description: 'High-value terms driving core business objectives',
    keywords: [
      { term: 'AI Consulting Services', volume: '12K', difficulty: 'High', priority: 1 },
      { term: 'Enterprise AI Solutions', volume: '8K', difficulty: 'Medium', priority: 1 },
      { term: 'AI Implementation', volume: '15K', difficulty: 'High', priority: 1 },
      { term: 'Business AI Integration', volume: '10K', difficulty: 'Medium', priority: 2 }
    ],
    gradient: 'from-purple-500 to-pink-500',
    importance: 'These keywords directly target decision-makers and drive high-value conversions.'
  },
  {
    title: 'Secondary Keywords',
    description: 'Supporting terms enhancing topical relevance',
    keywords: [
      { term: 'AI Workflow Automation', volume: '5K', difficulty: 'Medium', priority: 2 },
      { term: 'Custom AI Models', volume: '3K', difficulty: 'Low', priority: 3 },
      { term: 'AI Business Strategy', volume: '7K', difficulty: 'Medium', priority: 2 },
      { term: 'AI ROI Calculator', volume: '2K', difficulty: 'Low', priority: 3 }
    ],
    gradient: 'from-blue-500 to-cyan-500',
    importance: 'These keywords support our content strategy and capture users earlier in their journey.'
  }
];

const aiNews = [
  {
    id: 1,
    title: "Breakthrough in Natural Language Processing",
    description: "New model achieves human-level understanding in complex reasoning tasks",
    date: "2 hours ago",
    category: "Research",
    source: "AI Research Weekly",
    impact: "High",
    slug: "nlp-breakthrough-2025",
    fullContent: "https://blog.vee4me.com/ai-research/nlp-breakthrough-2025"
  },
  {
    id: 2,
    title: "AI Revolutionizes Healthcare Diagnostics",
    description: "Machine learning models show 99% accuracy in early disease detection",
    date: "4 hours ago",
    category: "Healthcare",
    source: "MedTech Today",
    impact: "Critical",
    slug: "ai-healthcare-diagnostics",
    fullContent: "https://blog.vee4me.com/ai-healthcare/diagnostics-breakthrough"
  },
  {
    id: 3,
    title: "Advances in Computer Vision",
    description: "New architecture enables real-time 3D object recognition",
    date: "6 hours ago",
    category: "Technology",
    source: "Tech Insights",
    impact: "Medium",
    slug: "computer-vision-advances",
    fullContent: "https://blog.vee4me.com/tech/computer-vision-2025"
  },
  {
    id: 4,
    title: "AI Ethics Framework Released",
    description: "Major tech companies adopt new guidelines for responsible AI development",
    date: "12 hours ago",
    category: "Ethics",
    source: "AI Ethics Board",
    impact: "High",
    slug: "ai-ethics-framework",
    fullContent: "https://blog.vee4me.com/ai-ethics/framework-2025"
  }
];

const SEOStrategy: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('keywords');
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);
  const [loadingArticle, setLoadingArticle] = useState<number | null>(null);

  const handleReadMore = async (newsId: number, slug: string, fullContentUrl: string) => {
    setLoadingArticle(newsId);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // If it's an external link, open in new tab
      if (fullContentUrl.startsWith('http')) {
        window.open(fullContentUrl, '_blank', 'noopener,noreferrer');
      } else {
        // For internal links, use React Router navigation
        navigate(`/news/${slug}`);
      }
    } finally {
      setLoadingArticle(null);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="ai-innovation-news" ref={ref}>
      <BackgroundParticles />

      <div className="container mx-auto px-4 relative z-10">
        {/* Keywords Section */}
        <SectionHeader
          title="Keyword Strategy"
          description="Optimize your digital presence with strategically targeted keywords"
        />

        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {keywordGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${group.gradient} p-0.5 mb-6`}>
                    <div className="w-full h-full rounded-lg bg-black/50 flex items-center justify-center">
                      <Hash className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{group.title}</h3>
                  <p className="text-gray-400 mb-6">{group.description}</p>

                  <div className="space-y-4">
                    {group.keywords.map((keyword) => (
                      <motion.div
                        key={keyword.term}
                        className={`p-3 rounded-lg bg-white/5 border transition-all duration-300 cursor-pointer ${
                          selectedKeyword === keyword.term
                            ? 'border-purple-500/50 bg-white/10'
                            : 'border-white/10 hover:border-purple-500/30'
                        }`}
                        onClick={() => setSelectedKeyword(
                          selectedKeyword === keyword.term ? null : keyword.term
                        )}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-medium">{keyword.term}</span>
                          <div className={`px-2 py-1 rounded text-xs ${
                            keyword.priority === 1 ? 'bg-purple-500/30 text-purple-300' :
                            keyword.priority === 2 ? 'bg-blue-500/30 text-blue-300' :
                            'bg-green-500/30 text-green-300'
                          }`}>
                            P{keyword.priority}
                          </div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Volume: {keyword.volume}</span>
                          <span className="text-gray-400">Difficulty: {keyword.difficulty}</span>
                        </div>
                        {selectedKeyword === keyword.term && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-3 pt-3 border-t border-white/10"
                          >
                            <div className="text-sm text-purple-400">
                              Target Pages:
                              <ul className="mt-2 space-y-1 text-gray-300">
                                <li className="flex items-center gap-2">
                                  <ChevronRight className="w-3 h-3" />
                                  Service Landing Page
                                </li>
                                <li className="flex items-center gap-2">
                                  <ChevronRight className="w-3 h-3" />
                                  Case Studies
                                </li>
                                <li className="flex items-center gap-2">
                                  <ChevronRight className="w-3 h-3" />
                                  Blog Content
                                </li>
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                      <PieChart className="w-4 h-4 text-purple-400" />
                      Strategic Importance
                    </h4>
                    <p className="text-sm text-gray-400">{group.importance}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* News Section */}
        <div className="mb-16">
          <SectionHeader
            title="AI Innovation | Latest News"
            description="Stay informed with the latest breakthroughs in artificial intelligence and their impact on business transformation"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {aiNews.map((news) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative group"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-purple-400">{news.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-purple-400">Impact: {news.impact}</span>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-white mb-2">{news.title}</h4>
                <p className="text-gray-300 mb-4">{news.description}</p>

                <div className="flex items-center justify-between text-sm">
                  <div className="text-gray-400">
                    <span>{news.source}</span>
                    <span className="mx-2">•</span>
                    <span>{news.date}</span>
                  </div>
                  <button
                    onClick={() => handleReadMore(news.id, news.slug, news.fullContent)}
                    disabled={loadingArticle === news.id}
                    className="text-purple-400 flex items-center gap-1 hover:text-purple-300 transition-colors disabled:opacity-50"
                  >
                    {loadingArticle === news.id ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Loading...
                      </>
                    ) : (
                      <>
                        Read more
                        <ArrowUpRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOStrategy;