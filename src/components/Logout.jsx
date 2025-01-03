import { useState } from 'react';
import { motion } from 'framer-motion';
import { LogOut } from 'lucide-react';

const Logout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    console.log('User logged out');
    setIsModalOpen(false); // Close the modal after logout
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg mt-20"
      >
        <div className="flex items-center space-x-4">
          <LogOut className="w-12 h-12 text-red-500" />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Logout</h1>
        </div>
        <div className="mt-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Confirm Logout
          </button>
        </div>
      </motion.div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-96"
          >
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">Are you sure you want to logout?</h2>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Logout
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Logout;
