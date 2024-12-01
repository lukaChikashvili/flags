import React from 'react'

const Movie = ({ title, img }) => {
  return (
    <div className='flex items-center justify-center h-screen p-[20rem] gap-24'>
       <h1>{title}</h1>
       <img src = {img} className='w-[30rem] ' />
    </div>
  )
}

export default Movie
