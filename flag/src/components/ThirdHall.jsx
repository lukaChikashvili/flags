import { RigidBody } from '@react-three/rapier'
import React, { useRef } from 'react'
import * as THREE from 'three'
import vertex from '../shaders/ThirdHall/vertex.glsl'
import fragment from '../shaders/ThirdHall/fragment.glsl'

const ThirdHall = () => {

    const thirdHallUniforms = useRef({
        color1: { value: new THREE.Color('#525B44')},
        color2: { value: new THREE.Color('#85A98F')}
      });


  return (
  <>
    {/* Third hall   */}

<RigidBody type='fixed'>
 <mesh receiveShadow position={[0, -0.5, -240]}>
 
  <boxGeometry args={[30, 1, 100]} />
  <shaderMaterial uniforms={thirdHallUniforms.current}
                  vertexShader={vertex} fragmentShader={fragment} />
</mesh>

</RigidBody>

<mesh receiveShadow position={[-14.5, 5, -240]}>

  <boxGeometry args={[10, 10, 100]} />
  <shaderMaterial uniforms={thirdHallUniforms.current}
                  vertexShader={vertex} fragmentShader={fragment} />
</mesh>

<mesh receiveShadow position={[14.5, 5, -240]}>

  <boxGeometry args={[1, 10, 100]} />
  <shaderMaterial uniforms={thirdHallUniforms.current}
                  vertexShader={vertex} fragmentShader={fragment} />
</mesh>

<mesh receiveShadow position={[0, 10.5, -240]}>

  <boxGeometry args={[30, 1, 100]} />
  <shaderMaterial uniforms={thirdHallUniforms.current}
                  vertexShader={vertex} fragmentShader={fragment} />
</mesh>



  </>
  )
}

export default ThirdHall
