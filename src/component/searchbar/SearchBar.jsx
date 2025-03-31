import React, { useState } from 'react'

const SearchBar = ({setCity}) => {
  const[input, setInput] = useState("");
  return (
    <div className='flex justify-center mb-6'>
      <input type="text"
      placeholder='Enter City...'
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      className='p-2 text-white rounded-l-md' />

      <button onClick={()=>setCity(input)}
        className='bg-blue-500 px-4 rounded-r-md cursor-pointer hover:bg-blue-900'>Search</button>
    </div>
  )
}

export default SearchBar