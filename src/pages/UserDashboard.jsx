import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Settings, LogOut, Bell, Sun, Moon, Plus } from 'lucide-react';
import Modal from '../components/Modal';
import WeatherComponent from '../components/WeatherComponent';
import WardrobeItemModal from '../components/WardrobeItemModal';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWardrobeModalOpen, setIsWardrobeModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [preferences, setPreferences] = useState({ style: '', color: '', occasion: '' });
  const [wardrobeItems, setWardrobeItems] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
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

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleLogout = () => {
    console.log('User logged out');
    setIsLogoutModalOpen(false); // Close the modal
    navigate('/');
  };

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-md">
        <div className="p-4 flex items-center">
          <Home className="w-6 h-6 text-blue-500" />
          <span className="ml-2 text-xl font-bold text-gray-800 dark:text-gray-100">Dashboard</span>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <Link to="/profile" className="flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-400">
            <User className="w-5 h-5 mr-2" />
            Profile
          </Link>
          <Link to="/settingscomponent" className="flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-400">
            <Settings className="w-5 h-5 mr-2" />
            Settings
          </Link>
          <button
            onClick={() => setIsLogoutModalOpen(true)} // Open the logout modal
            className="flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-400 focus:outline-none"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Log Out
          </button>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 shadow-md rounded-lg mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Welcome Back, කලු මල්ලි</h1>
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-400 focus:outline-none"
            >
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </motion.button>
            <Link to="/notifications">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-2">3</span>
                <Bell className="w-6 h-6 text-gray-800 dark:text-gray-200" />
              </motion.div>
            </Link>
          </div>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg"
          >
            <h2 className="text-xl font-bold mb-4">User Preferences</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Set Preferences
            </button>
          </motion.div>
          <WeatherComponent />
        </section>

        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg col-span-3"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Wardrobe Items</h2>
              <button
                onClick={() => setIsWardrobeModalOpen(true)}
                className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Item
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {wardrobeItems.map((item) => (
                <div key={item._id} className="bg-white dark:bg-gray-700 p-4 rounded shadow-md border border-gray-200 dark:border-gray-600">
                  {item.imageUrl && (<img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover rounded mb-2" />
                  )}
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.category}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg col-span-3"
          >
            <h2 className="text-xl font-bold mb-4">Recommendations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendations.map((recommendation) => (
                <div key={recommendation._id} className="bg-white dark:bg-gray-700 p-4 rounded shadow-md border border-gray-200 dark:border-gray-600">
                  <h3 className="text-lg font-semibold">Occasion: {recommendation.occasion}</h3>
                  <ul>
                    {recommendation.outfit.map((item) => (
                      <li key={item._id} className="text-gray-600 dark:text-gray-300">{item.name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      {isLogoutModalOpen && (
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
                onClick={() => setIsLogoutModalOpen(false)}
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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleSubmit} className="mt-4 p-4 bg-white dark:bg-gray-800 rounded">
          <h2 className="text-lg font-semibold mb-4">Set Preferences</h2>
          <label className="block text-gray-700 dark:text-gray-200 mb-2">Style</label>
          <input
            type="text"
            name="style"
            value={preferences.style}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 mb-4" 
          />
          <label className="block text-gray-700 dark:text-gray-200 mb-2">Color</label>
          <input
            type="text"
            name="color"
            value={preferences.color}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 mb-4" 
          />
          <label className="block text-gray-700 dark:text-gray-200 mb-2">Occasion</label>
          <input
            type="text"
            name="occasion"
            value={preferences.occasion}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 mb-4"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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