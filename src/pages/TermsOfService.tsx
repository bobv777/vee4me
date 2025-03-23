import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, AlertCircle, Brain, ArrowLeft } from 'lucide-react';

export const TermsOfServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-8">
              <a
                href="/"
                className="flex items-center space-x-2"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
                  <div className="w-full h-full rounded-lg bg-black/50 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                </div>
                <span className="text-2xl font-bold text-white">Vee4Me</span>
              </a>
              <a
                href="/"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/20 to-black" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
                <div className="w-full h-full rounded-lg bg-black/50 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
                <p className="text-gray-400">Last Updated: January 7, 2025</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 mb-8">
              <div className="flex items-start gap-3 text-gray-300">
                <AlertCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                <p>
                  Welcome to Vee4Me, an AI consulting and automation service provider. 
                  These Terms of Service ("Terms") outline your rights and responsibilities 
                  when using our website, products, and services.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: "1. Acceptance of Terms",
                content: "By accessing or using our services, you agree to comply with these Terms. If you do not agree, please do not use our services."
              },
              {
                title: "2. Services Provided",
                content: [
                  "Vee4Me offers AI-driven solutions, including:",
                  "• AI-powered marketing automation (including social media management, content creation, and analytics)",
                  "• Custom AI workflows and integrations",
                  "• AI consulting and business transformation services",
                  "• Website design and optimization leveraging AI insights",
                  "• AI-driven content creation (graphics, video, jingles)",
                  "• Technical AI solutions and custom ML models",
                  "We reserve the right to modify, discontinue, or enhance any service at our discretion."
                ]
              },
              {
                title: "3. User Responsibilities",
                content: [
                  "By using our services, you agree to:",
                  "• Provide accurate and up-to-date information",
                  "• Use AI-generated content responsibly and in compliance with all applicable laws",
                  "• Not use our services for fraudulent, illegal, or harmful activities",
                  "We may suspend or terminate accounts violating these terms."
                ]
              },
              {
                title: "4. AI-Generated Content Disclaimer",
                content: "Our AI-powered solutions provide data-driven insights, but results are not guaranteed. You acknowledge that AI-based recommendations should be used alongside human judgment."
              },
              {
                title: "5. Intellectual Property",
                content: "All content, including text, graphics, logos, and AI-generated insights, are the property of Vee4Me or its licensors. Unauthorized reproduction or redistribution is prohibited."
              },
              {
                title: "6. Limitation of Liability",
                content: [
                  "To the maximum extent permitted by law, Vee4Me is not liable for:",
                  "• Loss of revenue, business opportunities, or indirect damages",
                  "• AI-generated errors, misinterpretations, or unintended outputs",
                  "• Security breaches caused by third-party platforms we integrate with"
                ]
              },
              {
                title: "7. Governing Law",
                content: "These Terms shall be governed by the laws of the State of California, without regard to conflict of law principles."
              },
              {
                title: "8. Dispute Resolution",
                content: "Any disputes arising from these Terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association in California."
              },
              {
                title: "9. Changes to Terms",
                content: "We may update these Terms periodically. Continued use of our services constitutes acceptance of the updated Terms."
              },
              {
                title: "10. Contact Information",
                content: [
                  "For legal inquiries, please contact:",
                  "info@vee4me.com"
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors"
              >
                <h2 className="text-xl font-semibold text-white mb-4">{section.title}</h2>
                {Array.isArray(section.content) ? (
                  <div className="space-y-2">
                    {section.content.map((item, i) => (
                      <p key={i} className="text-gray-300">{item}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-300">{section.content}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="max-w-4xl mx-auto mt-12 p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
              <p className="text-gray-400 text-sm">
                This document was last updated on January 7, 2025. If you have any questions 
                about these Terms of Service, please contact us at info@vee4me.com
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfServicePage;