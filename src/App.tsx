import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import AIExpertise from './components/AIExpertise';
import SEOStrategy from './components/SEOStrategy';
import TechnicalPerformance from './components/TechnicalPerformance';
import ContentStrategy from './components/ContentStrategy';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import TermsOfServicePage from './pages/TermsOfService';
import AIMarketingAutomation from './pages/services/AIMarketingAutomation';
import ContentStrategyPage from './pages/services/ContentStrategy';
import TechnicalPerformancePage from './pages/services/TechnicalPerformance';
import AIConsultingPage from './pages/services/AIConsulting';
import CustomAISolutionsPage from './pages/services/CustomAISolutions';
import WebsiteOptimizationPage from './pages/services/WebsiteOptimization';
import Service4Page from './pages/services/Service4';
import Service5Page from './pages/services/Service5';
import Service6Page from './pages/services/Service6';
import CaseStudies from './pages/CaseStudies';
import AboutConsultant from './pages/AboutConsultant';
import ContactQuote from './pages/ContactQuote';
import Article from './pages/news/Article';
import { sections } from './constants/sections';

function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onNavigate={scrollToSection} />
      <main>
        <section id={sections.hero}>
          <Hero onGetStarted={() => scrollToSection(sections.services)} onBookDemo={() => scrollToSection(sections.contact)} />
        </section>
        
        <section id={sections.services}>
          <Services />
        </section>
        
        <section id={sections.contentStrategy}>
          <ContentStrategy />
          <TechnicalPerformance />
        </section>
        
        <section id={sections.about}>
          <AIExpertise />
        </section>
        
        <section id={sections.aiInnovation}>
          <SEOStrategy />
        </section>
        
        <section id={sections.contact}>
          <Footer onNavigate={scrollToSection} />
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />
          <Route path="/services/content-strategy" element={<ContentStrategyPage />} />
          <Route path="/services/performance" element={<TechnicalPerformancePage />} />
          <Route path="/services/ai-consulting" element={<AIConsultingPage />} />
          <Route path="/services/custom-ai-solutions" element={<CustomAISolutionsPage />} />
          <Route path="/services/website-optimization" element={<WebsiteOptimizationPage />} />
          <Route path="/services/service-4" element={<Service4Page />} />
          <Route path="/services/service-5" element={<Service5Page />} />
          <Route path="/services/service-6" element={<Service6Page />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about-consultant" element={<AboutConsultant />} />
          <Route path="/contact-quote" element={<ContactQuote />} />
          <Route path="/news/:slug" element={<Article />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;