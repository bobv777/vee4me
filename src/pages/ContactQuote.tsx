import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { sections } from '../constants/sections';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Clock, 
  Calendar,
  Loader2
} from 'lucide-react';
import CTAButton from '../components/ui/CTAButton';

const ContactQuote: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert('Thank you for your inquiry. We will contact you shortly!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onNavigate={scrollToSection} />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300">
              Let's discuss how we can help transform your business with AI
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <a href="tel:951-858-3110" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                    <Phone className="w-6 h-6 text-purple-400" />
                    <span>951-858-3110</span>
                  </a>
                  <a href="mailto:contact@vee4me.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                    <Mail className="w-6 h-6 text-purple-400" />
                    <span>contact@vee4me.com</span>
                  </a>
                  <div className="flex items-center gap-4 text-gray-300">
                    <MapPin className="w-6 h-6 text-purple-400" />
                    <span>Los Angeles, CA</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Business Hours</h2>
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Request a Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* your form fields remain unchanged */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <CTAButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </CTAButton>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer onNavigate={scrollToSection} />
    </div>
  );
};

export default ContactQuote;