import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Box, Sky, OrbitControls } from '@react-three/drei'
import '../css/BGanimation.css'

export default function BGanimation() {
  const [state, setState] = useState('red')

  return (
    <Canvas>
      <color args={['#333']} attach="background" />
      <OrbitControls />
      <ambientLight />
      <spotLight />
      <Box rotation={[0, 1, 2]} onClick={() => setState(Math.random() * 0xffffff)}>
        <meshStandardMaterial color={state} />
      </Box>
    </Canvas>
  )
}
