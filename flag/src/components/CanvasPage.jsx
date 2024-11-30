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
              {name: 'forward', keys: ['ArrowUp', 'KeyW']},
              {name: 'backward', keys: ['ArrowDown', 'KeyS']},
              {name: 'leftward', keys: ['ArrowLeft', 'KeyA']},
              {name: 'rightward', keys: ['ArrowRight', 'KeyD']},
              {name: 'jump', keys: ['Space']},
            ]}>
     <Canvas shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far:  1000,
            position: [ 2.5, 6, -3 ]
        } }>
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
