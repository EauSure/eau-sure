'use client'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, Float, Sphere, OrbitControls } from '@react-three/drei'
import { useState } from 'react'

function LivingWater() {
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  return (
    // Float makes it bob gently
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Sphere 
        args={[1, 64, 64]} 
        // 1. Reduced scale slightly (from 2.4 to 2.2) so it doesn't feel "too big" on mobile
        scale={2.2}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        {/* DistortMaterial with dynamic state */}
        <MeshDistortMaterial
          color={active ? "#22d3ee" : "#4fd1c5"} // Changes color on click
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={0.1}
          distort={active ? 0.6 : 0.4} // Distorts more when clicked
          speed={hovered ? 4 : 2}      // Moves faster when hovered
        />
      </Sphere>
    </Float>
  )
}

export default function HeroSphere() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <directionalLight position={[-10, -10, -5]} color="blue" intensity={1} />
        
        <LivingWater />
        
        {/* 2. Enable Mouse/Touch Rotation */}
        {/* enableZoom={false} prevents getting stuck while scrolling the page */}
        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 1.5} />
      </Canvas>
    </div>
  )
}