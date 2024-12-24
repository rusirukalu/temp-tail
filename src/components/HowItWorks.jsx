import { motion } from 'framer-motion';
import { Upload, Wand2, Shirt } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="h-8 w-8" />,
      title: "Upload Your Wardrobe",
      description: "Take photos of your clothing items or upload existing images."
    },
    {
      icon: <Wand2 className="h-8 w-8" />,
      title: "AI Analysis",
      description: "Our AI categorizes and tags your items automatically."
    },
    {
      icon: <Shirt className="h-8 w-8" />,
      title: "Get Recommendations",
      description: "Receive personalized outfit suggestions based on your style."
    }
  ];

  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Three simple steps to transform your wardrobe</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-black text-white rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(100%-8.5rem)] w-[calc(100%-4rem)] h-[2px] bg-gray-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;