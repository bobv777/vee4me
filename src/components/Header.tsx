import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// Define appropriate types (add to match your project types)
interface SubItem {
  name: string;
  href?: string;
  icon?: React.ReactNode;
}

interface NavigationItem {
  name: string;
  items?: SubItem[];
}

interface HeaderProps {
  onNavigate?: () => void; // Add actual props as needed
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navigation: NavigationItem[] = [
    // Populate with your real navigation items
  ];

  return (
    <header>
      {navigation.map((item) => (
        <div key={item.name}>
          <AnimatePresence>
            {Array.isArray(item.items) && item.items.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-black/90 backdrop-blur-lg border border-white/10"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.items.map((subItem) => (
                  <div key={subItem.name} className="p-2">
                    <Link
                      to={subItem.href || ''}
                      className="flex items-center space-x-2 p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      {subItem.icon && (
                        <span className="w-5 h-5 text-sky-400">
                          {subItem.icon}
                        </span>
                      )}
                      <span>{subItem.name}</span>
                      <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                    </Link>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </header>
  );
};

export default Header;
