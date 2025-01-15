import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { X } from 'lucide-react'; // Import the X icon

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative w-full max-w-lg mx-4 overflow-hidden"
      >
        {/* Animated background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-gradient-xy"></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xl"></div>
        
        <div className="relative p-8 border border-white/10 rounded-3xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Update Preferences
            </h2>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </motion.button>
          </div>
          <div className="relative">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;