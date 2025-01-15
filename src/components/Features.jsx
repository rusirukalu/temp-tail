import { motion } from 'framer-motion';
import { Camera, Bot, UserCircle, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Image Classification",
      description: "Advanced AI-powered system for wardrobe item recognition and tagging.",
      gradient: "from-pink-600 to-rose-600"
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Interactive Chatbot",
      description: "Smart assistant to help curate your perfect outfit based on various factors.",
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      icon: <UserCircle className="h-8 w-8" />,
      title: "Personalization",
      description: "Tailored recommendations based on your style preferences and occasions.",
      gradient: "from-blue-600 to-cyan-600"
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
    <section className="py-24 relative overflow-hidden bg-[#0A0A0F]" id="features">
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
            <span className="text-sm text-purple-200/80">Powered by AI</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold mb-6"
          >
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400">
              Feature Highlights
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Experience the power of AI in fashion with our cutting-edge features
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
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
                
                <div className="relative">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-3 mb-6 shadow-lg`}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
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

export default Features;
