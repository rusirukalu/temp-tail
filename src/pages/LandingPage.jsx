// LandingPage.jsx
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import MetaTags from '../components/MetaTags';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';

const LandingPage = () => {
  useEffect(() => {
    document.body.className = 'bg-gradient-to-b from-gray-900 via-gray-800 to-black';
    return () => {
      document.body.className = '';
    };
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <MetaTags
        title="closetIQ - Your Personal AI Stylist"
        description="closetIQ helps you manage your wardrobe, get outfit recommendations, and virtually try on clothes using AI."
        keywords="AI Stylist, Wardrobe Management, Outfit Recommendations, Virtual Try-On"
        author="Your Name or Company"
        ogImage="https://yourdomain.com/path-to-image.jpg"
        ogUrl="https://yourdomain.com/"
      />
      <motion.main
        variants={pageVariants}
        initial="initial"
        animate="animate"
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-transparent pointer-events-none" />
        <motion.div variants={pageVariants}>
          <Hero />
        </motion.div>
        <motion.div variants={pageVariants}>
          <Features />
        </motion.div>
        <motion.div variants={pageVariants}>
          <Benefits />
        </motion.div>
        <motion.div variants={pageVariants}>
          <Stats />
        </motion.div>
        <motion.div variants={pageVariants}>
          <HowItWorks />
        </motion.div>
        <motion.div variants={pageVariants}>
          <Testimonials />
        </motion.div>
        <motion.div variants={pageVariants}>
          <CTA />
        </motion.div>
      </motion.main>
    </>
  );
};

export default LandingPage;
