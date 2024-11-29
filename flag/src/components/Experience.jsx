import React, { useContext, useEffect, useRef } from 'react'
import { Environment, OrbitControls, useGLTF, useKeyboardControls } from '@react-three/drei'
import * as THREE from 'three'
import { UserContext } from '../context/userContext';
import { RigidBody } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';

const Experience = () => {

 

let sphere = useRef(null);



    

   
  
   return (
  <>
 
 <OrbitControls />

 <mesh ref={sphere}>
   <sphereGeometry />
   <meshStandardMaterial color="red" />
 </mesh>

 <mesh receiveShadow position={[0, -0.5, 0]}>
          <boxGeometry args={[10, 1, 50]} />
          <meshStandardMaterial color="gray" />
        </mesh>

        <mesh receiveShadow position={[-5.5, 2.5, 0]}>
          <boxGeometry args={[1, 5, 50]} />
          <meshStandardMaterial color="lightblue" />
        </mesh>

        <mesh receiveShadow position={[5.5, 2.5, 0]}>
          <boxGeometry args={[1, 5, 50]} />
          <meshStandardMaterial color="lightblue" />
        </mesh>

        <mesh receiveShadow position={[0, 5.5, 0]}>
          <boxGeometry args={[10, 1, 50]} />
          <meshStandardMaterial color="white" />
        </mesh>


 
  </>
  )
}

export default Experience
