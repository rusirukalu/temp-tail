import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const WardrobeItemModal = ({ isOpen, onClose, onAddItem }) => {
  const [item, setItem] = useState({ name: '', category: '', image: null, imageUrl: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setItem((prev) => ({ ...prev, image: file, imageUrl }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.name && item.category && item.imageUrl) {
      onAddItem(item);
      setItem({ name: '', category: '', image: null, imageUrl: '' });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg max-w-md w-full"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">Add Wardrobe Item</h2>
          <button
            onClick={onClose}
            className="text-gray-700 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-500 text-xl focus:outline-none"
          >
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={item.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="category" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={item.category}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="image" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {item.imageUrl && (
              <img
                src={item.imageUrl}
                alt="Preview"
                className="mt-4 rounded-lg shadow-lg object-cover w-full h-48 border border-gray-300 dark:border-gray-700"
              />
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gray-800 text-white font-bold text-lg shadow-md hover:bg-gray-700 transition-colors"
          >
            Add Item
          </button>
        </form>
      </motion.div>
    </div>
  );
};

WardrobeItemModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddItem: PropTypes.func.isRequired,
};

export default WardrobeItemModal;