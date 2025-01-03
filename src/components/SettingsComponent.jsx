import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Settings, ToggleLeft, ToggleRight, ChevronLeft } from 'lucide-react';

const SettingsComponent = () => {
  const [notifications, setNotifications] = useState(true);

  const toggleNotifications = () => {
    setNotifications((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6">
      <>
        <Link to="/userdashboard">
            <button className="flex items-center bg-black hover:bg-gray text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5">
                <ChevronLeft className="w-5 h-5 mr-2" />
                Back
            </button>
        </Link>
        </>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
      >
        <h1 className="text-2xl font-bold flex items-center mb-6">
          <Settings className="w-6 h-6 mr-2" /> Settings
        </h1>
        <div className="flex justify-between items-center">
          <span>Enable Notifications</span>
          <button onClick={toggleNotifications} className="focus:outline-none">
            {notifications ? (
              <ToggleRight className="w-6 h-6 text-green-500" />
            ) : (
              <ToggleLeft className="w-6 h-6 text-gray-500" />
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SettingsComponent;