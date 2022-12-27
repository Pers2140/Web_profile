import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {  Sphere, OrbitControls, MeshDistortMaterial } from '@react-three/drei'
import '../css/BGanimation.css'

export default function BGanimation() {
  const [state, setState] = useState('red')

  return (
    <Canvas  style={{"position":"absolute","z-index":"100"}}>
      <color args={['#333']} />
      <OrbitControls enableZoom={false}/>
      <ambientLight />
      <spotLight />
      <Sphere scale={2} rotation={[0, 0, 2]} intesity={2} onClick={() => setState(Math.random() * 0xffffff)}>
        <meshStandardMaterial  />
        <MeshDistortMaterial color={state} distort={.5} speed={1.5}/>
      </Sphere>
    </Canvas>
  )
}
