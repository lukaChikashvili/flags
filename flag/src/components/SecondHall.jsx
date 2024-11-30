import { RigidBody } from '@react-three/rapier'
import React, { useRef } from 'react'
import * as THREE from 'three'
import vertex from '../shaders/SecondHall/vertex.glsl'
import fragment from '../shaders/SecondHall/fragment.glsl'

const SecondHall = () => {

    const secondHallUniforms = useRef({
        color1: { value: new THREE.Color('#1F509A')},
        color2: { value: new THREE.Color('#D4EBF8')}
      });

      
  return (
    <>
    {/* Second hall   */}

<RigidBody type='fixed'>
 <mesh receiveShadow position={[0, -0.5, -140]}>
 
  <boxGeometry args={[30, 1, 100]} />
  <shaderMaterial uniforms={secondHallUniforms.current}
                  vertexShader={vertex} fragmentShader={fragment} />
</mesh>

</RigidBody>

<mesh receiveShadow position={[-14.5, 5, -140]}>

  <boxGeometry args={[10, 10, 100]} />
  <shaderMaterial uniforms={secondHallUniforms.current}
                  vertexShader={vertex} fragmentShader={fragment} />
</mesh>

<mesh receiveShadow position={[14.5, 5, -140]}>

  <boxGeometry args={[1, 10, 100]} />
  <shaderMaterial uniforms={secondHallUniforms.current}
                  vertexShader={vertex} fragmentShader={fragment} />
</mesh>

<mesh receiveShadow position={[0, 10.5, -140]}>

  <boxGeometry args={[30, 1, 100]} />
  <shaderMaterial uniforms={secondHallUniforms.current}
                  vertexShader={vertex} fragmentShader={fragment} />
</mesh>






   </>
  )
}

export default SecondHall
