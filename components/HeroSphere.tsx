'use client'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, Float, OrbitControls } from '@react-three/drei'
// We use 'animated' and 'useSpring' from react-spring instead
import { useSpring, animated } from '@react-spring/three'
import { useState } from 'react'
import * as THREE from 'three'

// 1. Create an animated version of the custom material
const AnimatedDistortMaterial = animated(MeshDistortMaterial)

function LivingWater() {
  const [active, setActive] = useState(false)

  // 2. Define the physics-based animation (The "Spring")
  const { scale, color, distort, speed, rotation } = useSpring({
    scale: active ? 1.8 : 1.5,
    color: active ? "#22d3ee" : "#0e7490", // Cyan vs Dark Blue
    distort: active ? 0.6 : 0.4,
    speed: active ? 4 : 2,
    rotation: active ? Math.PI : 0,
    config: { mass: 1, tension: 170, friction: 26 } // "Bouncy" physics config
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      {/* 3. Use animated.mesh instead of motion.mesh */}
      <animated.mesh
        scale={scale}
        rotation-y={rotation}
        onPointerOver={() => setActive(true)}
        onPointerOut={() => setActive(false)}
        onClick={() => setActive(!active)}
      >
        <sphereGeometry args={[1, 64, 64]} />
        
        <AnimatedDistortMaterial
          color={color}
          distort={distort}
          speed={speed}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.1}
        />
      </animated.mesh>
    </Float>
  )
}

export default function HeroSphere() {
  return (
    <div className="h-full w-full" style={{ touchAction: 'none' }}>
      <Canvas camera={{ position: [0, 0, 4.5] }} dpr={[1, 2]}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <directionalLight position={[-10, -10, -5]} color="#22d3ee" intensity={2} />
        
        <LivingWater />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}