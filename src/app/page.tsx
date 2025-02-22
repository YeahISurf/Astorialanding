// Remove unused import since Image component is not used in this file
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleDemoRequest = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      // @ts-expect-error - gtag is added by Google Analytics script
      window.gtag('event', 'cta_click', {
        event_category: 'Engagement',
        event_label: 'Demo Request'
      });
    }
    console.log('Demo requested');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 relative">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-[#006400]">
              ASTRORIA
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-[#006400] transition-colors">Services</a>
              <a href="#testimonials" className="text-gray-700 hover:text-[#006400] transition-colors">Testimonials</a>
              <button 
                onClick={handleDemoRequest}
                className="bg-[#006400] text-white px-6 py-2 rounded-lg hover:bg-[#004d00] transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
      <head>
        <title>ASTRORIA - Advanced Sports Analytics</title>
        <meta name="description" content="ASTRORIA provides cutting-edge sports analytics solutions using AI and machine learning for predictive analytics, performance tracking, and real-time insights." />
        <meta name="keywords" content="sports analytics, predictive analytics, performance tracking, real-time insights, ASTRORIA" />
      </head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#006400] to-[#004d00] min-h-screen flex flex-col justify-center items-center text-center px-4 py-16 overflow-hidden" role="banner" aria-label="Hero section">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-geist tracking-tight">
            ASTRORIA
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-200 max-w-3xl font-light leading-relaxed">
            Revolutionizing Sports Analytics with Advanced Technology
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 md:px-8 bg-white" role="region" aria-label="Our services">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#006400] font-geist">Our Services</h2>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group p-8 rounded-xl bg-white border border-gray-200 hover:border-[#006400] transition-all duration-300 hover:shadow-xl backdrop-blur-lg bg-white/90">
            <h3 className="text-2xl font-semibold text-[#006400] mb-4 group-hover:translate-y-[-2px] transition-transform">Predictive Analytics</h3>
            <p className="text-gray-600 leading-relaxed">Leverage AI and machine learning to predict game outcomes and player performance with unprecedented accuracy.</p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group p-8 rounded-xl bg-white border border-gray-200 hover:border-[#006400] transition-all duration-300 hover:shadow-xl backdrop-blur-lg bg-white/90">
            <h3 className="text-2xl font-semibold text-[#006400] mb-4 group-hover:translate-y-[-2px] transition-transform">Performance Tracking</h3>
            <p className="text-gray-600 leading-relaxed">Real-time monitoring and analysis of athlete performance metrics for data-driven decision making.</p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group p-8 rounded-xl bg-white border border-gray-200 hover:border-[#006400] transition-all duration-300 hover:shadow-xl backdrop-blur-lg bg-white/90">
            <h3 className="text-2xl font-semibold text-[#006400] mb-4 group-hover:translate-y-[-2px] transition-transform">Real-Time Insights</h3>
            <p className="text-gray-600 leading-relaxed">Instant access to critical game statistics and strategic recommendations during live matches.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white" role="region" aria-label="Client testimonials">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#006400] font-geist">What Our Clients Say</h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white/90 backdrop-blur-lg p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <p className="text-gray-600 mb-8 text-lg leading-relaxed italic">&ldquo;ASTRORIA&apos;s predictive analytics have transformed our approach to game strategy. We&apos;ve seen a 20% improvement in our win rate since implementation.&rdquo;</p>
            <p className="font-semibold text-[#006400] text-lg">— Coach John Anderson</p>
            <p className="text-gray-500">Elite Sports</p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white/90 backdrop-blur-lg p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <p className="text-gray-600 mb-8 text-lg leading-relaxed italic">&ldquo;The real-time insights provided by ASTRORIA have been game-changing for our team&apos;s performance analysis and decision-making process.&rdquo;</p>
            <p className="font-semibold text-[#006400] text-lg">— Sarah Martinez</p>
            <p className="text-gray-500">Performance Director</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#006400] to-[#004d00] text-center relative overflow-hidden" role="region" aria-label="Call to action">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 font-geist">Ready to Elevate Your Game?</h2>
          <button 
            className="bg-white text-[#006400] px-10 py-5 rounded-lg font-semibold text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg"
            onClick={handleDemoRequest}
            aria-label="Request a demo"
          >
            Request a Demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 text-center" role="contentinfo">
        <p className="text-gray-400 font-light">© 2025 ASTRORIA. All rights reserved.</p>
      </footer>
    </div>
  );
}
