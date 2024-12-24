import { motion } from 'framer-motion';
import { Camera, Bot, UserCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Image Classification",
      description: "Advanced AI-powered system for wardrobe item recognition and tagging."
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Interactive Chatbot",
      description: "Smart assistant to help curate your perfect outfit based on various factors."
    },
    {
      icon: <UserCircle className="h-8 w-8" />,
      title: "Personalization",
      description: "Tailored recommendations based on your style preferences and occasions."
    }
  ];

  return (
    <section className="py-20 bg-gray-100" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Feature Highlights</h2>
          <p className="text-xl text-gray-600">Experience the power of AI in fashion</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 rounded-xl"
            >
              <div className="mb-4 text-black">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;