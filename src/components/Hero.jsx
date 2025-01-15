import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden bg-[#0A0A0F]">
      {/* Enhanced dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-black" />
      
      {/* Noise texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/path-to-noise-texture.png')] opacity-[0.02] mix-blend-overlay" />
      </div>
      
      {/* Animated gradient lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-10">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-purple-950/30 border border-purple-500/20 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-sm text-purple-200/80">AI-Powered Fashion Assistant</span>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-6xl font-extrabold leading-tight"
              >
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400">
                  Your Personal AI
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400">
                  Fashion Assistant
                </span>
                <span className="block text-white/90">
                  Awaits
                </span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-400 leading-relaxed"
              >
                Discover the future of fashion with our AI-based personal stylist.
                Effortlessly receive tailored outfit suggestions based on your wardrobe,
                preferences, and the weather.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <Link to="/dashboard">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                  <div className="relative flex items-center gap-2">
                    Get Started
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.button>
              </Link>
              <Link to="/userdashboard">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-purple-950/30 border border-purple-500/20 text-purple-200 rounded-full backdrop-blur-sm hover:bg-purple-900/40 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div 
              className="aspect-square rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070"
                alt="Fashion Preview"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-purple-900/40 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
