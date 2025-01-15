import { motion } from 'framer-motion';
import { Clock, Sparkles, Sun, Zap, ArrowRight } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Save Time",
      description: "Reduce decision fatigue and get dressed faster with AI-powered suggestions.",
      gradient: "from-pink-600 to-rose-600",
      delay: 0.2
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Perfect Matches",
      description: "Get outfit combinations that always work well together.",
      gradient: "from-violet-600 to-purple-600",
      delay: 0.4
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Weather-Ready",
      description: "Recommendations adapted to current weather conditions.",
      gradient: "from-blue-600 to-cyan-600",
      delay: 0.6
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Smart Learning",
      description: "AI that learns your preferences and improves over time.",
      gradient: "from-emerald-600 to-teal-600",
      delay: 0.8
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0F]" id="benefits">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-[#0A0A0F] to-black/50" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-purple-950/30 border border-purple-500/20 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm text-purple-200/80">Why Choose Us</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold mb-6"
          >
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400">
              Benefits of AI Stylist
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Experience the future of personalized fashion with cutting-edge AI technology
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 to-blue-800/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-full p-6 rounded-3xl bg-black/40 border border-purple-500/10 backdrop-blur-sm hover:border-purple-500/20 shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 rounded-3xl" />
                
                <div className="relative">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${benefit.gradient} p-3 mb-6 shadow-lg`}
                  >
                    {benefit.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  
                  <motion.div
                    initial={{ opacity: 0.5, x: 0 }}
                    whileHover={{ opacity: 1, x: 5 }}
                    className="flex items-center text-purple-400 group-hover:text-purple-300 transition-all duration-300"
                  >
                    <span className="text-sm font-medium mr-2">Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
                
                {/* Subtle border glow */}
                <div className="absolute inset-0 rounded-3xl transition-all duration-300 group-hover:ring-2 group-hover:ring-purple-500/20" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
