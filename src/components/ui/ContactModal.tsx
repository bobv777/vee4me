import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
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
            className="relative w-full max-w-4xl bg-black border border-white/10 rounded-xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="p-8 bg-white/5 rounded-l-xl">
                <h2 className="text-2xl font-bold text-white mb-2">Contact Us</h2>
                <p className="text-gray-400 mb-8">
                  Get in touch with our team to discuss how we can help transform your business with AI.
                </p>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <a
                      href="tel:951-858-3110"
                      className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
                    >
                      <Phone className="w-6 h-6 text-purple-400" />
                      <span>951-858-3110</span>
                    </a>
                    <a
                      href="mailto:info@vee4me.com"
                      className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
                    >
                      <Mail className="w-6 h-6 text-purple-400" />
                      <span>info@vee4me.com</span>
                    </a>
                    <div className="flex items-center gap-4 text-gray-300">
                      <MapPin className="w-6 h-6 text-purple-400" />
                      <span>Los Angeles, CA</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4">Business Hours</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-gray-300">
                        <Clock className="w-6 h-6 text-purple-400" />
                        <span>Monday - Friday: 9:00 AM - 6:00 PM PST</span>
                      </div>
                      <div className="flex items-center gap-4 text-gray-300">
                        <Calendar className="w-6 h-6 text-purple-400" />
                        <span>Weekend appointments available upon request</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Send Us a Message</h3>
                <form 
                  action="https://formspree.io/f/xjkywbpr" 
                  method="POST"
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-1">
                      Website URL
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                      placeholder="https://example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 resize-none"
                      placeholder="Tell us about your project or requirements"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};