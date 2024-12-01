import React from 'react'

const Movie = ({ title, img }) => {
  return (
    <div className=''>
       <h1>{title}</h1>
       <img src = {img} />
    </div>
  )
}

export default Movie
