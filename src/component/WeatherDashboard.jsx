import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sun, CloudRain, Cloud, ArrowUpDown, Wind,Info, Droplet, Bell, Calendar, Moon, User, Settings,ChevronsRight } from 'lucide-react';
import { motion } from 'framer-motion';
import WeatherData from './WeatherCard/WeatherData';

const WeatherDashboard = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen flex`}>
      {/* Sidebar */}
      <aside className="w-1/5 p-5 border-r border-gray-700">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">OpenWeather</h1>
          <Button variant="outline" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun /> : <Moon />}
          </Button>
        </div>
        <nav className="mt-8">
          <ul className="space-y-4">
            <li className="flex items-center gap-2 hover:text-orange-500">
              <Cloud /> Home
            </li>
            <li className="flex items-center gap-2 hover:text-orange-500">
              <Calendar /> Cases
            </li>
            <li className="flex items-center gap-2 hover:text-orange-500">
              <Bell /> Alerts
            </li>
            <li className="flex items-center gap-2 hover:text-orange-500">
              <Wind /> Tariff
            </li>

            <li className="flex items-center gap-2 hover:text-orange-500">
              <Info /> User Guide
            </li>
            <li className="flex items-center gap-2 hover:text-orange-500">
              <User /> About
            </li>
            <li className="flex items-center gap-2 hover:text-orange-500">
              <Settings /> Settings
            </li>
          </ul>
        </nav>
      </aside>
      
      {/* Main Content */}
      <div className='flex-1'>
        <main className="flex-1 p-6 bg-map h-[75vh]">
          

          <header className="flex justify-between items-center">
            <h2 className="text-2xl">Dashboard: <span className="text-orange-500">London</span></h2>
            <div>
              <Button variant="outline">Trigger Events</Button>
            </div>
          </header>

          {/* Weather Cards */}
          <div className="grid grid-cols-5 gap-4 mt-6">
            <Card className="bg-gray-800 text-white">
              <CardContent>
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-sm">Temperature</h3>
                    {/* <p className="text-4xl">18°C</p> */}
                  </div>
                  <Sun size={15} />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 text-white">
              <CardContent>
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-sm">Precipitation</h3>
                    {/* <p className="text-4xl">0.18 mm</p> */}
                  </div>
                  <CloudRain size={15} />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 text-white">
              <CardContent>
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-sm">Pressure</h3>
                    {/* <p className="text-4xl">0.18 mm</p> */}
                  </div>
                  <ArrowUpDown size={15} />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 text-white">
              <CardContent>
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-sm">Wind speed</h3>
                    {/* <p className="text-4xl">0.18 mm</p> */}
                  </div>
                  <Wind size={15} />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 text-white">
              <CardContent>
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-sm">Clouds</h3>
                    {/* <p className="text-4xl">0.18 mm</p> */}
                  </div>
                  <Cloud size={15} />
                </div>
              </CardContent>
            </Card>
          </div>
        
        </main>
        <section className='mt-6'>
          <WeatherData/>
        </section>
      </div>

      <aside className="w-1/6 p-5 border-r border-gray-700">

        <div className='flex items-center justify-between'>
          <h2 className='text-lg font-bold'>31 March 2025</h2>
          <ChevronsRight size={20} className='text-white'/>
        </div>

        <div className='flex flex-wrap items-center justify-between pt-2 pb-2 gap-0.5'>
          <button className='w-1/3 border p-1  rounded-full bg-orange-700 hover:bg-orange-500 text-white'>All</button>
          <button className='w-1/2 border p-1 rounded-full bg-gray-700 hover:bg-gray-600'>Alerts</button>
          <button className='w-1/3 border p-1 rounded-full bg-gray-700 hover:bg-gray-600'>Cases</button>
          <button className='w-1/2 p-1 border rounded-full bg-gray-700 hover:bg-gray-600'>Reports</button>
          <button className='w-2/3 p-1 border rounded-full bg-gray-700 hover:bg-gray-600'>Trigger Events</button>
        </div>

        <hr />
        <div className='justify-between mt-2'>
          <p className='pt-3 pb-3 pl-2  text-gray-300'>01 April, 2025</p>
        </div>

        <hr />

        <div>
          <div className='flex items-center justify-baseline'>
             <p className='text-yellow-600 pr-7'>Trigger Event</p>
             <div className=' items-center rounded-full h-2.5 w-2.5 bg-orange-700 pr-1'></div>
             <p className='pl-2 text-gray-200'>12:00</p>
          </div>
          <p className='text-gray-100 pt-1 pb-1'>Temperature falls below 15°C at Adelaide</p>
        </div>
        <hr />
        <div>
          <div className='flex items-center justify-baseline'>
             <p className='text-blue-600 pr-13'>Alert</p>
             <div className=' items-center rounded-full h-2.5 w-2.5 bg-orange-700 pr-1'></div>
             <p className='pl-2 text-gray-200'>09:00</p>
          </div>
          <p className='text-gray-100 pt-1 pb-1'>Moderate Rain</p>
        </div>
      </aside>
     
    </div>
  );
};

export default WeatherDashboard;
