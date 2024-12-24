import { useState } from "react";
import { Link } from "react-router-dom";
//import { auth, googleProvider, signInWithPopup } from "../firebase-config";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
//import "../pages/UserDashboard";

const Login = () => {
  const {
    register,
    //handleSubmit,
    formState: { errors },
  } = useForm();
  //const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  //const [isLoading, setIsLoading] = useState(false);

//   const handleLogin = async (data) => {
//     setIsLoading(true);
//     try {
//       const userCredential = await auth.signInWithEmailAndPassword(
//         data.email,
//         data.password
//       );
//       const token = await userCredential.user.getIdToken();
//       localStorage.setItem("token", token);
//       navigate("/userdashboard");
//     } catch (error) {
//       console.error("Login error:", error);
//       // Consider adding user-friendly error messages here
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     setIsLoading(true);
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const token = await result.user.getIdToken();
//       localStorage.setItem("token", token);
//       navigate("/userdashboard");
//     } catch (error) {
//       console.error("Google login error:", error);
//       // Consider adding user-friendly error messages here
//     } finally {
//       setIsLoading(false);
//     }
//   };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative font-['SF Pro'] flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center mt-10">
        <div className="flex flex-col items-center justify-center w-full">
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md z-10 mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold mb-10 text-center text-gray-800">
              Welcome back!
            </h1>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">Email is required</p>
                )}
              </div>
              <div className="mb-6 relative">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", { required: true })}
                    placeholder="Enter password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="form-checkbox h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500 accent-blue-500"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-500 hover:text-blue-600"
                >
                  Forgot your password?
                </Link>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#333" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-black text-white font-bold py-2 rounded-full transition-colors duration-300 login-button"
              >
                Log In
              </motion.button>
            </form>

            <div className="my-4 h-px bg-gray-300"></div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              
              className="mt-4 w-full bg-white border border-gray-300 py-2 rounded-full flex items-center justify-center hover:shadow-md transition-shadow duration-200 google-login-button"
              
            >
              <>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                  alt="Google logo"
                  className="w-5 h-5 mr-2"
                />
                <span className="text-gray-800">Continue with Google</span>
              </>
            </motion.button>

            <p className="text-center text-gray-600 mt-4">
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-500 font-medium hover:underline"
              >
                Signup
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;

