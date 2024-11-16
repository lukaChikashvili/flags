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
        if(busRef.current) {
            const {forward, backward, left, right } = getKeys();
             const impulse = {x: 0, y: 0, z: 0};
             const torque = {x: 0, y: 0, z: 0};
             
        

           const impulseStrength = 0.6 * delta;
           const torqueStrength = 0.2 * delta;

           if(forward) {
             impulse.z -= impulseStrength;
             torque.x -= torqueStrength;
             console.log('forward')
           }

           if(backward) {
            impulse.z += impulseStrength;
             torque.x += torqueStrength;
           }


           busRef.current.applyImpulse(impulse);
           busRef.current.applyTorqueImpulse(torque);
           
        }
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
   <RigidBody   colliders = "hull" restitution={0.5} friction={0.8}  ref={busRef}>
      <primitive object={model.scene} scale = {0.6} position = {[0, 10, 0]} castShadow />
      </RigidBody>
  </>
  )
}

export default Experience
