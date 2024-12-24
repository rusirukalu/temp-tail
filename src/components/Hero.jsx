import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold leading-tight mb-6">
              Your Personal AI
              <br />
              Fashion Assistant
              <br />
              Awaits
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover the future of fashion with our AI-based personal stylist.
              Effortlessly receive tailored outfit suggestions based on your wardrobe,
              preferences, and the weather.
            </p>
            <div className="flex gap-4">
            <Link to="/signup" >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Get Started
              </motion.button>
              </Link>
              <Link to="/wardrobegrid" >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-black text-black rounded-md hover:bg-gray-50 transition-colors"
              >
                Learn More
              </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070"
                alt="Fashion Preview"
                className="w-full h-full object-cover"
              />
              <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute rounded-xl inset-0 bg-black/10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;