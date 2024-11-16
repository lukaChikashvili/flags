import React, { useContext, useEffect } from 'react'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { UserContext } from '../context/userContext';

const Experience = () => {

    const { selectedColor } = useContext(UserContext);

    // import truck model
     const model = useGLTF('./bus.glb');

     // traverse 3d model
     useEffect(() => {
       model.scene.traverse((child) => {
        if(child.isMesh) {
            if(child.material.name === "body") {
                child.material.color = new THREE.Color(selectedColor);
            }else if(child.material.name === "plastic"){
                child.material.color = new THREE.Color('black');
            }            console.log(child.material.name)
        }
       })
     }, [model, selectedColor]);
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
