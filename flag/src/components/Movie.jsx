import React from 'react'

const Movie = ({ title, img, year, director, plot }) => {
  return (
    <div className='flex items-center justify-center h-screen p-[20rem] gap-24'>
       <h1 className='text-4xl text-white'>{title}</h1>
       <img src = {img} className='w-[30rem] ' />
       <p>{year}</p>
       <p>{director}</p>
       <p>{plot}</p>
    </div>
  )
}

export default Movie
