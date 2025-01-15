import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiFog } from 'react-icons/wi';
import { Search } from 'lucide-react';

const WeatherComponent = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');
  const [locationWeather, setLocationWeather] = useState(null);
  const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

  const getWeatherIcon = (weatherMain) => {
    switch (weatherMain) {
      case 'Clear':
        return <WiDaySunny className="text-4xl" />;
      case 'Clouds':
        return <WiCloudy className="text-4xl" />;
      case 'Rain':
      case 'Drizzle':
        return <WiRain className="text-4xl" />;
      case 'Snow':
        return <WiSnow className="text-4xl" />;
      case 'Thunderstorm':
        return <WiThunderstorm className="text-4xl" />;
      case 'Fog':
      case 'Mist':
      case 'Haze':
        return <WiFog className="text-4xl" />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchWeatherByLocation, handleLocationError);
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  const fetchWeatherByLocation = async (position) => {
    const { latitude, longitude } = position.coords;
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
      setLocationWeather(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLocationError = (error) => {
    setError(`Geolocation error: ${error.message}`);
  };

  const fetchWeatherByCity = async (e) => {
    e.preventDefault();
    if (!city) return;
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setWeather(response.data);
      setError(null);
    } catch (err) {
      setError(`City not found: ${err.response?.data?.message || err.message}`);
      setWeather(null);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 w-full max-w-md"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-xy"></div>
      
      <div className="relative p-5">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text text-center">
          Weather Info
        </h2>

        {locationWeather && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-center mb-3">
                <h3 className="text-xl font-semibold text-white/90 mb-2">
                  {locationWeather.name}
                </h3>
                <div className="flex justify-center items-center gap-3">
                  <span className="text-3xl font-bold text-white">
                    {Math.round(locationWeather.main.temp)}°C
                  </span>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-blue-400"
                  >
                    {getWeatherIcon(locationWeather.weather[0].main)}
                  </motion.div>
                </div>
                <p className="text-sm text-gray-300 capitalize mt-1">
                  {locationWeather.weather[0].description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-white/5 rounded-lg p-2">
                  <p className="text-gray-400 text-xs text-center mb-1">Humidity</p>
                  <p className="text-lg font-bold text-white text-center">
                    {locationWeather.main.humidity}%
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-2">
                  <p className="text-gray-400 text-xs text-center mb-1">Wind Speed</p>
                  <p className="text-lg font-bold text-white text-center">
                    {locationWeather.wind.speed} m/s
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <form onSubmit={fetchWeatherByCity} className="relative">
          <div className="flex overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm focus-within:border-blue-500 transition-all duration-300">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search city..."
              className="w-full px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center gap-2 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              <Search className="w-4 h-4" />
              <span className="text-sm">Search</span>
            </motion.button>
          </div>
        </form>

        {weather && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white/90 mb-2">
                {weather.name}
              </h3>
              <div className="flex justify-center items-center gap-3">
                <span className="text-3xl font-bold text-white">
                  {Math.round(weather.main.temp)}°C
                </span>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-blue-400"
                >
                  {getWeatherIcon(weather.weather[0].main)}
                </motion.div>
              </div>
              <p className="text-sm text-gray-300 capitalize mt-1">
                {weather.weather[0].description}
              </p>
              
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-white/5 rounded-lg p-2">
                  <p className="text-gray-400 text-xs">Humidity</p>
                  <p className="text-lg font-bold text-white">
                    {weather.main.humidity}%
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-2">
                  <p className="text-gray-400 text-xs">Wind Speed</p>
                  <p className="text-lg font-bold text-white">
                    {weather.wind.speed} m/s
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 backdrop-blur-sm"
          >
            <p className="text-red-400 text-sm text-center">{error}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default WeatherComponent;