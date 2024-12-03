import React from 'react'

const WatchMovie = ({link}) => {
  return (
    <div className='custom-frame '>
      <iframe width="1200" height="500" src={link}  
      className='-mt-[30rem] -ml-[40rem]'
      title="YouTube video player"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen allowTransparency ></iframe>
    </div>
  )
}

export default WatchMovie
