import { motion } from 'framer-motion';
import { User, Edit2, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6">
        <>
        <Link to="/userdashboard">
            <button className="flex items-center bg-black hover:bg-gray text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline mb-5">
                <ChevronLeft className="w-5 h-5 mr-2" />
                Back
            </button>
        </Link>
        </>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6"
      >
        <div className="flex items-center space-x-4 mb-6">
          <User className="w-16 h-16 text-black" />
          <div>
            <h1 className="text-2xl font-bold">කලු මල්ලි</h1>
            <p className="text-gray-600 dark:text-gray-300">kalumalli@example.com</p>
          </div>
        </div>
        <button className="flex items-center bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline">
          <Edit2 className="w-5 h-5 mr-2" />
          Edit Profile
        </button>
      </motion.div>
    </div>
  );
};

export default Profile;