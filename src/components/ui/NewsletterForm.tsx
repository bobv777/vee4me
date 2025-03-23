import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle, XCircle, Mail } from 'lucide-react';

interface NewsletterFormProps {
  className?: string;
}

export const NewsletterForm: React.FC<NewsletterFormProps> = ({ className = '' }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  return (
    <div className={className}>
      <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
      <p className="text-gray-400 mb-4">
        Subscribe to our newsletter for the latest AI insights and updates.
      </p>
      
      <form 
        action="https://formspree.io/f/xjkywbpr" 
        method="POST"
        className="relative"
        onSubmit={() => setSubmitStatus('success')}
      >
        <div className="flex space-x-2">
          <div className="relative flex-1">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              required
              aria-label="Email address for newsletter"
            />
          </div>
          
          <motion.button
            type="submit"
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium disabled:opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </div>

        {submitStatus === 'success' && (
          <div className="absolute -bottom-6 left-0 flex items-center gap-2 text-emerald-400 text-sm">
            <CheckCircle className="w-4 h-4" />
            Successfully subscribed! Welcome aboard.
          </div>
        )}
      </form>
    </div>
  );
};