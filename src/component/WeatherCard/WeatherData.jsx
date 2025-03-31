import React from 'react';
import {ChevronUp} from 'lucide-react';

const WeatherData = () => {

  const weathersData = [
    {time: '12:00', icon: "🌙", temp: 25, humidity: 68},
    {time: '13:00', icon: "🌤️", temp: 25, humidity: 69},
    {time: '14:00', icon: "☁️", temp: 24, humidity: 71},
    {time: '15:00', icon: "☁️", temp: 24, humidity: 71},
    {time: '16:00', icon: "☁️", temp: 24, humidity: 71},
  ];

  return (
    <div className='bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full mx-auto'>
      <table className='w-full text-center'>
        <thead>
          <tr className='border-none border-gray-700'>
            <th >Weather</th>
            <th >Alert</th>
            <th >Temp (°C)</th>
            <th >Relative Humidity %</th>
          </tr>
        </thead>
        <tbody>
          {weathersData.map((item, index)=>(
            <tr key={index} className='border-none border-gray-700'>
              <td >{item.icon}</td>
              <td >-</td>
              <td >{item.temp}</td>
              <td >{item.humidity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='absolute bottom-10 right-10 bg-gray-800 p-4 rounded-lg shadow-md text-white'>
        <div className='flex items-center justify-between'>
          <h2 className='text-lg font-bold'>18°C ☀️</h2>
          <button className='ml-2 p-1 rounded-full bg-gray-700 hover:bg-gray-600'>
            <ChevronUp size={20} className='text-white'/>
          </button>
        </div>
       
        <p><span className='text-sm text-gray-300 pr-3'>Feels like</span> <span className='pl-6'>17.1°C</span></p>
        <p><span className='text-sm text-gray-300 pr-3'>Precipitation</span> <span className='pl-2'>0.18 mm</span></p>
        <p><span className='text-sm text-gray-300 pr-3'>Wind speed</span> <span className='pl-3'>7.8 m/s</span></p>
        <p><span className='text-sm text-gray-300 pr-3'>Wind Direction</span> 270 deg</p>
      </div>
    </div>
  )
}

export default WeatherData