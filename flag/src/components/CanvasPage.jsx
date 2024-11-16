import React from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import Lights from './Lights'
import { Physics } from '@react-three/rapier'
import { KeyboardControls } from '@react-three/drei'

const CanvasPage = () => {
  return (
   <>
     <Canvas camera={ {
        position: [5, 2, 5],
        fov: 50
     }}>
        <Physics gravity={[0, -9.81, 0]}>
            <KeyboardControls map={[
              { name: 'forward', keys: ['ArrowUp', 'w'] },
              { name: 'backward', keys: ['ArrowDown', 's'] },
              { name: 'left', keys: ['ArrowLeft', 'a'] },
              { name: 'right', keys: ['ArrowRight', 'd'] },
            ]}>

          
        <Lights />
        <Experience />
        </KeyboardControls>
        </Physics>

     </Canvas>
   </>
  )
}

export default CanvasPage
