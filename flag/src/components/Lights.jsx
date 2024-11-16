import React from 'react'

const Lights = () => {
  return (
   <>
     <ambientLight intensity={1.5}/>
     <directionalLight position={[10, 10, 5]} intensity={1} />
   </>

  )
}

export default Lights
