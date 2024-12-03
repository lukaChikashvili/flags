import React, { useContext, useRef } from 'react'
import { UserContext } from '../context/userContext'
import * as THREE from 'three'
import vertex from '../shaders/Neon_Effect/vertex.glsl'
import fragment from '../shaders/Neon_Effect/fragment.glsl'
import { useFrame } from '@react-three/fiber'

const Neon = () => {
    const { showMovie } = useContext(UserContext);

    const uniforms = useRef({
        uTime: { value: 0},
        uGlowColorStart: {value: new THREE.Color('#7A1CAC')}, 
        uGlowColorEnd: {value: new THREE.Color('#2E073F')}, 
    });

    useFrame(() => {
        if(uniforms.current.uTime) {
            uniforms.current.uTime.value += 0.012;
        }
    })

  return (
    <>
    
 <mesh position={[0, 0, 2]} rotation={[0, 0, 0]} visible = {showMovie ? true : false}>
      <planeGeometry args={[10, 10]} />
      <shaderMaterial uniforms={uniforms.current} vertexShader={vertex} fragmentShader={fragment} />
    </mesh>
    </>
  )
}

export default Neon
