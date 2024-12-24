import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fashion Enthusiast",
      content: "This AI stylist has completely transformed how I approach my daily outfits. It's like having a personal fashion consultant available 24/7!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    },
    {
      name: "Michael Chen",
      role: "Business Professional",
      content: "The weather-based recommendations are spot-on. I never have to worry about being underdressed or overdressed for any occasion.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
    },
    {
      name: "Emma Williams",
      role: "Student",
      content: "As a busy student, this app saves me so much time in the morning. The outfit suggestions are always perfect for my style!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600">Real experiences from our community</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;