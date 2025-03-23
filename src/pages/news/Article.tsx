import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, Clock, ExternalLink } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { sections } from '../../constants/sections';

const Article: React.FC = () => {
  const { slug } = useParams();
  
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
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/news"
              className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Link>

            <article className="prose prose-invert max-w-none">
              <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
                  {slug}
                </h1>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>March 17, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>AI Research Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    <span>Research</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>5 min read</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 text-gray-300">
                <p>
                  Content will be dynamically loaded based on the article slug.
                  This is a placeholder for the article content.
                </p>
              </div>

              <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Continue Reading
                </h2>
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-purple-400" />
                  <a
                    href="https://blog.vee4me.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Visit our blog for more AI insights
                  </a>
                </div>
              </div>
            </article>
          </motion.div>
        </div>
      </main>
      <Footer onNavigate={scrollToSection} />
    </div>
  );
};

export default Article;