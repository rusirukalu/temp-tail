import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-black text-white" id="cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Wardrobe?</h2>
          <p className="text-xl text-gray-400 mb-8">Join thousands of satisfied users and experience the future of fashion today.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-white text-black rounded-md hover:bg-gray-100 transition-colors"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;