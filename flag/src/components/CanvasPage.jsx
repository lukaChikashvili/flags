import React from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import Lights from './Lights'
import { Physics } from '@react-three/rapier'

const CanvasPage = () => {
  return (
   <>
     <Canvas camera={ {
        position: [5, 2, 5],
        fov: 50
     }}>
        <Physics gravity={[0, -9.81, 0]}>
        <Lights />
        <Experience />
        </Physics>
     </Canvas>
   </>
  )
}

export default CanvasPage
