import React from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import Lights from './Lights'
import { Physics } from '@react-three/rapier'
import { KeyboardControls } from '@react-three/drei'

const CanvasPage = () => {
  return (
   <>
     <KeyboardControls map={[
              { name: 'forward', keys: ['ArrowUp', 'w'] },
              { name: 'backward', keys: ['ArrowDown', 's'] },
              { name: 'left', keys: ['ArrowLeft', 'a'] },
              { name: 'right', keys: ['ArrowRight', 'd'] },
            ]}>
     <Canvas camera={ {
        position: [5, 2, 5],
        fov: 50
     }}>
        <Physics gravity={[0, -9.81, 0]}>
          

          
        <Lights />
        <Experience />
        
        </Physics>

     </Canvas>
     </KeyboardControls>
   </>
  )
}

export default CanvasPage
