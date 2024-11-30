import { RigidBody } from '@react-three/rapier'
import React, { useContext, useEffect, useRef } from 'react'
import * as THREE from 'three'
import vertex from '../shaders/SecondHall/vertex.glsl'
import fragment from '../shaders/SecondHall/fragment.glsl'
import gsap from 'gsap'
import { UserContext } from '../context/userContext'

const SecondHall = () => {

    let leftDoor = useRef();
    let rightDoor = useRef();

    const { secondHall } = useContext(UserContext);


    const secondHallUniforms = useRef({
        color1: { value: new THREE.Color('#1F509A')},
        color2: { value: new THREE.Color('#D4EBF8')}
      });

      useEffect(() => {
       if(secondHall) {
        gsap.to(leftDoor.current.position, {
          x: -40,
          duration: 2,
          ease: "power2.inOut",
        });
        gsap.to(rightDoor.current.position, {
          x: 40,
          duration: 2,
          ease: "power2.inOut",
        });
       }
      }, [secondHall])

      
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

{/* Second Hall doors   */}

<mesh ref={leftDoor} position={[-4, 0, -190]} >
  <planeGeometry args={[13, 20]} />
  <shaderMaterial vertexShader={vertex} fragmentShader={fragment} uniforms={secondHallUniforms.current} />
  
</mesh>

<mesh ref = {rightDoor} position={[9, 0, -190]} >
  <planeGeometry args={[12.9, 20]} />
  <shaderMaterial vertexShader={vertex} fragmentShader={fragment} uniforms={secondHallUniforms.current} />
</mesh>





   </>
  )
}

export default SecondHall
