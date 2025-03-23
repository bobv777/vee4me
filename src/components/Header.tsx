import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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
  Mail
} from 'lucide-react';
import { sections } from '../constants/sections';
import { BookDemoModal } from './ui/BookDemoModal';
import { ContactModal } from './ui/ContactModal';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

const navigation = [
  {
    name: 'Services',
    sectionId: sections.services,
    items: [
      { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', icon: Brain },
      { name: 'Content Strategy', href: '/services/content-strategy', icon: PenTool },
      { name: 'Technical Performance', href: '/services/performance', icon: Gauge },
      { name: 'AI Consulting', href: '/services/ai-consulting', icon: MessageSquare },
      { name: 'Custom AI Solutions', href: '/services/custom-ai-solutions', icon: Cpu },
      { name: 'Website Optimization', href: '/services/website-optimization', icon: Settings }
    ]
  },
  { name: 'Case Studies', sectionId: sections.caseStudies, icon: BookOpen },
  { name: 'News', sectionId: sections.aiInnovation },
  { name: 'Contact', action: 'contact', icon: Mail }
];

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = async (item: { sectionId?: string, action?: string, href?: string }) => {
    if (item.action === 'contact') {
      setIsContactModalOpen(true);
    } else if (item.sectionId) {
      if (location.pathname !== '/') {
        await navigate('/');
        // Wait for navigation to complete
        setTimeout(() => {
          onNavigate(item.sectionId!);
        }, 100);
      } else {
        onNavigate(item.sectionId);
      }
    }
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleLogoClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    // If we're not on the homepage, navigate there first
    if (location.pathname !== '/') {
      await navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      // If we're already on the homepage, just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.button
              onClick={handleLogoClick}
              className="flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
                <div className="w-full h-full rounded-lg bg-black/50 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold text-white">Vee4Me</span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Main Navigation */}
              <div className="flex items-center space-x-6">
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    {item.items ? (
                      <button
                        className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    ) : item.href ? (
                      <Link
                        to={item.href}
                        className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.icon && <item.icon className="w-4 h-4" />}
                        <span>{item.name}</span>
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleNavigation(item)}
                        className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
                      >
                        {item.icon && <item.icon className="w-4 h-4 mr-1" />}
                        <span>{item.name}</span>
                      </button>
                    )}

                    {/* Dropdown Menu */}
                    {item.items && (
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-black/90 backdrop-blur-lg border border-white/10"
                            onMouseEnter={() => setOpenDropdown(item.name)}
                            onMouseLeave={() => setOpenDropdown(null)}
                          >
                            <div className="p-2">
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                                >
                                  <subItem.icon className="w-5 h-5 text-sky-400" />
                                  <span>{subItem.name}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="flex items-center space-x-6">
                <a
                  href="tel:951-858-3110"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>951-858-3110</span>
                </a>
                <a
                  href="mailto:info@vee4me.com"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@vee4me.com</span>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden"
              >
                <div className="py-4 space-y-4">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.items ? (
                        <div className="space-y-2">
                          <button
                            className="px-4 text-gray-400 font-medium w-full text-left"
                            onClick={() => handleNavigation(item)}
                          >
                            {item.name}
                          </button>
                          <div className="space-y-1">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="flex items-center space-x-3 px-6 py-2 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                              >
                                <subItem.icon className="w-5 h-5 text-sky-400" />
                                <span>{subItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : item.href ? (
                        <Link
                          to={item.href}
                          className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {item.icon && <item.icon className="w-5 h-5 text-sky-400" />}
                          <span>{item.name}</span>
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleNavigation(item)}
                          className="block px-4 py-2 w-full text-left text-gray-300 hover:text-white transition-colors"
                        >
                          {item.name}
                        </button>
                      )}
                    </div>
                  ))}

                  <div className="px-4 py-4 border-t border-white/10">
                    <div className="flex flex-col space-y-4">
                      <a
                        href="tel:951-858-3110"
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        <span>951-858-3110</span>
                      </a>
                      <a
                        href="mailto:info@vee4me.com"
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                        <span>info@vee4me.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <BookDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default Header;