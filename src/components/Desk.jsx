import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

export default function Desk({ onOpen }) {
  const screenRef = useRef()
  const cupRef = useRef()

  useFrame(({ clock }) => {
    if (cupRef.current) {
      cupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.15
    }
  })

  return (
    <group>
      {/* Room floor */}
      <mesh position={[0,-1.01,0]} receiveShadow>
        <boxGeometry args={[8, 0.02, 8]} />
        <meshStandardMaterial color={'#e7dacb'} />
      </mesh>

      {/* Desk top */}
      <mesh position={[0, -0.2, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 0.12, 1.2]} />
        <meshStandardMaterial color={'#b7875e'} />
      </mesh>

      {/* Legs */}
      <mesh position={[-1.35, -0.8, 0.5]}>
        <boxGeometry args={[0.08, 1.2, 0.08]} />
        <meshStandardMaterial color={'#e9ecef'} />
      </mesh>
      <mesh position={[1.35, -0.8, 0.5]}>
        <boxGeometry args={[0.08, 1.2, 0.08]} />
        <meshStandardMaterial color={'#e9ecef'} />
      </mesh>

      {/* Monitor stand */}
      <mesh position={[0,-0.05,-0.2]} castShadow>
        <boxGeometry args={[0.2, 0.05, 0.2]} />
        <meshStandardMaterial color={'#d1d5db'} />
      </mesh>
      {/* Monitor frame */}
      <group position={[0,0.25,-0.2]}>
        <mesh castShadow>
          <boxGeometry args={[1.6, 0.95, 0.05]} />
          <meshStandardMaterial color={'#1f2937'} />
        </mesh>
        {/* Monitor screen (clickable) */}
        <mesh
          ref={screenRef}
          position={[0,0,0.028]}
          onClick={onOpen}
          onPointerOver={(e)=>{document.body.style.cursor='pointer'}}
          onPointerOut={(e)=>{document.body.style.cursor='auto'}}
        >
          <planeGeometry args={[1.48,0.83]} />
          <meshBasicMaterial color={'#f8c7b6'} />
        </mesh>
      </group>

      {/* Speakers */}
      <mesh position={[-0.9, -0.1, 0.2]} castShadow>
        <cylinderGeometry args={[0.08,0.08,0.14,24]} />
        <meshStandardMaterial color={'#e5e7eb'} />
      </mesh>
      <mesh position={[0.9, -0.1, 0.2]} castShadow>
        <cylinderGeometry args={[0.08,0.08,0.14,24]} />
        <meshStandardMaterial color={'#e5e7eb'} />
      </mesh>

      {/* Cup (floating for delight) */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
        <group ref={cupRef} position={[0.4, -0.05, 0.2]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.07,0.07,0.09,32]} />
            <meshStandardMaterial color={'#fff8ee'} />
          </mesh>
          <mesh position={[0.09,0,0]}>
            <torusGeometry args={[0.04,0.012,16,32]} />
            <meshStandardMaterial color={'#fff8ee'} />
          </mesh>
        </group>
      </Float>

      {/* Plants */}
      <group position={[-1.2,-0.1,0.25]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.07,0.07,0.08,16]} />
          <meshStandardMaterial color={'#f0f0f0'} />
        </mesh>
        <mesh position={[0,0.08,0]} castShadow>
          <coneGeometry args={[0.12,0.18,16]} />
          <meshStandardMaterial color={'#7cc47f'} />
        </mesh>
      </group>
    </group>
  )
}
