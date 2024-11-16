import React from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'

const Experience = () => {
    // import truck model
     const model = useGLTF('./truck.glb');
   return (
  <>
 
 <OrbitControls />
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>

      <primitive object={model.scene} scale = {0.0045} position = {[0, 1, 0]} castshadow />
  </>
  )
}

export default Experience
