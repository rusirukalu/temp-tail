import { motion } from 'framer-motion';
import { Clock, Sparkles, Sun, Zap } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      title: "Save Time",
      description: "Reduce decision fatigue and get dressed faster with AI-powered suggestions."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-green-500" />,
      title: "Perfect Matches",
      description: "Get outfit combinations that always work well together."
    },
    {
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      title: "Weather-Ready",
      description: "Recommendations adapted to current weather conditions."
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-500" />,
      title: "Smart Learning",
      description: "AI that learns your preferences and improves over time."
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Why Choose AI Stylist?</h2>
          <p className="text-xl text-gray-600">Experience the benefits of AI-powered fashion assistance</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-black text-white rounded-full"
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
