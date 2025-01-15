import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] font-['SF Pro'] relative flex items-center justify-center py-16 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-[#0A0A0F] to-black/50" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 z-20"
      >
        <ArrowLeft className="w-7 h-7" />
      </motion.button>

      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        {/* Card Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 to-blue-800/30 rounded-3xl blur-2xl" />

        <div className="relative p-8 rounded-3xl bg-black/40 border border-purple-500/10 backdrop-blur-sm shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 rounded-3xl" />

          <div className="relative">
            <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 text-transparent bg-clip-text">
              Welcome Back
            </h1>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-purple-500/10 focus:border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">Email is required</p>
                )}
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", { required: true })}
                    placeholder="Enter password"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-purple-500/10 focus:border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 rounded border-purple-500/30 bg-white/5 text-purple-500 focus:ring-purple-500/20"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-gray-400">
                    Remember me
                  </label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="relative w-full group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                <div className="relative w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-medium">
                  Log In
                </div>
              </motion.button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-black/40 text-gray-400"></span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-4 rounded-xl bg-white/5 border border-purple-500/10 hover:border-purple-500/30 text-white flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                  alt="Google logo"
                  className="w-5 h-5"
                />
                <span>Google</span>
              </motion.button>

              <p className="text-center text-gray-400">
                Don&apos;t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
