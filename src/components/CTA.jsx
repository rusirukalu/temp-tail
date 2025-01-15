import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0F]" id="cta">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-[#0A0A0F] to-black/50" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{}}
        whileInView={{}}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
          {/* Enhanced glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 via-blue-800/30 to-purple-800/30 rounded-3xl blur-3xl" />
          
          <motion.div
            initial={{  }}
            whileInView={{  }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative p-12 md:p-20 rounded-3xl bg-black/40 border border-purple-500/10 backdrop-blur-sm hover:border-purple-500/20 shadow-lg transition-all duration-300"
          >
            {/* Inner gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 rounded-3xl" />
            
            <div className="relative max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-purple-950/30 border border-purple-500/20 backdrop-blur-sm mb-8"
              >
                <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-sm text-purple-200/80">Limited Time Offer</span>
              </motion.div>

              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400">
                  Ready to Transform
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400 mt-2">
                  Your Wardrobe?
                </span>
              </motion.h2>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-xl text-gray-400 mb-12"
              >
                Join thousands of satisfied users and experience the future of fashion today.
              </motion.p>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 rounded-full overflow-hidden"
                >
                  {/* Button gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300" />
                  
                  <div className="relative flex items-center justify-center">
                    <span className="text-white font-medium">Get Started Now</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight className="w-5 h-5 text-white ml-2" />
                    </motion.div>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-purple-950/30 border border-purple-500/20 backdrop-blur-sm text-purple-200 rounded-full hover:bg-purple-900/40 hover:border-purple-500/30 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
