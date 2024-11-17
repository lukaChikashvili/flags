import React, { useContext, useEffect, useRef } from 'react'
import { Environment, OrbitControls, useGLTF, useKeyboardControls } from '@react-three/drei'
import * as THREE from 'three'
import { UserContext } from '../context/userContext';
import { RigidBody } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';

const Experience = () => {

    const { selectedColor } = useContext(UserContext);
    const busRef = useRef();

    // import truck model
     const model = useGLTF('./bus.glb');

     // traverse 3d model
     useEffect(() => {
       model.scene.traverse((child) => {
        if(child.isMesh) {
          console.log(child)
            if(child.material.name === "body") {
                child.material.color = new THREE.Color(selectedColor);
            }else if(child.material.name === "plastic"){
                child.material.color = new THREE.Color('black');
            }          
        }
       })
     }, [model, selectedColor]);

     const [subscribeKeys, getKeys] = useKeyboardControls();

  
   
     useFrame((state, delta) => {
         const { forward, backward, left, right } = getKeys();
        const impulse = { x: 0, y: 0, z: 0};

        const impulseStrength = 10 * delta;

        if (forward) {
          impulse.z -= impulseStrength;
          console.log('Moving forward');
        }
  
        if (backward) {
          impulse.z += impulseStrength;
          console.log('Moving backward');
        }

       

        busRef.current.applyImpulse(impulse, busRef.current.translation());

        

     });

    

   
  
   return (
  <>
 
 <OrbitControls />
  <RigidBody type='fixed' >
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#9EDF9C" />
      </mesh>
      </RigidBody>

   <RigidBody type="dynamic"  colliders = "hull" restitution={0.5} friction={0.8} ref={busRef} >
       <primitive object={model.scene} position = {[0, 10, 0]} scale = {0.7} />
      </RigidBody>
  </>
  )
}

export default Experience
