import { Helmet } from 'react-helmet';
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
    <Helmet>
        <title>closetIQ-temp</title>
        <meta name="description" content="closetIQ helps you manage your wardrobe, get outfit recommendations, and virtually try on clothes using AI." />
        <meta name="keywords" content="AI Stylist, Wardrobe Management, Outfit Recommendations, Virtual Try-On" />
        <meta name="author" content="Your Name or Company" />
        {/* Add Open Graph tags for better social media sharing */}
        <meta property="og:title" content="closetIQ - Your Personal AI Stylist" />
        <meta property="og:description" content="Manage your wardrobe, receive personalized outfit recommendations, and virtually try on clothes with StyleAI." />
        <meta property="og:image" content="https://yourdomain.com/path-to-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <main>
      <Hero />
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
