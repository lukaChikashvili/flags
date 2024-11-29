import React, { useContext, useEffect, useRef } from 'react'
import { Environment, OrbitControls, useGLTF, useKeyboardControls } from '@react-three/drei'
import * as THREE from 'three'
import vertex from '../shaders/background/vertex.glsl'
import fragment from '../shaders/background/fragment.glsl'

const Experience = () => {

 

let sphere = useRef(null);



    const uniforms = useRef({
      color1: { value: new THREE.Color('#89A8B2')},
      color2: { value: new THREE.Color('#B3C8CF')}
    });


   
  
   return (
  <>
 
 <OrbitControls />

 <mesh ref={sphere}>
   <sphereGeometry />
   <meshStandardMaterial color="red" />
 </mesh>



 <mesh receiveShadow position={[0, -0.5, 0]}>
 
  <boxGeometry args={[20, 1, 100]} />
  <shaderMaterial vertexShader={vertex} fragmentShader={fragment} uniforms={uniforms.current} />
</mesh>

<mesh receiveShadow position={[-10.5, 5, 0]}>

  <boxGeometry args={[1, 10, 100]} />
  <shaderMaterial vertexShader={vertex} fragmentShader={fragment} uniforms={uniforms.current} />
</mesh>

<mesh receiveShadow position={[10.5, 5, 0]}>

  <boxGeometry args={[1, 10, 100]} />
  <shaderMaterial vertexShader={vertex} fragmentShader={fragment} uniforms={uniforms.current} />
</mesh>

<mesh receiveShadow position={[0, 10.5, 0]}>

  <boxGeometry args={[20, 1, 100]} />
  <shaderMaterial vertexShader={vertex} fragmentShader={fragment} uniforms={uniforms.current} />
</mesh>



 
  </>
  )
}

export default Experience
