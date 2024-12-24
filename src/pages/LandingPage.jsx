import { motion } from 'framer-motion';
import MetaTags from '../components/MetaTags';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';

const LandingPage = () => {
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
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
      </motion.div>
      <Features />
      <Benefits />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </main>
    </>
  );
};

export default LandingPage;
