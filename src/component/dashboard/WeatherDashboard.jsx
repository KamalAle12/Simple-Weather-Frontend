import React, { useState } from 'react'
import SearchBar from "../searchbar/SearchBar";
import WeatherCard from '../WeatherCard/WeatherCard';
import WeatherMap from '../map/WeatherMap';

const WeatherDashboard = () => {
  const[city, setCity] = useState("London");

  return (
    <div className='min-h-screen bg-black text-white p-6'>
      <h1 className='text-3xl font-bold text-center mb-6'>Weather Dashboard</h1>
      <SearchBar setCity={setCity}/>

      <div className='flex flex-col md:flex-row gap-6 w-full'>
        <WeatherCard lat={40.7128} lon={-74.0060} className="w-full md:w-1/2" />
        <WeatherMap className="w-full md:w-1/2"/>  
      </div>

    </div>
  )
}

export default WeatherDashboard