import React from 'react'


const Movie = ({ title, img, year, director, plot, closeAbout }) => {
    



  return (
    <div className='flex items-center justify-center h-screen px-[10rem] gap-24'>

      <div className='flex flex-col gap-4 text-xl w-[70rem]'>
      <h1 className='text-6xl text-gray-300'>{title}</h1>
      <span className='w-full h-1 bg-yellow-500 ' />
      
      <div className='flex items-center gap-8'>
      <h2 className='text-4xl font-bold text-white '>{year}</h2>
      <p className='text-2xl text-white'>{director}</p>
      </div>
      <p className='text-2xl text-gray-300'>{plot}</p>

      <button className='bg-yellow-500 rounded-md p-2 shadow-xl text-2xl text-gray-800 font-bold'>Watch movie</button>
      </div>
      

       <img  src = {img} className='w-[30rem] h-[30rem] object-cover rounded-md shadow-lg shadow-gray-600' />


<span className='absolute top-4 right-12 text-4xl text-yellow-500 cursor-pointer'
       onClick={closeAbout}>X</span>

    </div>
  )
}

export default Movie
