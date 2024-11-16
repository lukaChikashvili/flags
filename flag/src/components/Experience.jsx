import React from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'

const Experience = () => {
    // import truck model
     const model = useGLTF('./bus.glb');
   return (
  <>
 
 <OrbitControls />
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#9EDF9C" />
      </mesh>

      <primitive object={model.scene} scale = {0.6} position = {[0, 0.20, 0]} castShadow />
  </>
  )
}

export default Experience
