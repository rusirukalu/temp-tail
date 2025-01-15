// Footer.jsx
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Heart,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight
} from 'lucide-react';

const Footer = () => {
  const footerSections = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Testimonials', href: '#testimonials' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Blog', href: '#blog' },
      { name: 'Press Kit', href: '#press' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR', href: '#gdpr' },
    ],
    social: [
      { name: 'Facebook', icon: Facebook, href: '#' },
      { name: 'Twitter', icon: Twitter, href: '#' },
      { name: 'Instagram', icon: Instagram, href: '#' },
      { name: 'LinkedIn', icon: Linkedin, href: '#' },
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 bg-[url('/path-to-noise-texture.png')] opacity-[0.03] mix-blend-overlay" />
      
      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12"
        >
          {/* Brand Section */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-4"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                  closetIQ
                </span>
              </div>
              <p className="text-gray-400 max-w-sm">
                Your personal AI fashion assistant, revolutionizing the way you dress and express yourself.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">contact@closetiq.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">Galle, Sri Lanka</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Links Sections */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12"
          >
            {/* Product Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Product</h3>
              <ul className="space-y-4">
                {footerSections.product.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                    >
                      {item.name}
                      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                {footerSections.company.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                    >
                      {item.name}
                      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Legal</h3>
              <ul className="space-y-4">
                {footerSections.legal.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                    >
                      {item.name}
                      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div variants={itemVariants} className="flex items-center text-gray-400">
              <span>&copy; {new Date().getFullYear()} closetIQ. All rights reserved.</span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> in Galle Fort
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-6">
              {footerSections.social.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
