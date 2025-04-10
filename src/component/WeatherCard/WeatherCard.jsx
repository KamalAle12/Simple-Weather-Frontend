import React, { useEffect, useState } from 'react'

const API_KEY = "YOUR_API_KEY";

const WeatherCard = ({lat, lon}) => {

  const[weather, setWeather] = useState(null);

  useEffect(()=>{
    const fetchWeather = async () => {
      try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    
        const data = await res.json();

        if (res.ok) {
          setWeather(data);
        } else {
          console.error("Error fetching weather data:", data.message);
          setWeather(null);
        }
      } catch (error) {
        console.log("Network error:", error);
        setWeather(null);
      }
    };
    fetchWeather();
  }, [lat, lon]);
  return (
    <div className='bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md'>
      {weather ?(
        <div className='text-center'>
          <h2 className='text-2xl'>America/Chicago</h2>
          <p className='text-4xl font-bold'>{weather.main?.temp}°C</p>
          <p>{weather.weather?.[0]?.description || "No description available"}</p>
          <p>Humidity: {weather.main?.humidity}%</p>
          <p>Wind Speed: {weather.wind?.speed || 0} m/s</p>
        </div>
      ): (
        <p>Loading....</p>
      )}
    </div>
  )
}

export default WeatherCard
