import { useState, useEffect } from 'react';
import axios from 'axios';
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
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
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
        <div className="flex">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="w-full px-3 py-2 border rounded-l focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none">
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
    </div>
  );
};

export default WeatherComponent;