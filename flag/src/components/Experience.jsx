import React, { useContext, useEffect, useRef } from 'react'
import { Environment, OrbitControls, useGLTF, useKeyboardControls, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import vertex from '../shaders/background/vertex.glsl'
import fragment from '../shaders/background/fragment.glsl'
import { RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'
import abezara from '../assets/abezara.jpg'
import romani from '../assets/mxiaruli.jpg'
import shere from '../assets/sherekilebi.jpg'
import udi from '../assets/udiplomo.jpg'
import siyva from '../assets/siyvaruli.jpg'
import mta from '../assets/mtebi.jpg'
import SecondHall from './SecondHall'
import ThirdHall from './ThirdHall'

const Experience = () => {

 

let body = useRef(null);

// first hall movies
const abez = useTexture(abezara);
const roman = useTexture(romani);

const sherekilebi = useTexture(shere);
const udiplomo = useTexture(udi);

const siyvaruli = useTexture(siyva);
const cisferi = useTexture(mta);

// first hall movie posters

const movies = [
  {title: "აბეზარა", img: abez},
  {title: "მხიარული რომანი", img: roman},
  {title: "შერეკილები", img: sherekilebi},
  {title: "უდიპლომო სასიძო", img: udiplomo},
  {title: "ცისფერი მთები", img: cisferi},
  {title: "სიყვარული ყველას უნდა", img: siyvaruli},
];


// second hall movies



    const uniforms = useRef({
      color1: { value: new THREE.Color('#89A8B2')},
      color2: { value: new THREE.Color('#B3C8CF')}
    });

   
     const [subscribeKeys, getKeys] = useKeyboardControls();

    const jump = () => {
      console.log('jump function triggered');
      if (body.current) {
        body.current.applyImpulse({ x: 0, y: 2, z: 0 });
      }
     
    }

  
     useEffect(() => {
        subscribeKeys(
           (state) => state.jump,

            (value) => {
              if(value) {jump();}
            }
        )
     }, [])


    useFrame((state, delta) => {
      const {forward, backward, rightward, leftward} = getKeys();

      const impulse = { x: 0, y: 0, z: 0};
      const torque = { x: 0, y: 0, z: 0};

      const impulseStrength = 0.6 * delta;
      const torqueStrength = 0.2 * delta;

      if(forward) {
        impulse.z -= impulseStrength;
        torque.x -= torqueStrength;
      }
      
      if(backward) {
        impulse.z += impulseStrength;
        torque.x += torqueStrength;
      }

      if(leftward) {
        impulse.x -= impulseStrength;
        torque.z += torqueStrength;
      }

      if(rightward) {
        impulse.x += impulseStrength;
        torque.z -= torqueStrength;
      }


       body.current.applyImpulse(impulse);
      body.current.applyTorqueImpulse(torque);

    const bodyPosition = body.current.translation();
    const cameraPosition = new THREE.Vector3();
    cameraPosition.copy(bodyPosition);
    cameraPosition.z += 2.25;
  cameraPosition.y += 0.5;

    const cameraTarget = new THREE.Vector3();
    cameraTarget.copy(bodyPosition);
    cameraTarget.y += 0.25;
    

  
    state.camera.position.copy(cameraPosition);
    state.camera.lookAt(cameraTarget);


    })


    const leftWallPos = [-10, 4.5, -70];  
    const rightWallPos = [14.5, 4.5, -70];

    const distanceBetweenPosters = 25;
  
   return (
  <>
 
 <OrbitControls />

<RigidBody colliders = "ball" ref={body} >
  
  <mesh scale={0.4} position={[0, 0, 0]} >
  <icosahedronGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#c0c0c0" 
        metalness={0.8}  
        roughness={0.1}  
        transparency={true}  
        opacity={0.8}  
        reflectivity={0.9} 
        envMapIntensity={1.2}  
      />
  </mesh>
 </RigidBody>
 
 {/* First hall   */}

<RigidBody type='fixed'>
 <mesh receiveShadow position={[0, -0.5, -40]}>
 
  <boxGeometry args={[30, 1, 100]} />
  <shaderMaterial vertexShader={vertex} fragmentShader={fragment} uniforms={uniforms.current} />
</mesh>

</RigidBody>

<mesh receiveShadow position={[-14.5, 5, -40]}>

  <boxGeometry args={[10, 10, 100]} />
  <shaderMaterial vertexShader={vertex} fragmentShader={fragment} uniforms={uniforms.current} />
</mesh>

<mesh receiveShadow position={[14.5, 5, -40]}>

  <boxGeometry args={[1, 10, 100]} />
  <shaderMaterial vertexShader={vertex} fragmentShader={fragment} uniforms={uniforms.current} />
</mesh>

<mesh receiveShadow position={[0, 10.5, -40]}>

  <boxGeometry args={[30, 1, 100]} />
  <shaderMaterial vertexShader={vertex} fragmentShader={fragment} uniforms={uniforms.current} />
</mesh>


{/* first hall  movie posters   */}

{movies.map((movie, index) => {

  if (index % 2 === 0) {
    return (
      <mesh
        key={index}
        receiveShadow
        position={[leftWallPos[0], leftWallPos[1], leftWallPos[2] + (index / 2) * distanceBetweenPosters]}
      >
        <boxGeometry args={[1.2, 7, 20]} />
        <meshStandardMaterial map={movie.img} />
      </mesh>
    );
  }
  

  return (
    <mesh
      key={index}
      receiveShadow
      position={[rightWallPos[0], rightWallPos[1], rightWallPos[2] + ((index - 1) / 2) * distanceBetweenPosters]}
    >
      <boxGeometry args={[1.2, 7, 20]} />
      <meshStandardMaterial map={movie.img} />
    </mesh>
  );
})}



<SecondHall />
<ThirdHall />

 
  </>
  )
}

export default Experience
