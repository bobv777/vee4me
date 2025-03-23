import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-lg bg-black border border-white/10 rounded-xl p-6 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold text-white mb-2">Book a Demo</h2>
            <p className="text-gray-400 mb-6">
              Schedule a personalized demo to see how our AI solutions can transform your business.
            </p>

            <form 
              action="https://formspree.io/f/xjkywbpr" 
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="demo-name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="demo-name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="demo-company" className="block text-sm font-medium text-gray-300 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="demo-company"
                  name="company"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="demo-website" className="block text-sm font-medium text-gray-300 mb-1">
                  Website URL
                </label>
                <input
                  type="url"
                  id="demo-website"
                  name="website"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  placeholder="https://example.com"
                />
              </div>

              <div>
                <label htmlFor="demo-email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="demo-email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="demo-details" className="block text-sm font-medium text-gray-300 mb-1">
                  What would you like to see in the demo?
                </label>
                <textarea
                  id="demo-details"
                  name="demo_details"
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 resize-none"
                  placeholder="Tell us about your needs and what you'd like to see in the demo"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Demo
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};