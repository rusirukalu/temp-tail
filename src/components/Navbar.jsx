import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navVariants = {
  hidden: { y: -100 },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const menuVariants = {
  hidden: { 
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-lg shadow-lg shadow-purple-500/10' 
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <Link 
          to="/" 
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300" />
          <span className="relative text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            closetIQ
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative z-50 p-2 text-gray-300 hover:text-white transition-colors"
          >
            <span className="sr-only">Toggle menu</span>
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-x-12">
          {['Home', 'About', 'Contact Us'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
              className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              <span>{item}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Login Button */}
        <div className="hidden lg:block">
        <Link to="/login" className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300" />
          <motion.span
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative text-lg font-medium bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
          >
            Login
          </motion.span>
        </Link>

        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-black/95 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex-1 mt-16">
                  <nav className="flex flex-col space-y-6">
                    {['Home', 'About', 'Contact Us'].map((item) => (
                      <Link
                        key={item}
                        to={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-2xl font-medium text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        {item}
                      </Link>
                    ))}
                  </nav>
                </div>
                
                <div className="pt-6 mt-auto">
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center rounded-full font-medium hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
