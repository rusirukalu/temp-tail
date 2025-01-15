import { motion } from 'framer-motion';
import { TrendingUp, Users, Sparkles } from 'lucide-react';
import PropTypes from 'prop-types';

const stats = [
  { 
    id: 1, 
    name: 'Active Users', 
    value: '2M+', 
    icon: <Users className="h-8 w-8" />,
    gradient: "from-pink-600 to-rose-600",
    description: "Fashion enthusiasts worldwide"
  },
  { 
    id: 2, 
    name: 'Outfits Generated', 
    value: '10M+', 
    icon: <TrendingUp className="h-8 w-8" />,
    gradient: "from-purple-600 to-indigo-600",
    description: "AI-powered combinations daily"
  },
  { 
    id: 3, 
    name: 'Style Success Rate', 
    value: '98%', 
    icon: <Sparkles className="h-8 w-8" />,
    gradient: "from-blue-600 to-cyan-600",
    description: "User satisfaction rating"
  },
];

const StatsCard = ({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
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
            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.gradient} p-3 mb-6 shadow-lg`}
          >
            {stat.icon}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-2"
          >
            <h3 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {stat.value}
            </h3>
            
            <p className="text-lg font-medium text-gray-300">{stat.name}</p>
            <p className="text-sm text-gray-400/80">{stat.description}</p>
          </motion.div>
        </div>
        
        {/* Subtle border glow */}
        <div className="absolute inset-0 rounded-3xl transition-all duration-300 group-hover:ring-2 group-hover:ring-purple-500/20" />
      </motion.div>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0F]">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-[#0A0A0F] to-black/50" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
            <span className="text-sm text-purple-200/80">Our Impact</span>
          </motion.div>
          
          <h2 className="text-4xl font-bold mb-6">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400">
              Transforming Fashion with AI
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Numbers that speak for themselves in the world of AI-powered fashion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatsCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-purple-950/30 border border-purple-500/20 backdrop-blur-sm">
            <span className="text-purple-200/80 text-sm">
              Trusted by fashion enthusiasts worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

StatsCard.propTypes = {
  stat: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    gradient: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Stats;
