import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Settings, LogOut, Bell, Plus } from 'lucide-react';
import Modal from '../components/Modal';
import WeatherComponent from '../components/WeatherComponent';
import WardrobeItemModal from '../components/WardrobeItemModal';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWardrobeModalOpen, setIsWardrobeModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [preferences, setPreferences] = useState({ style: '', color: '', occasion: '' });
  const [wardrobeItems, setWardrobeItems] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchWardrobeItems = async () => {
      try {
        const response = await fetch('/api/wardrobe');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setWardrobeItems(data);
      } catch (error) {
        console.error('Error fetching wardrobe items:', error);
      }
    };

    const fetchRecommendations = async () => {
      try {
        const response = await fetch('/api/recommendations');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRecommendations(data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchWardrobeItems();
    fetchRecommendations();
  }, []);

  const handleChange = (e) => {
    setPreferences({ ...preferences, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    try {
      const response = await fetch('/api/preferences', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(preferences),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log('Preferences updated successfully');
    } catch (error) {
      console.error('Error updating preferences:', error);
    }
  };

  const handleAddWardrobeItem = (item) => {
    setWardrobeItems((prev) => [...prev, item]);
  };

  const handleLogout = () => {
    console.log('User logged out');
    setIsLogoutModalOpen(false); // Close the modal
    navigate('/');
  };

  return (
    <div className="min-h-screen flex bg-[#0A0A0F] text-gray-100">
      {/* Sidebar with glass effect */}
      <aside className="w-80 bg-black/20 backdrop-blur-2xl border-r border-white/5 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-blue-500/10 animate-gradient-y"></div>
        
        <div className="relative">
          <div className="p-8 flex items-center space-x-4">
            <div className="p-3 bg-white/5 rounded-2xl backdrop-blur-xl">
              <Home className="w-8 h-8 text-blue-400" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Dashboard
            </span>
          </div>

          <nav className="mt-8 px-6">
            {/* Animated nav items */}
            <Link to="/profile" 
              className="group flex items-center p-4 mb-4 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10">
              <div className="p-2 rounded-xl bg-blue-400/10 group-hover:bg-blue-400/20 transition-all duration-300">
                <User className="w-5 h-5 text-blue-400" />
              </div>
              <span className="ml-4 font-medium text-gray-300 group-hover:text-blue-400 transition-colors duration-300">Profile</span>
            </Link>

            <Link to="/settingscomponent"
              className="group flex items-center p-4 mb-4 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10">
              <div className="p-2 rounded-xl bg-purple-400/10 group-hover:bg-purple-400/20 transition-all duration-300">
                <Settings className="w-5 h-5 text-purple-400" />
              </div>
              <span className="ml-4 font-medium text-gray-300 group-hover:text-purple-400 transition-colors duration-300">Settings</span>
            </Link>

            <button onClick={() => setIsLogoutModalOpen(true)}
              className="w-full group flex items-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-red-500/10 transition-all duration-300 border border-white/5 hover:border-red-500/20">
              <div className="p-2 rounded-xl bg-red-400/10 group-hover:bg-red-400/20 transition-all duration-300">
                <LogOut className="w-5 h-5 text-red-400" />
              </div>
              <span className="ml-4 font-medium text-gray-300 group-hover:text-red-400 transition-colors duration-300">Log Out</span>
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Welcome Back,
            </span>
            <span className="ml-2 text-white">කලු මල්ලි</span>
          </h1>
          
          <Link to="/notifications">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
              <div className="p-3 bg-white/5 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10">
                <Bell className="w-6 h-6 text-blue-400" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">3</span>
              </div>
            </motion.div>
          </Link>
        </header>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* User Preferences Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-6">
              User Preferences
            </h2>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              Set Preferences
            </motion.button>
          </motion.div>

          {/* Weather Component */}
          <WeatherComponent />

          {/* Wardrobe Section - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-full p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Wardrobe Items
              </h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsWardrobeModalOpen(true)}
                className="flex items-center space-x-2 py-3 px-6 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold relative overflow-hidden group"
              >
                <Plus className="w-5 h-5" />
                <span>Add Item</span>
                <span className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wardrobeItems.map((item) => (
                <motion.div
                  key={item._id}
                  whileHover={{ scale: 1.02 }}
                  className="group relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300"
                >
                  {item.imageUrl && (
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
                    </div>
                  )}
                  <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl font-semibold text-white mb-1">{item.name}</h3>
                    <p className="text-blue-400">{item.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recommendations Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-full p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-8">
              Recommendations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((recommendation) => (
                <motion.div
                  key={recommendation._id}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-4">
                    {recommendation.occasion}
                  </h3>
                  <ul className="space-y-3">
                    {recommendation.outfit.map((item) => (
                      <li key={item._id} className="flex items-center space-x-3 text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                        <span>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {isLogoutModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg w-96"
          >
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">Are you sure you want to logout?</h2>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsLogoutModalOpen(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
              >
                Logout
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-4">Set Preferences</h2>
          <label htmlFor="style" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Style
          </label>
          <input
            type="text"
            id="style"
            name="style"
            value={preferences.style}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="color" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Color
          </label>
          <input
            type="text"
            id="color"
            name="color"
            value={preferences.color}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="occasion" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Occasion
          </label>
          <input
            type="text"
            id="occasion"
            name="occasion"
            value={preferences.occasion}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gray-800 text-white font-bold text-lg shadow-md hover:bg-gray-700 transition-colors"
        >
          Update Preferences
        </button>
      </form>

      </Modal>

      <WardrobeItemModal
        isOpen={isWardrobeModalOpen}
        onClose={() => setIsWardrobeModalOpen(false)}
        onAddItem={handleAddWardrobeItem}
      />
    </div>
  );
};

export default Dashboard;