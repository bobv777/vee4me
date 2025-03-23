import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  Linkedin,
  MapPin,
  Brain,
  ArrowRight,
  FileText,
  Shield,
  Lock
} from 'lucide-react';
import { NewsletterForm } from './ui/NewsletterForm';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

const footerLinks = {
  services: [
    { name: 'AI Consulting', href: '/services/ai-consulting' },
    { name: 'Technical SEO', href: '/services/technical-seo' },
    { name: 'Content Strategy', href: '/services/content-strategy' },
    { name: 'Performance Optimization', href: '/services/performance' }
  ],
  company: [
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '#contact' }
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Knowledge Base', href: '/knowledge-base' },
    { name: 'FAQs', href: '/faqs' }
  ],
  legal: [
    { name: 'Terms of Service', href: '/terms-of-service', icon: FileText },
    { name: 'Privacy Policy', href: '/privacy-policy', icon: Shield },
    { name: 'Cookie Policy', href: '/cookie-policy', icon: Lock }
  ]
};

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleInternalNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      onNavigate(href.slice(1));
    }
  };

  return (
    <footer className="relative bg-black/50 border-t border-white/10 pt-20 pb-10">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/5 to-black/20" />
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
            style={{
              top: `${30 + i * 20}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scaleX: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <motion.a
              href="#"
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('hero');
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
                <div className="w-full h-full rounded-lg bg-black/50 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold text-white">Vee4Me</span>
            </motion.a>
            
            <p className="text-gray-400">
              Transforming businesses through cutting-edge AI solutions and technical excellence.
            </p>

            <div className="space-y-3">
              <a
                href="tel:951-858-3110"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-purple-400" />
                <span>951-858-3110</span>
              </a>
              <a
                href="mailto:info@vee4me.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-purple-400" />
                <span>info@vee4me.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).slice(0, 3).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-6 capitalize">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                      onClick={(e) => handleInternalNavigation(e, link.href)}
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter & Social */}
        <div className="grid md:grid-cols-2 gap-12 py-8 border-t border-white/10">
          {/* Newsletter */}
          <NewsletterForm />

          {/* Social Links */}
          <div className="flex items-center justify-end space-x-4">
            <motion.a
              href="https://www.linkedin.com/in/bob-vergura-8a42a7b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-purple-500/30 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Vee4Me. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="hover:text-white transition-colors flex items-center space-x-1"
              >
                <link.icon className="w-4 h-4" />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;