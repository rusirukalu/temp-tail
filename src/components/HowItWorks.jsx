import { motion } from 'framer-motion';
import { Upload, Wand2, Shirt, ArrowRight, Sparkles } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="h-8 w-8" />,
      title: "Upload Your Wardrobe",
      description: "Take photos of your clothing items or upload existing images.",
      gradient: "from-pink-600 to-rose-600",
      delay: 0.2,
      buttonText: "Start Uploading"
    },
    {
      icon: <Wand2 className="h-8 w-8" />,
      title: "AI Analysis",
      description: "Our AI categorizes and tags your items automatically.",
      gradient: "from-purple-600 to-indigo-600",
      delay: 0.4,
      buttonText: "See How It Works"
    },
    {
      icon: <Shirt className="h-8 w-8" />,
      title: "Get Recommendations",
      description: "Receive personalized outfit suggestions based on your style.",
      gradient: "from-blue-600 to-cyan-600",
      delay: 0.6,
      buttonText: "View Examples"
    }
  ];

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
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0F]" id="how-it-works">
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
            <span className="text-sm text-purple-200/80">Simple Process</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold mb-6"
          >
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400">
              How It Works
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Transform your wardrobe in three simple steps
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Enhanced Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 to-blue-800/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative p-8 rounded-3xl bg-black/40 border border-purple-500/10 backdrop-blur-sm hover:border-purple-500/20 shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 rounded-3xl" />
                
                {/* Step Number with enhanced styling */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg border border-white/10">
                  {index + 1}
                </div>

                <div className="relative">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.gradient} p-3 mb-6 shadow-lg`}
                  >
                    {step.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{step.description}</p>
                  
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="group flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-all duration-300"
                  >
                    {step.buttonText}
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
                
                {/* Subtle border glow */}
                <div className="absolute inset-0 rounded-3xl transition-all duration-300 group-hover:ring-2 group-hover:ring-purple-500/20" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
