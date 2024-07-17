import React, { useState } from 'react'

const VideoTitle = ({title, overview}) => {
  const [showLastOverview, setShowLastOverview] = useState(false)

  const partialOverview = overview.slice(0, 150) + '...';

  const handleOverview = () =>{
    setShowLastOverview(!showLastOverview)
  }

  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black'>
      <h1 className='text-4xl font-bold text-white'>{title}</h1>
      <p className='py-6 text-lg w-1/3 text-white' onClick={handleOverview}>
      {showLastOverview ? overview : partialOverview}
      </p>
      <div className='flex gap-2'>
        <button className='p-2 px-10 bg-white text-black text-xl rounded-md hover:bg-opacity-75'><i className="fa-solid fa-play"></i> Play</button>
        <button className='p-2 px-10 bg-gray-400 text-white text-xl rounded-md bg-opacity-50 hover:bg-opacity-40'><i className="fa-solid fa-circle-info"></i> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle

