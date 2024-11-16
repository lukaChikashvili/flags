import React from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import Lights from './Lights'

const CanvasPage = () => {
  return (
   <>
     <Canvas camera={ {
        position: [5, 5, 5],
        fov: 50
     }}>
        <Lights />
        <Experience />
     </Canvas>
   </>
  )
}

export default CanvasPage
