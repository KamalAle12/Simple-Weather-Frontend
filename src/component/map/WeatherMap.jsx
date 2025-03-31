import React from 'react'
import {MapContainer, TileLayer, Marker} from 'react-leaflet';
const  API_KEY = "a9f04aceeb1a56a2052c9a1b6ab418f9";

const WeatherMap = () => {
  const position = [40.7128, -74.0060];
  return (
    <div className='w-full max-w-md h-64'>

      <MapContainer center={position} zoom={6} scrollWheelZoom={false} className='w-full h-full'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
        </Marker>
      </MapContainer>

      {/* <MapContainer center={[51.505, -0.09]} zoom={5} className='h-full w-full rounded-lg shadow-lg'>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      </MapContainer> */}
    </div>
  )
}

export default WeatherMap