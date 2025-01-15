import { motion } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fashion Enthusiast",
      content: "This AI stylist has completely transformed how I approach my daily outfits. It's like having a personal fashion consultant available 24/7!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      gradient: "from-pink-600 to-rose-600"
    },
    {
      name: "Michael Chen",
      role: "Business Professional",
      content: "The weather-based recommendations are spot-on. I never have to worry about being underdressed or overdressed for any occasion.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      name: "Emma Williams",
      role: "Student",
      content: "As a busy student, this app saves me so much time in the morning. The outfit suggestions are always perfect for my style!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
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
    <section className="py-24 relative overflow-hidden bg-[#0A0A0F]" id="testimonials">
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
            <span className="text-sm text-purple-200/80">User Stories</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold mb-6"
          >
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400">
              What Our Users Say
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Real experiences from our growing community of fashion enthusiasts
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
                  <Quote className="w-10 h-10 text-purple-400/40 mb-6" />
                  
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 text-yellow-500 fill-current mr-1"
                        style={{ filter: 'drop-shadow(0 0 4px rgba(234, 179, 8, 0.3))' }}
                      />
                    ))}
                  </div>

                  <p className="text-gray-300 italic mb-8 leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </p>
                  
                  <div className="flex items-center">
                    <div className="relative">
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${testimonial.gradient} blur-md opacity-60`} />
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="relative w-12 h-12 rounded-full object-cover ring-2 ring-purple-500/20"
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
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

export default Testimonials;
