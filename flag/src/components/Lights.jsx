import React from 'react'

const Lights = () => {
  return (
   <>
     <ambientLight intensity={1.5}/>
     <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={50}
      />
   </>

  )
}

export default Lights
