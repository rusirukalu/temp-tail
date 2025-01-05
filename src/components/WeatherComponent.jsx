import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiFog } from 'react-icons/wi';

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
        className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100 text-center">Current Weather</h2>

      {locationWeather && (
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 text-center">{locationWeather.name}</h3>
          <div className="flex justify-center items-center">
              <p className="text-2xl mr-4 text-gray-600 dark:text-gray-200">{locationWeather.main.temp} °C</p>
              {getWeatherIcon(locationWeather.weather[0].main)}
          </div>
          <p className="text-gray-600 dark:text-gray-200 text-center">{locationWeather.weather[0].description}</p>
          <div className="flex justify-between">
            <p className="text-gray-600 dark:text-gray-200">Humidity: {locationWeather.main.humidity}%</p>
            <p className="text-gray-600 dark:text-gray-200">Wind Speed: {locationWeather.wind.speed} m/s</p>
          </div>
        </div>
      )}

        <form onSubmit={fetchWeatherByCity} className="mt-4">
        <div className="flex overflow-hidden rounded-2xl border dark:border-gray-600">
            <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="w-full px-3 py-2 border-none focus:outline-none dark:bg-gray-700 dark:text-gray-200"
            />
            <button
            type="submit"
            className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 focus:outline-none"
            >
            Search
            </button>
        </div>
        </form>


      {weather && (
        <div className="mt-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 text-center">{weather.name}</h3>
          <div className="flex justify-center items-center">
              <p className="text-2xl mr-4 text-gray-600 dark:text-gray-200">{weather.main.temp} °C</p>
              {getWeatherIcon(weather.weather[0].main)}
          </div>
          <p className="text-gray-600 dark:text-gray-200 text-center">{weather.weather[0].description}</p>
          <div className="flex justify-between">
            <p className="text-gray-600 dark:text-gray-200">Humidity: {weather.main.humidity}%</p>
            <p className="text-gray-600 dark:text-gray-200">Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        </div>
      )}

      {error && <div className="mt-4 text-red-500 text-center">{error}</div>}
    </motion.div>
  );
};

export default WeatherComponent;